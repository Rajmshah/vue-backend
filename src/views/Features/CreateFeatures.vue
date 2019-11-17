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
                <h5 class="card-title m-0">Create Features</h5>
              </div>
              <div class="p-3">
                <!-- :class="{ hasError: $v.form.title.$error }" -->
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                  <b-form-group id="exampleInputGroup1" label="Name:" label-for="exampleInput1">
                    <b-form-input
                      class="rounded-0"
                      id="exampleInput1"
                      type="text"
                      v-model="form.name"
                      required
                      placeholder="Enter Name"
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
          text: "Features",
          href: "/view-serviceplan"
        },
        {
          text: "Create Features"
        }
      ],
      form: {
      name:""
      },
      serviceArray: [],
      show: true
    };
  },
  validations: {
    form: {
      name: {
    required
      },
    }
  },
  created() {
//     service.getAllServicePlan(this.form, data => {
//       this.serviceArray = data.data.result;
//     });
  },
  methods: {
    onSubmit(form) {
        
      service.saveData("Features/saveFeatures", form, data => {
          console.log("create serviceplan",data)
        if (data.data) {
          this.$router.push("/view-features");
        }
      });
    },
    onReset(form) {
    //   evt.preventDefault();
      /* Reset our form values */
      this.form.name = ""; 
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
