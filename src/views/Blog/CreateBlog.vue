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
                <h5 class="card-title m-0">Create Brand</h5>
              </div>
              <div class="p-3">
                <b-form @reset="onReset" v-if="show">
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
                  <b-form-group
                    class="vdate"
                    id="exampleInputGroup1"
                    label="Date:"
                    label-for="exampleInput1"
                  >
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

import { VueEditor } from "vue2-editor";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { required, minLength } from "vuelidate/lib/validators";
import HeaderSection from "@/components/header-section.vue";
import Sidemenu from "@/components/sidemenu-section.vue";
import service from "@/service/apiService";
import Images from "@/components/image.vue";
import { Datetime } from "vue-datetime";

export default {
  name: "Form",
  components: {
    HeaderSection,
    Sidemenu,
    Images,
    VueEditor
    
  },
  data() {
    return {
      datetime: Datetime,
      editor: ClassicEditor,
      editorData: "<p>Rich-text editor content.</p>",
      editorConfig: {
        // The configuration of the rich-text editor.
      },
      errors: [],
      bootstrapBtnPromise: "",
      submitStatus: "true",
      breadCrum: [
        {
          text: "Blog",
          href: "/view-Blog",
        },
        {
          text: "Create Blog",
        },
      ],
      form: {
        author: "",
        title: "",
        video: "",
        pageFooter: "",
        pageHeader: "",
        description: "",
        shortDescription: "",
        image: "",
        metaDescription: "",
        metaKeyword: "",
        tabTitle: "",
        date: "",
        caption: "",
      },

      show: true,
    };
  },
  validations: {
    form: {
      title: {
        required,
      },
      author: { required },
      image: { required },
    },
  },
  created() {},
  methods: {
    onSubmit(form) {
      this.$v.form.$touch();
      if (this.$v.form.$error) {
        return;
      } else {
        service.saveData("Blog/saveData", form, data => {
          if (data.data) {
            this.$router.push("/view-blog");
          }
        });
      }
    },

    onReset(evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.title = "";
      this.form.date = "";
      this.form.author = "";
      this.form.video = "";
      this.form.description = "";
      this.form.pageFooter = "";
      this.form.pageHeader = "";
      this.form.metaKeyword = "";
      this.form.metaDescription = "";
      this.form.image = "";
      this.form.caption = "";
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~@/scss/import";
.error-txt {
  list-style-type: none;
  color: $red;
  padding: 0;
}
.vdate {
  width: 100%;
}
</style>
