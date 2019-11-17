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
                <h5 class="card-title m-0">Edit Header</h5>
                <!-- <h4>Edit User</h4> -->
              </div>
              <div class="p-3">
                <b-form @submit="onSubmit" v-if="show">
                  <!-- <b-form-group id="exampleInputGroup1" :class="{ hasError: $v.form.name.$error }">
                    <label for="exampleInput1">
                      Name
                      <span
                        class="text-danger"
                      >* (Please enter the text in same format as mentioned in the website)</span>
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
                    >Name required</div>
                  </b-form-group> -->

                  <b-form-group id="exampleInputGroup1" :class="{ hasError: $v.form.name.$error }">
                    <label for="exampleInput1">
                      Name
                      <span
                        class="text-danger"
                      >*</span>
                    </label>
                 <b-form-select v-model="form.name" :options="options"></b-form-select>
                  <div
                      class="text-danger small error-txt"
                      v-if="$v.form.name.$error"
                    >Name required</div>
                 </b-form-group>

                  <b-form-group
                    id="exampleInputGroup1"
                    :class="{ hasError: $v.form.tabTitle.$error }"
                  >
                    <label for="exampleInput1">
                      Title
                      <span class="text-danger">*</span>
                    </label>
                    <b-form-input
                      class="rounded-0"
                      id="exampleInput1"
                      type="text"
                      v-model="form.tabTitle"
                      required
                      placeholder="Enter tabTitle"
                    />
                    <div
                      class="text-danger small error-txt"
                      v-if="$v.form.tabTitle.$error"
                    >Title required</div>
                  </b-form-group>
                  <b-form-group
                    id="exampleInputGroup1"
                    :class="{ hasError: $v.form.metaKeyword.$error }"
                  >
                    <label for="exampleInput1">
                      Keyword
                      <span class="text-danger">*</span>
                    </label>
                    <b-form-input
                      class="rounded-0"
                      id="exampleInput1"
                      type="text"
                      v-model="form.metaKeyword"
                      required
                      placeholder="Enter metaKeyword"
                    />
                    <div
                      class="text-danger small error-txt"
                      v-if="$v.form.metaKeyword.$error"
                    >Keyword required</div>
                  </b-form-group>

                  <b-form-group id="exampleInputGroup1">
                    <label for="exampleInput1">
                      metaDescription

                    </label>
                    <b-form-input
                      class="rounded-0"
                      id="exampleInput1"
                      type="text"
                      v-model="form.metaDescription"
                      required
                      placeholder="Enter metaDescription"
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
import { required, minLength } from 'vuelidate/lib/validators';
import HeaderSection from '@/components/header-section.vue';
import Sidemenu from '@/components/sidemenu-section.vue';
import service from '@/service/apiService';
import router from '@/router.js';

export default {
  name: 'Form',
  components: {
    HeaderSection,
    Sidemenu,
  },
  data() {
    return {
      options: [
        { value: 'index', text: 'Home' },
        { value: 'aboutus', text: 'About Us' },
        { value: 'services', text: 'Services' },
        // { value: 'service-ServiceName', text: 'Services Type' },
        { value: 'cars-models', text: 'Car' },
        // { value: 'car-brandId-carId', text: 'Car Type' },
        { value: 'all-brands', text: 'Brand' },
        // { value: 'brand-brandId', text: 'Brand Type' },
        { value: 'blog', text: 'Blog' },
        // { value: 'blog-blogId', text: 'Blog Details' },
        { value: 'faqs', text: 'Faqs' },
      ],
      error: [],
      bootstrapBtnPromise: '',
      breadCrum: [
        {
          text: 'Header',
          href: '/view-allHeader',
        },
        {
          text: 'Edit Header',
        },
      ],
      form: {
        name: 'index',
        tabTitle: '',
        tabTitle: '',
        metaDescription: '',
        metaKeyword: '',
        pageFooter: '',
        pageHeader: '',
      },

      show: true,
    };
  },
  validations: {
    form: {
      name: {
        required,
      },
      tabTitle: { required },
      metaKeyword: { required },
    },
  },
  created() {
    this.getOne();
  },
  methods: {
    getOne() {
      if (this.$route.params.id) {
        service.getOneData(
          `AllHeader/getOne/${this.$route.params.id}`,
          (data) => {
            this.form = data.data;
          },
        );
      }
    },
    onSubmit(form) {
      this.$v.form.$touch();
      if (this.$v.form.$error) {

      } else {
        service.updateHeader(form, (data) => {
          if (data.data) {
            this.$router.push('/view-allHeader');
          }
        });
      }
    },
    onCancel() {
      this.$router.push('/view-allHeader');
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/scss/import";
.error-txt {
  list-style-type: none;
  color: $red;
  padding: 0;
}
.vdatetime-input {
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
}
</style>
