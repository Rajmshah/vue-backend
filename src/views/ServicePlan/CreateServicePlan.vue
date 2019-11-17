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
                <h5 class="card-title m-0">Create Service Plan</h5>
              </div>
              <div class="p-3">
                <!-- :class="{ hasError: $v.form.title.$error }" -->
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                  <b-form-group id="exampleInputGroup1" label="Page Type:" label-for="exampleInput1">
                    <b-form-input
                      class="rounded-0"
                      id="exampleInput1"
                      type="text"
                      v-model="form.pageType"
                      required
                      placeholder="Enter PageType"
                      readonly
                    />
                 
                  </b-form-group>

                  <b-form-group
                    id="exampleInputGroup1"
                    label="Name:"
                    label-for="exampleInput1"
                  >
                    <b-form-input
                      class="rounded-0"
                      id="exampleInput1"
                      type="string"
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
                    label="Price:"
                    label-for="exampleInput1"
                  >
                    <b-form-input
                      class="rounded-0"
                      id="exampleInput1"
                      type="number"
                      v-model="form.price"
                      required
                      placeholder="Enter price"
                    />
                    <div
                      class="text-danger small error-txt"
                      v-if="$v.form.price.$error"
                    >Price required</div>
                  </b-form-group>
      
                    <b-form-group
                    id="exampleInputGroup1"
                    label="Description:"
                    label-for="exampleInput1"
                  >
                    <b-form-input
                      class="rounded-0"
                      id="exampleInput1"
                      type="text"
                      v-model="form.description"
                      required
                      placeholder="Enter description"
                    />
                  </b-form-group>
                 
                  
                      <b-form-group id="exampleInputGroup4" label="Features:" label-for="token5-input">
                    <multiselect
                        v-model="form.features" 
                        :options="featureArray" 
                        :multiple="true" 
                        :close-on-select="true" 
                        placeholder="Pick up service plan features" 
                  ></multiselect>
                  <div class="text-danger small error-txt" v-if="$v.form.features.$error">Feature required</div>
                  </b-form-group>

                    <b-form-group
                    id="exampleInputGroup1"
                    label="Order:"
                    label-for="exampleInput1"
                  
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
                    >Order required</div>
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
import axios from "axios";
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
      errors: [],
      submitStatus: "true",
      breadCrum: [
        {
          text: "Service-Plan",
          href: "/view-serviceplan"
        },
        {
          text: "Create Service-Plan"
        }
      ],
      form: {
        pageType: "Service",
        order: "",
        description: "",
        name: "",
        price: "",
        features: ""
      },
      featureArray: [],
      show: true,
      services:''
    };
  },
  validations: {
    form: {
      name: {
    required
      },
      order: {
        required
      },
        features: {
    required
      },
        price: {
    required
      }
    }
  },
  created() {
    service.getallFeatures(this.form, data => {
      this.featureArray = data.data;
    });
  },
  methods: {
    onSubmit(form) {
        this.$v.form.$touch();
        if(this.$v.form.$error){
          return;
        }else{
        service.saveData("ServicePlan/saveService", form, data => {
        if (data.data) {
          this.$router.push("/view-serviceplan");
        }
      });
        }
    },
    onReset(form) {
    //   evt.preventDefault();
      /* Reset our form values */
      this.form.order = "";
      this.form.name = "";
      this.form.description = "";
      this.form.features="";
      this.form.price="";
      this.form.pageType="";     
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
