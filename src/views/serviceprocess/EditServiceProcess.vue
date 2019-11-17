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
                <h5 class="card-title m-0">Edit Service Process</h5>
              </div>
              <div class="p-3">
                <b-form @submit="onSubmit" v-if="show">
                  <!-- :class="{ hasError: $v.form.title.$error }" -->
                  <b-form-group id="exampleInputGroup1" label="Title:" label-for="exampleInput1">
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
                    <div
                      class="text-danger small error"
                      v-if="!$v.form.title.minLength"
                    >Title must have at least {{$v.form.title.$params.minLength.min}} letters.</div>
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
                  <b-form-group
                    id="exampleInputGroup1"
                    label="Description:"
                    label-for="exampleInput1"
                    :class="{ hasError: $v.form.description.$error }"
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
                    <div
                      class="text-danger small error-txt"
                      v-if="$v.form.description.$error"
                    >Description required</div>
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
                  <label>
                    ServiceProcess Image:
                    <span class="text-danger">(Image size should be 262 * 120)</span>
                  </label>
                  <Images v-model="form.image"></Images>
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
import { required, minLength } from "vuelidate/lib/validators";
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
      serviceArray: [],
      submitStatus: "true",
      breadCrum: [
        {
          text: "Service-Process",
          href: "/view-service-process"
        },
        {
          text: "Edit Service-Process"
        }
      ],
      form: {
        title: "",
        order: "",
        description: "",
        tabTitle: "",
        metaDescription: "",
        metaKeyword: "",
        pageFooter: "",
        pageHeader: "",
        comment: "",
        service: "",
        image: ""
      },
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
    this.getOne();
    service.getAllService(this.form, data => {
      this.serviceArray = data.data.result;
    });
  },
  methods: {
    getOne() {
      // eslint-disable-next-line no-underscore-dangle

      // eslint-disable-next-line no-underscore-dangle
      if (this.$route.params._id) {
        // eslint-disable-next-line no-underscore-dangle
        service.getOne(`ServiceProcess/${this.$route.params._id}`, data => {
          this.form = data.data;
        });
      }
    },
    onSubmit(form) {
      service.updateData("ServiceProcess/updateData", form, data => {
        if (data.data) {
          this.$router.push("/view-service-process");
        }
      });
    },

    onCancel() {
      this.$router.push("/view-service-process");
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
