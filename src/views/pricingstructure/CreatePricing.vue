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
                <h5 class="card-title m-0">Create Pricing Structure</h5>
              </div>
              <div class="p-3">
                <!-- :class="{ hasError: $v.form.serviceName.$error }" -->
                <b-form @submit="onSubmit" v-if="show">
                  <b-form-group
                    id="exampleInputGroup1"
                    label="Classification:"
                    label-for="exampleInput1"
                  >
                    <b-form-input
                      class="rounded-0"
                      id="exampleInput1"
                      type="text"
                      v-model="form.serviceName"
                      required
                      placeholder="Enter Service Name"
                    />
                    <div
                      class="text-danger small error-txt"
                      v-if="$v.form.serviceName.$error"
                    >Service Name required</div>
                  </b-form-group>


                  <label>Estimate:</label>
                  <v-select
                    class="mb-3"
                    :options="options"
                    v-model="form.estimate"
                    taggable
                    multiple
                  ></v-select>


                  <b-form-group id="exampleInputGroup4" label="Service:" label-for="token5-input">
                    <v-select
                      label="title"
                      v-model="form.service"
                      :value="form.service"
                      :options="serviceArray"
                      multiple
                    ></v-select>
                  </b-form-group>
                

                  <b-form-group id="exampleInputGroup3" label="Car:" label-for="token4-input">
                    <v-select
                      label="name"
                      v-model="form.car"
                      :value="form.car"
                      :options="carArray"
                      multiple
                    ></v-select>
                  </b-form-group>

                  <b-form-group id="exampleInputGroup5" label="Car Models:" label-for="token4-input">
                    <v-select v-model="form.carModels" taggable multiple></v-select>
                  </b-form-group>
                  <b-form-group
                    id="exampleInputGroup6"
                    label="Service Type"
                    label-for="token4-input"
                  >
                    <v-select
                      v-model="form.serviceType"
                      :options="serviceTypeArray"
                      taggable
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
                  <!-- v-promise-btn="{ promise: bootstrapBtnPromise }" -->
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
import { constants } from "crypto";

export default {
  name: "Form",
  components: {
    HeaderSection,
    Sidemenu
  },
  data() {
    return {
      errors: [],
      serviceTypeArray: ["Quick Service", "General Service", "Full Service"],
      bootstrapBtnPromise: "",
      submitStatus: "true",
      breadCrum: [
        {
          text: "Pricing",
          href: "/view-pricing"
        },
        {
          text: "Create Pricing"
        }
      ],
      form: {
        serviceName: "",
        tabTitle: "",
        metaDescription: "",
        metaKeyword: "",
        pageFooter: "",
        pageHeader: "",
        estimate: [],
        serviceType: "",
        comment: "",
        carModels: ""
      },
      options: [],
      // brandArray: [],
      serviceArray: [],
      carArray: [],
      show: true
    };
  },
  validations: {
    form: {
      serviceName: {
        required,
        minLength: minLength(4)
      },

      minimumDealerPrice: {
        required
      },
      maximumDealerPrice: {
        required
      }
    }
  },
  created() {
    service.getAllService(this.form, data => {
      this.serviceArray = data.data.result;
    });
    // service.getAllBrand(this.form, data => {
    //   this.brandArray = data.data;
    // });
    service.getAllCarList(this.form, data => {
      this.carArray = data.data;
    });
  },
  methods: {
    onSubmit(form) {
      service.saveData("PricingStructure/saveData", form, data => {
        console.log("dataaaa", data);
        if (data.data) {
          this.$router.push("/view-pricing");
        }
      });
    },
    onReset(evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.serviceName = "";
      this.form.estimate = [];
      this.form.service = [];
      this.form.car = [];
      this.form.tabTitle = "";
      this.form.metaDescription = "";
      this.form.metaKeyword = "";
      this.form.pageFooter = "";
      this.form.pageHeader = "";
      this.form.serviceType = [];
      this.form.comment = "";
      this.form.carModels = [];
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
