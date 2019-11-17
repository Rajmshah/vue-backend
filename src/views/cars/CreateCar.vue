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
                <h5 class="card-title m-0">Create Cars</h5>
              </div>
              <div class="p-3">
                <b-form @submit="onSubmit" v-if="show">
                  <b-form-group id="exampleInputGroup1" :class="{ hasError: $v.form.name.$error }">
                    <label for="exampleInput1">
                      Name:
                      <span class="text-danger">*</span>
                    </label>

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

                  <b-form-group id="exampleInputGroup1" class="text-blue label-text">
                    <label for="exampleInput1">
                      Brand:
                      <span class="text-danger">*</span>
                    </label>
                    <b-form-select id="brandName" v-model="form.brand" required>
                      <option :value="options._id" v-for="options in brandArray">{{options.name}}</option>
                    </b-form-select>
                    <div
                      class="text-danger small error-txt"
                      v-if="$v.form.brand.$error"
                    >Brand required</div>
                  </b-form-group>

                  <b-form-group id="exampleInputGroup1" :class="{ hasError: $v.form.order.$error }">
                    <label for="exampleInput1">
                      Order:
                      <span class="text-danger">*</span>
                    </label>
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

                  <b-form-group id="exampleInputGroup1" label="Keyword:" label-for="exampleInput1">
                    <b-form-input
                      class="rounded-0"
                      id="exampleInput1"
                      type="text"
                      v-model="form.keyword"
                      required
                      placeholder="Enter keyword"
                    />
                  </b-form-group>

                  <label class="mt-2">Description:</label>
                  <ckeditor :editor="editor" v-model="form.description" :config="editorConfig"></ckeditor>

                  <label class="mt-2">Detail Description:</label>
                  <ckeditor
                    :editor="editor"
                    v-model="form.detailDescription"
                    :config="editorConfig"
                  ></ckeditor>

                  <!-- <label class="mt-2">
                    Car Image
                    <span class="text-danger">*  (Image size should be 257 * 156)</span>
                  </label>
                  <Images v-model="form.image"></Images>-->
                  <b-form-group id="exampleInputGroup1" :class="{ hasError: $v.form.image.$error }">
                    <label class="mt-2">
                      Image:
                      <span class="text-danger">* (Image size should be 257 * 156)</span>
                    </label>

                    <Images v-model="form.image" class="mb-0"></Images>
                    <div
                      class="text-danger small error-txt"
                      v-if="$v.form.image.$error"
                    >Image required</div>
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
import { constants } from "crypto";

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
      file: "",
      bootstrapBtnPromise: "",
      submitStatus: "true",
      brandArray: [],
      breadCrum: [
        {
          text: "Car",
          href: "/view-car"
        },
        {
          text: "Create Car"
        }
      ],
      form: {
        order: "",
        name: "",
        video: "",
        description: "",
        metaDescription: "",
        comment: "",
        pageFooter: "",
        pageHeader: "",
        metaKeyword: "",
        tabTitle: "",
        detailDescription: "",
        keyword: "",
        brand: "",
        newModel: "",
        image: ""
      },

      show: true
    };
  },
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(4)
      },
      order: { required },
      brand: { required },
      image: { required }
    }
  },
  created() {
    service.getAllBrand(this.form, data => {
      this.brandArray = data.data;
    });
  },
  methods: {
    onSubmit(form) {
      this.$v.form.$touch();
      if (this.$v.form.$error) {
        return;
      }
      service.saveData("Car/saveData", form, data => {
        if (data.data) {
          this.$router.push("/view-car");
        }
      });
    }
  },
  onReset(evt) {
    evt.preventDefault();
    /* Reset our form values */
    this.form.order = "";
    this.form.brand = [];
    this.form.name = "";
    this.form.video = "";
    this.form.metaDescription = "";
    this.form.metaKeyword = "";
    this.form.description = "";
    this.form.detailDescription = "";
    this.form.keyword = "";
    this.form.comment = "";
    /* Trick to reset/clear native browser form validation state */
    this.show = false;
    this.$nextTick(() => {
      this.show = true;
    });
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
