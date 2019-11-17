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
                  <b-form-group id="exampleInputGroup1" :class="{ hasError: $v.form.image.$error }">
                    <label class="mt-2">
                      image
                      <span class="text-danger">
                        *
                        <span class="text-danger">(Image size should be 1838 * 992)</span>
                      </span>
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
          text: "AfterBefore",
          href: "/view-afterbefore"
        },
        {
          text: "Edit AfterBefore"
        }
      ],
      form: {
        image: "",
        tabTitle: "",
        metaDescription: "",
        metaKeyword: "",
        pageFooter: "",
        pageHeader: ""
      },
      options: [],
      show: true
    };
  },
  validations: {
    form: {
      image: { required }
    }
  },
  created() {
    this.getOne();
  },
  methods: {
    getOne() {
      if (this.$route.params.id) {
        service.getOneData(
          `AfterBefore/getOne/${this.$route.params.id}`,
          data => {
            console.log("****", data);
            this.form = data.data;
          }
        );
      }
    },
    onSubmit(form) {
      this.$v.form.$touch();
      if (this.$v.form.$error) {
        return;
      } else {
        service.updateBeforeAfter(form, data => {
          if (data.data) {
            this.$router.push("/view-afterbefore");
          }
        });
      }
    },
    onCancel() {
      this.$router.push("/view-afterbefore");
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
