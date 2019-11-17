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
                <h5 class="card-title m-0">Create Service</h5>
              </div>
              <div class="p-3">
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
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
                  
                  </b-form-group>

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
                    >order required</div>
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
                    service Image:
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

                  <b-form-group
                    id="exampleInputGroup1"
                    label="metaDescription:"
                    label-for="exampleInput1"
                  >
                    <b-form-input
                      class="rounded-0"
                      id="exampleInput1"
                      type="text"
                      v-model="form.metaDescription"
                    />
                  </b-form-group>
                  <b-form-group
                    id="exampleInputGroup1"
                    label="pageHeader:"
                    label-for="exampleInput1"
                  >
                    <b-form-input
                      class="rounded-0"
                      id="exampleInput1"
                      type="text"
                      v-model="form.pageHeader"
                    />
                  </b-form-group>
                  <b-form-group
                    id="exampleInputGroup1"
                    label="pageFooter:"
                    label-for="exampleInput1"
                  >
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
                    <b-button class="rounded-0 px-3" type="reset" variant="danger">Reset</b-button>
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
      bootstrapBtnPromise: "",
      submitStatus: "true",
      breadCrum: [
        {
          text: "Service",
          href: "view-servicing"
        },
        {
          text: "Create Service"
        }
      ],
      form: {
        order: "",
        Title: "",
        video: "",
        metaKeyword: "",
        tabTitle: "",
        service: "",
        pageFooter: "",
        pageHeader: "",
        metaDescription: "",
        description: "",
        comment: "",
        detailDescription: "",
        image: ""
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

  methods: {
    onSubmit(form) {
      service.saveData("Service/saveData", form, data => {
        if (data.data) {
          this.$router.push("/view-servicing");
        }
      });
    },

    onReset(evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.order = "";
      this.form.title = "";
      this.form.description = "";
      this.form.comment = "";
      this.form.service = [];
      this.form.video = "";
      this.form.metaKeyword = "";
      this.form.image = "";
      this.form.metaDescription = "";
      this.form.detailDescription = "";
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
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
