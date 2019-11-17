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
                <h5 class="card-title m-0">Create User Process</h5>
              </div>
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
                    label="Mobile No"
                    label-for="exampleInput1"
                    :class="{ hasError: $v.form.mobile.$error }"
                  >
                    <b-form-input
                      class="rounded-0"
                      id="exampleInput1"
                      type="number"
                      v-model="form.mobile"
                      required
                      placeholder="Enter Mobile No"
                    />
                    <div
                      class="text-danger small error-txt"
                      v-if="$v.form.mobile.$error"
                    >Mobile No required</div>
                  </b-form-group>
                  <b-form-group
                    id="exampleInputGroup1"
                    label="Email Id"
                    label-for="exampleInput1"
                    :class="{ hasError: $v.form.email.$error }"
                  >
                    <b-form-input
                      class="rounded-0"
                      id="exampleInput1"
                      type="email"
                      v-model="form.email"
                      required
                      placeholder="Enter Email Id"
                    />
                    <div
                      class="text-danger small error-txt"
                      v-if="$v.form.email.$error"
                    >Email required</div>
                    <div
                      class="text-danger small error"
                      v-if="!$v.form.email.minLength"
                    >Email must have at least {{$v.form.email.$params.minLength.min}} letters.</div>
                  </b-form-group>

                  <b-form-group id="exampleInputGroup3" label="Services" label-for="service">
                    <v-select
                      label="title"
                      v-model="form.Service"
                      :value="form.Service"
                      :options="serviceArray"
                      multiple
                    ></v-select>
                  </b-form-group>

                  <b-form-group id="exampleInputGroup3" label="Car" label-for="car"  v-if="form.car">
                    <b-form-select id="car" v-model="form.car">
                      <option v-for="options in carArray" :value="options._id" :key="options._id">{{options.name}}</option>
                    </b-form-select>
                  </b-form-group>

                  <b-form-group
                    id="exampleInputGroup1"
                    label="Brand:"
                    label-for="brandName"
                    class="text-blue label-text"
                  >
                    <b-form-select id="brandName" v-model="form.brand" required>
                      <option
                        :value="options._id"
                        :key="options._id"
                        v-for="options in brandArray"
                      >{{options.name}}</option>
                    </b-form-select>
                  </b-form-group>

                  <b-form-group
                    id="exampleInputGroup9"
                    label="userCarModel:"
                    label-for="exampleInput1"
                     v-if="form.userCarModel"
                  >
                    <b-form-input
                      class="rounded-0"
                      id="exampleInput9"
                      type="text"
                      v-model="form.userCarModel"
                      placeholder="Enter userCarModel"
                    />
                  </b-form-group>

                  <b-form-group
                    id="exampleInputGroup1"
                    label="Description:"
                    label-for="exampleInput9"
                  >
                    <b-form-input
                      class="rounded-0"
                      id="exampleInput9"
                      type="text"
                      v-model="form.description"
                      placeholder="Enter description"
                    />
                  </b-form-group>
                  <b-form-group
                    class="vdate"
                    id="exampleInputGroup1"
                    label="Date:"
                    label-for="exampleInput1"
                  >
                    <datetime id="exampleInput1" v-model="form.date"></datetime>
                  </b-form-group>
                  <b-form-group
                    class="vdate"
                    id="exampleInputGroup12"
                    label="Status:"
                    label-for="exampleInput12"
                  >
                    <b-form-select
                      v-model="form.status"
                      :value="form.status"
                      :options="statusArray"
                    ></b-form-select>
                  </b-form-group>
                  <!-- <b-form-group id="exampleInputGroup1" label="tabTitle:" label-for="exampleInput1">
                    <b-form-input
                      class="rounded-0"
                      id="exampleInput1"
                      type="text"
                      v-model="form.tabTitle"
                    />
                  </b-form-group>-->
                  <!-- <b-form-group
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
                  </b-form-group>-->
                  <!-- <b-form-group
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
                  </b-form-group>-->
                  <!-- <b-form-group
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
                  </b-form-group>-->
                  <!-- <b-form-group
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
                  </b-form-group>-->
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
import { required, minLength } from 'vuelidate/lib/validators';
import { constants } from 'crypto';
import { Datetime } from 'vue-datetime';
import HeaderSection from '@/components/header-section.vue';
import Sidemenu from '@/components/sidemenu-section.vue';
import service from '@/service/apiService';

export default {
  name: 'Form',
  components: {
    HeaderSection,
    Sidemenu,
  },
  data() {
    return {
      errors: [],
      brandArray: [],
      serviceArray: [],
      carArray: [],
      bootstrapBtnPromise: '',
      submitStatus: 'true',
      breadCrum: [
        {
          text: 'User-service',
          href: '/view-user-service',
        },
        {
          text: 'Create User-service',
        },
      ],
      statusArray: [
        { value: 'Open', text: 'Open' },
        { value: 'Close', text: 'Close' },
      ],
      form: {
        name: '',
        mobile: '',
        userCarModel: '',
        comment: '',
        email: '',
        Service: '',
        status: '',
        tabTitle: '',
        metaDescription: '',
        metaKeyword: '',
        pageFooter: '',
        pageHeader: '',
        date: '',
        description: '',
        car: '',
      },
      show: true,
    };
  },
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(4),
      },
      mobile: {
        required,
      },
      email: {
        required,
        minLength: minLength(4),
      },
    },
  },
  created() {
    service.getAllService(this.form, (data) => {
      this.serviceArray = data.data.result;
    });
    service.getAllCar(this.form, (data) => {
      this.carArray = data.data.result;
    });
    service.getAllBrand(this.form, (data) => {
      this.brandArray = data.data;
    });
  },
  methods: {
    onSubmit(form) {
      service.saveData('UserService/saveData', form, (data) => {
        // console.log('dataaaa', data);
        if (data.data) {
          // console.log(' data.data ', data.data);
          this.$router.push('/view-user-service');
        }
      });
    },
    onReset(evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.mobile = '';
      this.form.name = '';
      this.form.email = '';
      this.form.car = [];
      this.form.tabTitle = '';
      this.form.pageFooter = '';
      this.form.pageHeader = '';
      this.form.metaDescription = '';
      this.form.metaKeyword = '';
      this.form.Service = [];
      this.form.status = [];
      this.form.brand = [];
      this.form.userCarModel = '';
      this.form.description = '';
      this.form.comment = '';

      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
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
</style>
