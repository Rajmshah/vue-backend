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
                <h5 class="card-title m-0">Create Warranty</h5>
              </div>
              <div class="p-3">
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                  <b-form-group
                    id="exampleInputGroup1"
                    label="Title"
                    label-for="exampleInput1"
                    :class="{ hasError: $v.form.title.$error }"
                  >
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

                  <b-form-group
                    id="exampleInputGroup1"
                    label="Order:"
                    label-for="exampleInput1"
                    :class="{ hasError: $v.form.order.$error }"
                  >
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

                  <label class="mt-2">Description</label>
                  <ckeditor :editor="editor" v-model="form.description" :config="editorConfig"></ckeditor>

                  <b-form-group
                    class="mt-2"
                    id="exampleInputGroup4"
                    label="Service"
                    label-for="token5-input"
                  >
                    <v-select
                      label="title"
                      v-model="form.service"
                      :value="form.service"
                      :options="serviceArray"
                      multiple
                    ></v-select>
                  </b-form-group>
                  <b-form-group id="exampleInputGroup3" label="Brand" label-for="token4-input">
                    <v-select
                      label="name"
                      v-model="form.brand"
                      :value="form.brand"
                      :options="brandArray"
                      multiple
                    ></v-select>
                  </b-form-group>
                  <b-form-group id="exampleInputGroup3" label="Car" label-for="token7-input">
                    <v-select
                      label="name"
                      v-model="form.car"
                      :value="form.car"
                      :options="carArray"
                      multiple
                    ></v-select>
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
import { required, minLength } from "vuelidate/lib/validators";
import HeaderSection from "@/components/header-section.vue";
import Sidemenu from "@/components/sidemenu-section.vue";
import service from "@/service/apiService";
import Multiselect from "vue-multiselect";
import { constants } from "crypto";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default {
  name: "Form",
  components: {
    HeaderSection,
    Sidemenu,
    Multiselect
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
          text: "Warranty",
          href: "view-warranty"
        },
        {
          text: "Create Warranty"
        }
      ],
      form: {
        title: "",
        order: "",
        comment: "",
        tabTitle: "",
        metaDescription: "",
        metaKeyword: "",
        pageFooter: "",
        pageHeader: "",
        description: ""
      },
      serviceArray: [],
      brandArray: [],
      carArray: [],
      show: true
    };
  },
  validations: {
    form: {
      title: {
        required,
        minLength: minLength(4)
      },
      order: {
        required
      },
      description: {
        required
      }
    }
  },
  created() {
    this.getAllService();
    this.getAllBrand();
    this.getAllCars();
  },
  methods: {
    getAllService() {
      service.getAllService({}, data => {
        this.serviceArray = data.data.result;
      });
    },
    getAllBrand() {
      service.getAllBrand({}, data => {
        this.brandArray = data.data;
      });
    },
    getAllCars() {
      service.getAllCarList({}, data => {
        this.carArray = data.data;
      });
    },
    onSubmit(form) {
      service.saveData("Warranty/saveData", form, data => {
        if (data.data) {
          this.$router.push("/view-warranty");
        }
      });
    },
    onReset(evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.order = "";
      this.form.title = "";
      this.form.description = "";
      this.form.service = [];
      this.form.tabTitle = "";
      this.form.metaDescription = "";
      this.form.metaKeyword = "";
      this.form.pageFooter = "";
      this.form.pageHeader = "";
      this.form.car = [];
      this.form.brand = [];
      this.form.comment = "";
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
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
