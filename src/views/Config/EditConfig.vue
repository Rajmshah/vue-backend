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
                <h5 class="card-title m-0">ContactUs</h5>
              </div>
              <div class="p-3">
                <!-- :class="{ hasError: $v.form.name.$error }" -->
                <!-- <b-form @submit="onSubmit" v-if="show">
                  <b-form-group id="exampleInputGroup1">
                    <label for="exampleInput1">
                      Email:
                    </label>
                    <b-form-input
                      class="rounded-0"
                      id="exampleInput1"
                      type="email"
                      v-model="form.email"
                      required
                      placeholder="Enter email"
                    />
                </b-form-group>-->
                <div class="form-group">
                  <label for="exampleInput1">Email:</label>
                  <input
                    class="form-control rounded-0"
                    id="exampleInput1"
                    type="email"
                    v-model="form.email"
                    required
                    placeholder="Enter email"
                  />
                </div>

                <div class="form-group">
                  <label for="exampleInput1">Mobile No-1:</label>
                  <input
                    class="form-control rounded-0"
                    id="exampleInput1"
                    type="number"
                    v-model="form.mobile1"
                    required
                    placeholder="Enter Mobile No-1"
                  />
                </div>

                <div class="form-group">
                  <label for="exampleInput1">Mobile No-2:</label>
                  <input
                    class="form-control rounded-0"
                    id="exampleInput1"
                    type="number"
                    v-model="form.mobile2"
                    required
                    placeholder="Enter Mobile No-2"
                  />
                </div>

                <div class="form-group">
                  <label for="exampleInput1">Time:</label>
                  <input
                    class="form-control rounded-0"
                    id="exampleInput1"
                    type="text"
                    v-model="form.time"
                    required
                  />
                </div>
                <b-form-group class="text-center">
                  <b-button
                    v-on:click="onSubmit(form)"
                    variant="primary"
                    class="mr-2 px-3 rounded-0"
                  >Submit</b-button>
                </b-form-group>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
import { constants } from "crypto";
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
      errors: [],
      file: "",
      form: {},
      brandArray: [],
      bootstrapBtnPromise: "",
      submitStatus: "true",
      breadCrum: [
        {
          text: "Contact",
          href: "/view-config"
        },
        {
          text: "Edit Contact"
        }
      ],
      show: true
    };
  },

  created() {
    this.getOne();
  },
  methods: {
    getOne() {
      service.getOneData(`Config/getOne`, data => {
        if (data.data == "No Data Found") {
          this.form = { email: "", mobile1: "", mobile2: "", time: "" };
        } else {
          this.form = data.data;
        }
      });
    },
    onSubmit(form) {
      service.saveData("Config/saveData", form, data => {
        if (data.data) {
          this.$toaster.success("Data Save Successfully.", {
            timeout: 1000
          });
        }
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