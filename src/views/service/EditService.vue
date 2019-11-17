<template>
  <div>
    <!-- header -->
    <header>
      <header-section></header-section>
    </header>
    <div class="d-flexs">
      <!-- sidemenu -->
      <sidemenu class="bg-dark"></sidemenu>
      <!-- sidemenu end-->
      <!-- header end -->
      <div class="main-content">
        <!-- breadcrum -->
        <b-breadcrumb :items="breadCrum" class="bg-light border rounded-0" />
        <div class="container-fluid basic-table my-3">
          <div class="card rounded-0">
            <div class="card-body p-0 rounded-0">
              <div class="card-header">
                <h5 class="card-title m-0">Edit Service</h5>
              </div>
              <div class="p-3">
                <b-form @submit="onSubmit" v-if="show">
                  <b-form-group id="exampleInputGroup1" label="Title:" label-for="exampleInput1">
                    <b-form-input
                      class="rounded-0"
                      id="exampleInput1"
                      type="text"
                      v-model="form.title"
                      required
                      placeholder="Enter Title"
                    />
                    <div
                      class="text-danger small error-txt"
                      v-if="$v.form.title.$error"
                    >Title required</div>
                    <div
                      class="text-danger small error"
                      v-if="!$v.form.title.minLength"
                    >Title must have at least {{$v.form.title.$params.minLength.min}} letters.</div>
                  </b-form-group>

                  <!-- :class="{ hasError: $v.form.sequence.$error }" -->
                  <b-form-group id="exampleInputGroup1" label="Order:" label-for="exampleInput1">
                    <b-form-input
                      class="rounded-0"
                      id="exampleInput1"
                      type="number"
                      v-model="form.order"
                      required
                      placeholder="Enter order"
                    />
                    <div
                      class="text-danger small error-txt"
                      v-if="$v.form.order.$error"
                    >Order required</div>
                  </b-form-group>

                  <b-form-group id="exampleInputGroup1" label="Video:" label-for="exampleInput1">
                    <b-form-input
                      class="rounded-0"
                      id="exampleInput1"
                      type="text"
                      v-model="form.video"
                    />
                  </b-form-group>

                  <b-form-group
                    id="exampleInputGroup4"
                    label="Service Type:"
                    label-for="token5-input"
                  >
                    <b-form-select v-model="form.service" :options="options"></b-form-select>
                  </b-form-group>

                  <label class="mt-2">Description:</label>
                  <ckeditor :editor="editor" v-model="form.description" :config="editorConfig"></ckeditor>

                  <label class="mt-2">Detail Description:</label>
                  <ckeditor
                    :editor="editor"
                    v-model="form.detailDescription"
                    :config="editorConfig"
                  ></ckeditor>
                  <label class="mt-2">
                    Service Image:
                    <span class="text-danger">(Image size should be 334 * 121)</span>
                  </label>
                  <Images v-model="form.image"></Images>
                  <b-form-group id="exampleInputGroup1" label="tabTitle:" label-for="exampleInput1">
                    <b-form-input
                      class="rounded-0"
                      id="exampleInput1"
                      type="text"
                      v-model="form.tabTitle"
                    />
                  </b-form-group>
                  <b-form-group
                    id="exampleInputGroup1"
                    label="metaKeyword:"
                    label-for="exampleInput1"
                  >
                    <b-form-input
                      class="rounded-0"
                      id="exampleInput1"
                      type="text"
                      v-model="form.metaKeyword"
                    />
                  </b-form-group>

                  <b-form-group id="exampleInputGroup1" label="metaDescription:" label-for="exampleInput1">
                    <b-form-input
                      class="rounded-0"
                      id="exampleInput1"
                      type="text"
                      v-model="form.metaDescription"
                    />
                  </b-form-group>
                  <b-form-group id="exampleInputGroup1" label="pageHeader:" label-for="exampleInput1">
                    <b-form-input
                      class="rounded-0"
                      id="exampleInput1"
                      type="text"
                      v-model="form.pageHeader"
                    />
                  </b-form-group>
                  <b-form-group id="exampleInputGroup1" label="pageFooter:" label-for="exampleInput1">
                    <b-form-input
                      class="rounded-0"
                      id="exampleInput1"
                      type="text"
                      v-model="form.pageFooter"
                    />
                  </b-form-group>

                  <b-form-group id="exampleInputGroup1" label="Comment:" label-for="exampleInput1">
                    <b-form-input
                      class="rounded-0"
                      id="exampleInput1"
                      type="text"
                      v-model="form.comment"
                    />
                  </b-form-group>
                  <b-form-group class="text-center">
                    <b-button
                      v-on:click="onSubmit(form)"
                      variant="primary"
                      class="mr-2 px-3 rounded-0"
                    >Submit</b-button>
                    <b-button
                      class="rounded-0 px-3"
                      type="cancel"
                      v-on:click="onCancel()"
                      variant="danger"
                    >Cancel</b-button>
                  </b-form-group>
                </b-form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { required, minLength } from "vuelidate/lib/validators";
import axios from "axios";
import HeaderSection from "@/components/header-section.vue";
import Sidemenu from "@/components/sidemenu-section.vue";
import service from "@/service/apiService";
import Images from "@/components/image.vue";

export default {
  name: "Form",
  components: {
    HeaderSection,
    Sidemenu,
    Images
  },
  data() {
    return {
      editor: ClassicEditor,
      editorData: "<p>Rich-text editor content.</p>",
      editorConfig: {
        // The configuration of the rich-text editor.
      },
      selected: null,
      options: [
        { value: "service1", text: "Service1" },
        { value: "service2", text: "Service2" }
      ],
      errors: [],
      submitStatus: "true",
      breadCrum: [
        {
          text: "Services",
          href: "/view-servicing"
        },
        {
          text: "Edit Service"
        }
      ],
      form: {
        order: "",
        Title: "",
        comment: "",
        video: "",
        metaKeyword: "",
        tabTitle: "",
        pageFooter:"",
        pageHeader:"",
        metaDescription:"",
        description: "",
        detailDescription: "",
        image: "",
        service: ""
      },
      show: true
    };
  },
  validations: {
    form: {
      title: {
        required,
        minLength: minLength(4)
      },
      order: { required },
      description: { required },
      detailDescription: { required }
    }
  },
  created() {
    this.getOne();
  },
  methods: {
    getOne() {
      if (this.$route.params._id) {
        service.getOne(`Service/getOne/${this.$route.params._id}`, data => {
          this.form = data.data;
        });
      }
    },
    onSubmit(form) {
      service.updateData("Service/updateData", form, data => {
        if (data.data) {
          this.$router.push("/view-servicing");
        }
      });
    },

    onCancel() {
      this.$router.push("/view-servicing");
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~@/scss/import";
.error-txt {
  list-style-type: none;
  color: $red;
  padding: 0;
}
</style>
