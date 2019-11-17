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
                <h5 class="card-title m-0">Edit Brand</h5>
                <!-- <h4>Edit User</h4> -->
              </div>
              <div class="p-3">
                <b-form @submit="onSubmit" v-if="show">
                  <b-form-group id="exampleInputGroup1" :class="{ hasError: $v.form.name.$error }">
                    <label for="exampleInput1">
                      Name
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
                    >name required</div>
                  </b-form-group>

                  <b-form-group id="exampleInputGroup1" :class="{ hasError: $v.form.order.$error }">
                    <label for="exampleInput1">
                      Order
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
                    id="exampleInputGroup1"
                    label="Description"
                    label-for="exampleInput1"
                  >
                    <b-form-textarea
                      class="rounded-0"
                      id="exampleInput1"
                      type="text"
                      v-model="form.description"
                      required
                      rows="3"
                      max-rows="6"
                      placeholder="Enter Description"
                    />
                  </b-form-group>

                  <b-form-group id="exampleInputGroup1" :class="{ hasError: $v.form.logo.$error }">
                    <label class="mt-2">
                      Logo
                      <span class="text-danger">*</span>
                    </label>

                    <Images v-model="form.logo"></Images>
                    <div
                      class="text-danger small error-txt"
                      v-if="$v.form.logo.$error"
                    >logo required</div>
                  </b-form-group>
                  <label>Inner Logo</label>
                  <Images v-model="form.innerLogo"></Images>
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

                  <!--End -->

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

export default {
  name: "Form",
  components: {
    HeaderSection,
    Sidemenu,
    CreateAddress,
    Images
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
          text: "Brand",
          href: "/view-brand"
        },
        {
          text: "Edit Brand"
        }
      ],
      form: {
        order: "",
        name: "",
        video: "",
        description: "",
        comment: "",
        pageHeader:"",
        pageFooter:"",
        metaDescription: "",
        tabTitle: "",
        metaKeyword: "",
        standardServicing: "",
        customServicing: "",
        vipServicing: "",
        logo: "",
        innerLogo: ""
      },
      options: [],
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
      logo: { required }
    }
  },
  created() {
    this.getOne();
  },
  methods: {
    getOne() {
      if (this.$route.params._id) {
        service.getOneData(`Brand/getOne/${this.$route.params._id}`, data => {
          this.form = data.data;
        });
      }
    },
    onSubmit(form) {
      this.$v.form.$touch();
      if (this.$v.form.$error) {
        return;
      } else {
        service.updateBrand(form, data => {
          if (data.data) {
            this.$router.push("/view-brand");
          }
        });
      }
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
