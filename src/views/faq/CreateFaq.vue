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
                <h5 class="card-title m-0">Create Faq</h5>
              </div>
              <div class="p-3">
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                  <b-form-group id="exampleInputGroup1">
                    <label for="exampleInput1">
                      Question:
                      <span class="text-danger">*</span>
                    </label>
                    <b-form-input
                      class="rounded-0"
                      id="exampleInput1"
                      type="text"
                      v-model="form.question"
                      required
                      placeholder="Enter question"
                    />
                    <div
                      class="text-danger small error-txt"
                      v-if="$v.form.question.$error"
                    >Question required</div>
                  </b-form-group>

                  <b-form-group id="exampleInputGroup1">
                    <label for="exampleInput1">
                      Answer:
                      <span class="text-danger">*</span>
                    </label>
                    <b-form-input
                      class="rounded-0"
                      id="exampleInput1"
                      type="text"
                      v-model="form.answer"
                      placeholder="Enter Answer"
                    />
                    <div
                      class="text-danger small error-txt"
                      v-if="$v.form.answer.$error"
                    >Answer required</div>
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
                  </b-form-group>

                  <b-form-group label="FaqType">
                    <b-form-radio-group
                      id="radio-group-1"
                      v-model="form.faqType"
                      :options="options"
                      name="radio-options"
                    ></b-form-radio-group>
                  </b-form-group>

                  <b-form-group id="exampleInputGroup4" label="Service:" label-for="token5-input">
                    <v-select
                      label="title"
                      v-model="form.service"
                      :value="form.service"
                      :options="serviceArray"
                      multiple
                    ></v-select>
                  </b-form-group>

                  <b-form-group id="exampleInputGroup3" label="Brand:" label-for="token4-input">
                    <v-select
                      label="name"
                      v-model="form.brand"
                      :value="form.brand"
                      :options="BrandArray"
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

export default {
  name: "Form",
  components: {
    HeaderSection,
    Sidemenu
  },
  data() {
    return {
      errors: [],

      selectRadio: null,
      options: [{ text: "general" }, { text: "tag" }],
      bootstrapBtnPromise: "",
      submitStatus: "true",
      breadCrum: [
        {
          text: "Faq",
          href: "/view-faq"
        },
        {
          text: "Create Faq"
        }
      ],
      form: {
        answer: "",
        question: "",
        service: "",
        comment: "",
        metaDescription: "",
        pageFooter: "",
        pageHeader: "",
        brand: "",
        metaKeyword: "",
        tabTitle: "",
        order: ""
      },
      serviceArray: [],
      BrandArray: [],
      show: true
    };
  },
  validations: {
    form: {
      question: {
        required,
        minLength: minLength(4)
      },
      answer: { required, minLength: minLength(4) }
    }
  },
  created() {
    service.getAllService(this.form, data => {
      this.serviceArray = data.data.result;
    });
    service.getAllBrand(this.form, data => {
      this.BrandArray = data.data;
    });
  },
  methods: {
    onSubmit(form) {
      this.$v.form.$touch();
      if (this.$v.form.$error) {
        return;
      } else {
        service.saveData("Faq/saveData", form, data => {
          if (data.data) {
            this.$router.push("/view-faq");
          }
        });
      }
    },
    onReset(evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.answer = "";
      this.form.question = "";
      this.form.order = "";
      this.form.metaKeyword = "";
      this.form.metaDescription = "";
      this.form.pageFooter = "";
      this.form.pageFooter = "";
      this.form.comment = "";
      this.form.service = [];
      this.form.brand = [];
      this.form.faqType = "";

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
