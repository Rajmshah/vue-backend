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
                <h5 class="card-title m-0">ThankYou</h5>
              </div>
              <div class="p-3">
                <div class="form-group">
                  <label for="exampleInput1">Title:</label>
                  <input
                    class="form-control rounded-0"
                    id="exampleInput1"
                    type="title"
                    v-model="form.title"
                    required
                    placeholder="Enter title"
                  />
                </div>

                <div class="form-group">
                  <label for="exampleInput1">Description:</label>
                  <input
                    class="form-control rounded-0"
                    id="exampleInput1"
                    type="description"
                    v-model="form.description"
                    required
                    placeholder="Enter description"
                  />
                </div>

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

                <div class="form-group text-center">
                  <b-button
                    v-on:click="onSubmit(form)"
                    variant="primary"
                    class="mr-2 px-3 rounded-0"
                  >Submit</b-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
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
      file: "",
      submitStatus: "true",
      breadCrum: [
        {
          text: "Thankyou",
          href: "/ThankYou"
        },
        {
          text: "ThankYou"
        }
      ],
      form: {}
    };
  },
  created() {
    this.getOne();
  },
  methods: {
    getOne() {
      service.getOneData(`ThankYou/getOne`, data => {
        if (data.data == "No Data Found") {
          this.form = { title: "", description: "" ,tabTitle:"",metaKeyword:"",metaDescription:""};
        } else {
          this.form = data.data;
        }
      });
    },
    onSubmit(form) {
      service.saveData("ThankYou/saveData", form, data => {
        console.log("*********", data);
        if (data.data) {
          this.$toaster.success("Data Save Successfully.", {
            timeout: 1000
          });
          this.getOne();
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
</style>

