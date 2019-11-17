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
                <h5 class="card-title m-0">Edit Testimonial</h5>
              </div>
              <div class="p-3">
                <b-form @submit="onSubmit" v-if="show">
                  <b-form-group
                    id="exampleInputGroup1"
                    label="Name:"
                    label-for="exampleInput1"
                    :class="{ hasError: $v.form.name.$error }"
                  >
                    <b-form-input
                      class="rounded-0"
                      id="exampleInput1"
                      type="text"
                      v-model="form.name"
                      required
                      placeholder="Enter name"
                    />
                    <div
                      class="text-danger small error-txt"
                      v-if="$v.form.name.$error"
                    >Name required</div>
                  </b-form-group>
                  

                  <b-form-group
                    id="exampleInputGroup1"
                    label="Star:"
                    label-for="exampleInput1"
                    :class="{ hasError: $v.form.star.$error }"
                  >
                    <b-form-input
                      class="rounded-0"
                      id="exampleInput1"
                      type="number"
                      v-model="form.star"
                      required
                      placeholder="Enter star"
                    />
                    <div
                      class="text-danger small error-txt"
                      v-if="$v.form.star.$error"
                    >star required</div>
                  </b-form-group>

                  <label class="mt-2">
                    Description:
                    <span class="text-danger">(Image size should be 262 * 120)</span>
                  </label>
                  <ckeditor :editor="editor" v-model="form.description" :config="editorConfig"></ckeditor>

                  <label class="mt-2">Image</label>
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
      errors: [],
      submitStatus: "true",
      breadCrum: [
        {
          text: "Testimonial",
          href: "/view-testimonial"
        },
        {
          text: "Edit Testimonial"
        }
      ],
      form: {
        name: "",
        star: "",
        comment: "",
        tabTitle: "",
        metaDescription: "",
        metaKeyword: "",
        pageFooter: "",
        pageHeader: "",
        description: "",
        image: ""
      },
      show: true
    };
  },
  validations: {
    form: {
      name: {
        required
      },
      star: {
        required
      },
      description: {
        required
      }
    }
  },
  created() {

    this.id = this.$route.params.id;
    service.getOne(`Testimonial/${this.id}`, data => {
      this.form = data.data;
    });
  },
  methods: {
    onSubmit(form) {
      service.updateTestimonail(form, data => {
        if (data.data) {
          this.$router.push("/view-testimonial");
        }
      });
    },
    onCancel() {
      this.$router.push("/view-brand");
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
