<template>
  <div>
    <div>
      <div class="d-flex">
        Add new
        <!-- <button class="d-flex btn btn-primary ml-auto">Create</button> -->
        <b-button class="d-flex ml-auto" variant="primary" v-b-modal.modal-1>Launch demo modal</b-button>
      </div>

      <b-modal id="modal-1" size="lg" hide-footer title="Add new Address">
        <b-form @submit="onSubmit" @reset="onReset">
          <b-form-group
            id="input-group-1"
            label="Email address:"
            label-for="input-1"
            description="We'll never share your email with anyone else."
          >
            <b-form-input
              id="input-1"
              v-model="formData.email"
              type="email"
              required
              placeholder="Enter email"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
            <b-form-input id="input-2" v-model="formData.name" required placeholder="Enter name"></b-form-input>
          </b-form-group>

          <!-- <b-form-group id="input-group-3" label="Food:" label-for="input-3">
                <b-form-select id="input-3" v-model="formData.food" :options="foods" required></b-form-select>
          </b-form-group>-->

          <b-form-group id="input-group-4">
            <b-form-checkbox-group v-model="formData.checked" id="checkboxes-4">
              <b-form-checkbox value="me">Check me out</b-form-checkbox>
              <b-form-checkbox value="that">Check that out</b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>

          <b-button type="submit" class="mr-3" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
      </b-modal>

      <Table/>
    </div>
  </div>
</template>

<script>
import Table from '@/components/Table.vue';

export default {
  components: {
    Table,
  },
  data() {
    return {
      formData: {},
    };
  },
};
</script>

<style lang="scss" scoped>
.font-size-md {
  font-size: 26px;
}
</style>
