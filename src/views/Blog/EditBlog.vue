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
        <b-breadcrumb :items="breadCrum" append class="bg-light border rounded-0" />
        <div class="container-fluid basic-table my-3">
          <div class="card rounded-0">
            <div class="card-body p-0 rounded-0">
              <div class="card-header">
                <h5 class="card-title m-0">Edit Blog</h5>
                <!-- <h4>Edit User</h4> -->
              </div>
              <div class="p-3">
                <b-form @submit="onSubmit" v-if="show">
                  <b-form-group id="exampleInputGroup1" :class="{ hasError: $v.form.title.$error }">
                    <label for="exampleInput1">
                      Title
                      <span class="text-danger">*</span>
                    </label>
                    <b-form-input
                      class="rounded-0"
                      id="exampleInput1"
                      type="text"
                      v-model="form.title"
                      required
                      placeholder="Enter title"
                    />
                    <div
                      class="text-danger small error-txt"
                      v-if="$v.form.title.$error"
                    >Title required</div>
                  </b-form-group>
                  <b-form-group id="exampleInputGroup1" label="Date:" label-for="exampleInput1">
                    <datetime id="exampleInput1" v-model="form.date"></datetime>
                  </b-form-group>
                  <b-form-group
                    id="exampleInputGroup1"
                    :class="{ hasError: $v.form.author.$error }"
                  >
                    <label for="exampleInput1">
                      Author
                      <span class="text-danger">*</span>
                    </label>
                    <b-form-input
                      class="rounded-0"
                      id="exampleInput1"
                      type="text"
                      v-model="form.author"
                      required
                      placeholder="Enter author"
                    />
                    <div
                      class="text-danger small error-txt"
                      v-if="$v.form.author.$error"
                    >Author required</div>
                  </b-form-group>

                  <b-form-group id="exampleInputGroup1" label="Video:" label-for="exampleInput1">
                    <b-form-input
                      class="rounded-0"
                      id="exampleInput1"
                      type="text"
                      v-model="form.video"
                    />
                  </b-form-group>

                  <label class="mt-2">Description</label>
                  <!-- <ckeditor :editor="editor" v-model="form.description" :config="editorConfig"></ckeditor> -->
                    <!-- <vue-editor v-model="form.description"></vue-editor> -->
                      <tinymce id="d1" v-model="form.description"></tinymce>

                  <b-form-group id="exampleInputGroup1" :class="{ hasError: $v.form.image.$error }">
                    <label class="mt-2">
                      Image
                      <span class="text-danger">*</span>
                    </label>

                    <Images v-model="form.image"></Images>
                    <div
                      class="text-danger small error-txt"
                      v-if="$v.form.image.$error"
                    >image required</div>
                  </b-form-group>
                  
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

                  <b-form-group id="exampleInputGroup1" label="Caption:" label-for="exampleInput1">
                    <b-form-input
                      class="rounded-0"
                      id="exampleInput1"
                      type="text"
                      v-model="form.caption"
                    />
                  </b-form-group>

                  <!--End -->
                  <!-- v-promise-btn="{ promise: bootstrapBtnPromise }" -->
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
import { VueEditor } from "vue2-editor";
import * as moment from "moment/moment";
import { required, minLength } from "vuelidate/lib/validators";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import HeaderSection from "@/components/header-section.vue";
import Sidemenu from "@/components/sidemenu-section.vue";
import CreateAddress from "@/components/CreateAddress.vue";
import service from "@/service/apiService";
import router from "@/router.js";
import Images from "@/components/image.vue";
import { constants } from "crypto";
import { Datetime } from "vue-datetime";

export default {
  name: "Form",
  components: {
    HeaderSection,
    Sidemenu,
    CreateAddress,
    Images,
     VueEditor
  },
  data() {
    return {
      error: [],
      editor: ClassicEditor,
      editorData: "<p>Rich-text editor content.</p>",
      editorConfig: {
        // The configuration of the rich-text editor.
      },
      userDate: undefined,
      bootstrapBtnPromise: "",
      breadCrum: [
        {
          text: "Blog",
          href: "/view-blog"
        },
        {
          text: "Edit Blog"
        }
      ],
      form: {
        author: "",
        title: "",
        video: "",
        metaKeyword: "",
        tabTitle: "",
        pageHeader: "",
        pageFooter: "",
        metaDescription: "",
        description: "",
        shortDescription: "",
        image: "",
        date: "",
        caption: ""
      },

      show: true
    };
  },
  validations: {
    form: {
      title: {
        required
      },
      author: { required },
      image: { required }
    }
  },
  created() {
    this.getOne();
  },
  methods: {
    getOne() {
      if (this.$route.params.id) {
        service.getOneData(`Blog/getOne/${this.$route.params.id}`, data => {
          this.form = data.data;
        });
      }
    },
    onSubmit(form) {
      this.$v.form.$touch();
      if (this.$v.form.$error) {
        return;
      } else {
        service.updateBlog(form, data => {
          if (data.data) {
            this.$router.push("/view-blog");
          }
        });
      }
    },
    onCancel() {
      this.$router.push("/view-blog");
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
.vdatetime-input {
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
}
</style>
