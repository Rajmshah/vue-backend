ow<template>
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
                <h5 class="card-title m-0">Create How It Works</h5>
              </div>
              <!-- :class="{ hasError: $v.form.name.$error }" -->
              <div class="p-3">
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                  <b-form-group id="exampleInputGroup1" label="Name:" label-for="exampleInput1">
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
                    >Name required</div>
                   
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
                    id="exampleInputGroup3"
                    label="Description:"
                    label-for="token4-input"
                  >
                    <v-select v-model="form.description" taggable multiple></v-select>
                  </b-form-group>
                  <label>
                    Process Image:
                    <span
                      class="text-danger"
                    >(Image should be in svg format with size 120 * 120)</span>
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
      bootstrapBtnPromise: "",
      submitStatus: "true",
      breadCrum: [
        {
          text: "how-it-works",
          href: "view-how-it-works"
        },
        {
          text: "Create how-it-works"
        }
      ],
      form: {
        name: "",
        order: "",
        comment: "",
        tabTitle: "",
        metaDescription: "",
        metaKeyword: "",
        pageFooter: "",
        pageHeader: "",
        description: "",
        image: ""
      },
      TokenOption4: [
        {
          name: "Audi"
        },
        {
          name: "Maruti Suzuki"
        }
      ],
      show: true
    };
  },
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(4)
      },
      order: { required }
    }
  },
  methods: {
    onSubmit(form) {
      service.saveData("HowItWork/saveData", form, data => {
        if (data.data) {
          this.$router.push("/view-how-it-works");
        }
      });
    },

    onReset(evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.order = "";
      this.form.name = "";
      this.form.description = "";
      this.form.image = "";
      this.form.comment = "";
      this.form.tabTitle = "";
      this.form.metaDescription = "";
      this.form.metaKeyword = "";
      this.form.pageFooter = "";
      this.form.pageFooter = "";

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
