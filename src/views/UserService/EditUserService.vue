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
                <h5 class="card-title m-0">Edit User Service</h5>
              </div>
              <div class="p-3">
                <b-form @submit="onSubmit" v-if="show">
                  <b-form-group
                    id="exampleInputGroup1"
                    label="Name:"
                    label-for="exampleInput1"
                    :class="{ hasError: $v.form.name.$error }"
                    v-if="form.name"
                    readonly
                  >
                    <b-form-input
                      class="rounded-0"
                      id="exampleInput1"
                      type="text"
                      v-model="form.name"
                      placeholder="Enter name"
                      readonly
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
                    v-if="form.mobile"
                    readonly
                  >
                    <b-form-input
                      class="rounded-0"
                      id="exampleInput1"
                      type="number"
                      v-model="form.mobile"
                      required
                      placeholder="Enter Mobile No"
                      readonly
                    />
                    <div
                      class="text-danger small error-txt"
                      v-if="$v.form.mobile.$error"
                    >Mobile No required</div>
                  </b-form-group>
                  <b-form-group
                    id="exampleInputGroup1"
                    label="Email"
                    label-for="exampleInput1"
                    :class="{ hasError: $v.form.email.$error }"
                    v-if="form.email"

                  >
                    <b-form-input
                      class="rounded-0"
                      id="exampleInput1"
                      type="email"
                      v-model="form.email"
                      required
                      placeholder="Enter Email"
                      readonly
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
                  <b-form-group id="exampleInputGroup3" label="Services" label-for="service" v-if="form.Service">
                    <v-select
                      label="title"
                      v-model="form.Service"
                      :value="form.Service"
                      :options="serviceArray"
                      multiple
                      disabled
                    ></v-select>
                  </b-form-group>
                  <b-form-group
                    id="exampleInputGroup1"
                    label="Brand:"
                    label-for="brandName"
                    class="text-blue label-text"
                    v-if="form.brand"
                  >
                    <b-form-select id="brandName" v-model="form.brand" required>
                      <option
                        :value="options._id"
                        :key="options._id"
                        v-for="options in brandArray"
                        disabled
                      >{{options.name}}</option>
                    </b-form-select>
                  </b-form-group>

                  <b-form-group
                    id="exampleInputGroup3"
                    label="Car:"
                    label-for="car"
                    class="text-blue label-text"
                    v-if="form.car"
                  >
                    <b-form-select id="car" v-model="form.car" required>
                      <option
                        :value="options._id"
                        :key="options._id"
                        v-for="options in carArray"
                        disabled
                      >{{options.name}}</option>
                    </b-form-select>
                  </b-form-group>
                  <b-form-group
                    id="exampleInputGroup1"
                    label="Description:"
                    label-for="exampleInput9"
                    v-if="form.description"
                  >
                    <b-form-input
                      class="rounded-0"
                      id="exampleInput9"
                      type="text"
                      v-model="form.description"
                      placeholder="Enter description"
                      readonly
                    />
                  </b-form-group>

                  <b-form-group
                    id="exampleInputGroup1"
                    label="Car:"
                    label-for="exampleInput9"
                    v-if="form.userCarModel"
                  >
                    <b-form-input
                      class="rounded-0"
                      id="exampleInput9"
                      type="text"
                      v-model="form.userCarModel"
                      placeholder="Enter userCarModel"
                      readonly
                    />
                  </b-form-group>
                  <b-form-group id="exampleInputGroup1" label="Date:" label-for="exampleInput1" v-if="form.date">
                    <datetime id="exampleInput1" v-model="form.date" disabled></datetime>
                  </b-form-group>
                  <b-form-group
                    class="vdate"
                    id="exampleInputGroup12"
                    label="Status:"
                    label-for="exampleInput12"
                    v-if="form.status"
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
                  </b-form-group> -->
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
                  </b-form-group> -->
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
                  </b-form-group> -->
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
                  </b-form-group> -->
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
                  </b-form-group> -->
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
import { required, minLength } from 'vuelidate/lib/validators';
import { Datetime } from 'vue-datetime';
import { constants } from 'crypto';
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
      userDate: undefined,
      bootstrapBtnPromise: '',
      submitStatus: 'true',
      breadCrum: [
        {
          text: 'User-Service',
          href: '/view-user-service',
        },
        {
          text: 'Edit User-Service',
        },
      ],
      statusArray: [
        { value: 'Open', text: 'Open' },
        { value: 'Close', text: 'Close' },
      ],
      form: {
        name: '',
        mobile: '',
        email: '',
        car: '',
        date: '',
        tabTitle: '',
        pageFooter: '',
        pageHeader: '',
        metaDescription: '',
        metaKeyword: '',
        comment: '',
        fuelType: '',
        Service: '',
      },
      show: true,
    };
  },
  validations: {
    form: {
      name: {
        required,
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
    this.id = this.$route.params.id;
    service.getOne(`UserService/${this.id}`, (data) => {
      this.form = data.data;
    });
    service.getAllService(this.form, (data) => {
      this.serviceArray = data.data.result;
    });
    service.getAllCar({ pageLimit: 1000 }, (data) => {
      this.carArray = data.data.result;
    });
    service.getAllBrand(this.form, (data) => {
      this.brandArray = data.data;
    });
  },
  methods: {
    onSubmit(form) {
      var submit ={}
      submit.status=form.status,
      submit.comment=form.comment
      submit._id = this.id;

      service.updateUserService(submit, (data) => {

        console.log("userService",submit)
       
        if (data.data) {
          this.$router.push('/view-user-service');
        }
      });
    },
    onCancel() {
      this.$router.push('/view-user-service');
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
