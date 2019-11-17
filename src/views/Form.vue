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
      <div class="main-content bg-light">
        <!-- breadcrum -->
        <b-breadcrumb :items="breadCrum" class="bg-light border rounded-0"/>
        <div class="container-fluid basic-table my-3">
          <b-card-group deck>
            <b-card header="Forms" header-tag="header" class="rounded-0 text-uppercase">
              <b-card-text class="p-0 rounded-0">
                <div>
                 <form name="fields" class="form" @submit.prevent="onSubmit">
                <!-- Name field -->
                <div class="form-group" :class="{'form-group--error': $v.name.$error }">
                  <label for="name" class="orange">Name</label>
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    id="firstName"
                    placeholder="Enter Your Name"
                    v-model="$v.name.$model"
                  />
                  <div class="text-danger small error" v-if="!$v.name.required && $v.name.$error">Field is required</div>

                  <div
                    class="text-danger small error"
                    v-if="!$v.name.minLength"
                  >Name must have at least {{$v.name.$params.minLength.min}} letters.</div>
                </div>

                <!-- Email -->
                <div class="form-group" :class="{'form-group--error': $v.email.$error }">
                  <label for="inputEmail" class="orange">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="inputEmail"
                    placeholder="Email"
                    name="email"
                    v-model="$v.email.$model"
                  />
                  <div class="text-danger small error" v-if="!$v.email.required && $v.email.$error">Email is required</div>
                </div>

                <!-- Mobile -->

                <div class="form-group" :class="{'form-group--error': $v.mobile.$error }">
                  <label for="phonenumber" class="orange">Phone Number</label>
                  <input
                    type="tel"
                    class="form-control"
                    id="inputphonenumber"
                    placeholder="Phone number"
                    name="mobile"
                  v-model="$v.mobile.$model"
                  />
                  <div class="text-danger small error" v-if="!$v.mobile.required && $v.mobile.$error">Mobile Number is required</div>
                </div>


                <!-- Date of Birth -->

                <div class="form-group" :class="{'form-group--error': $v.dob.$error }">
                  <label>Birthdate</label>
                  <input type="date" class="form-control" id="birthdate"  v-model="$v.dob.$model"/>
                  <div class="text-danger small error" v-if="!$v.dob.required && $v.dob.$error">Birthdate is required</div>
                </div>


                <!-- Gender -->
                <div class="gender">
                  <label>Gender</label>
                  <div class="custom-control custom-radio">
                    <input
                      type="radio"
                      class="custom-control-input"
                      id="defaultUnchecked"
                      name="defaultExampleRadios"
                    />
                    <label class="custom-control-label" for="defaultUnchecked">Default unchecked</label>
                  </div>
                  <div class="custom-control form-group custom-radio">
                    <input
                      type="radio"
                      class="custom-control-input"
                      id="defaultChecked"
                      name="defaultExampleRadios"
                      checked
                    />
                    <label class="custom-control-label" for="defaultChecked">Default checked</label>
                  </div>
                </div>


                <div class="form-group" :class="{'form-group--error': $v.password.$error }">
                  <label for="inputPassword" class="orange">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="inputPassword"
                    name="password"
                    placeholder="Password"
                    v-model="$v.password.$model"
                  />
                    <div class="text-danger small error" v-if="!$v.password.required && $v.password.$error">Password is required</div>
                </div>


                <div class="form-group"  :class="{'form-group--error': $v.repeatPassword.$error }">
                  <label for="inputPassword" class="orange">Confirm password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="inputconfirmPassword"
                    placeholder="Confirm password"
                     v-model="$v.repeatPassword.$model"
                  />
                   <div class="text-danger small error" v-if="!$v.repeatPassword.required && $v.repeatPassword.$error">Confirm Password is required</div>
                </div>


                <div class="form-group"  :class="{'form-group--error': $v.address.$error }">
                  <label for="exampleFormControlTextarea2">Address</label>
                  <textarea
                    class="form-control rounded-0"
                    id="exampleFormControlTextarea2"
                    rows="3"
                    name="address"
                     v-model="$v.address.$model"
                  ></textarea>
                   <div class="text-danger small error" v-if="!$v.address.required && $v.address.$error"> Address is required</div>
                </div>


                <div class="checkbox form-group">
                  <label class="font-16">Checkbox</label>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="defaultChecked2"
                      checked
                    />
                    <label class="custom-control-label" for="defaultChecked2">Default checked</label>
                  </div>
                  <!-- <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="defaultChecked2"
                      checked
                    />
                    <label class="custom-control-label" for="defaultChecked2">Default checked</label>
                  </div>-->
                </div>
                <div class="select form-group">
                  <label>Select Content</label>
                  <select class="browser-default custom-select">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div class="custom-control form-group custom-switch">
                  <input type="checkbox" class="custom-control-input" id="customSwitches" />
                  <label
                    class="custom-control-label"
                    for="customSwitches"
                  >Toggle this switch element</label>
                </div>
                <div class="d-flex justify-content-center">
                  <div class="p-2">
                    <button class="btn btn-primary" @click="$v.$touch()">Save</button>
                  </div>
                  <div class=" p-2">
                    <button class="btn btn-danger">Cancel</button>
                  </div>
                </div>
              </form>
                </div>
              </b-card-text>
            </b-card>
          </b-card-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  required, minLength, sameAs, email,
} from 'vuelidate/lib/validators';
import HeaderSection from '@/components/header-section.vue';
import Sidemenu from '@/components/sidemenu-section.vue';

export default {
  name: 'Form',
  components: {
    HeaderSection,
    Sidemenu,
  },
  data() {
    return {
      name: '',
      email: '',
      password: '',
      repeatPassword: '',
      address: '',
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(4),
    },
    email: {
      required,
      email,
    },
    mobile: {
      required,
    },
    dob: {
      required,
    },
    password: {
      required,
      minLength: minLength(6),
    },
    repeatPassword: {
      required,
      sameAsPassword: sameAs('password'),
    },
    address: {
      required,
    },
  },
  methods: {
    submit() {
   
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR';
      } else {
        // do your submit logic here
        this.submitStatus = 'PENDING';
        setTimeout(() => {
          this.submitStatus = 'OK';
        }, 500);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~@/scss/import";
</style>
