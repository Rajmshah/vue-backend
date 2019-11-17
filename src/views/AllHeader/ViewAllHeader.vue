<template>
  <div>
    <!-- header -->
    <header>
      <header-section></header-section>
    </header>
    <!-- header end -->
    <div class="d-flexs">
      <!-- sidemenu -->
      <sidemenu class="bg-dark"></sidemenu>
      <!-- sidemenu end-->
      <div class="main-content bg-light">
        <!-- breadcrum -->
        <!-- <b-breadcrumb :items="breadCrum" class="bg-light border rounded-0"/> -->
        <div class="container-fluid basic-table my-3">
          <div class="card rounded-0">
            <div class="p-0 rounded-0">
              <div class="card-header">
                <div class="search search-width float-right mt-minus7">
                  <div class="row no-gutters align-items-center">
                    <!-- <div class="col">
                      <input
                        class="form-control border-0 rounded-0 text-blue"
                        type="text"
                        v-model="searchText"
                        @input="viewHeader(1)"
                        placeholder="Search"
                      />
                    </div>-->
                    <div class="ml-5">
                      <button
                        class="ml-auto text-dark font-weight-bold btn btn-warning"
                        onclick="window.location.href='/create-AllHeader'"
                      >Create Header</button>
                    </div>
                  </div>
                </div>
                <h5 class="card-title m-0">Header</h5>
              </div>
              <table class="mb-0 table table-hover table-striped">
                <thead>
                  <tr class="table-body-header rounded-0">
                    <th
                      class="text-uppercase text-blue"
                      v-for="tableHeader in tableHeaders"
                      v-bind:key="tableHeader.tableHeaderName"
                    >{{ tableHeader.tableHeaderName }}</th>
                  </tr>
                </thead>
                <tbody class="p-0">
                  <tr class="table-body-contents" v-if="!allHeader.length">
                    <td class="text-center font-size-md font-weight-bold text-muted" colspan="7">
                      <b-spinner class="justify-content-md-center text-blue" v-if="!dataFound"></b-spinner>
                      <div
                        class="justify-content-md-center text-blue"
                        v-else-if="dataFound"
                      >No data found</div>
                    </td>
                  </tr>

                  <tr
                    class="table-body-contents"
                    v-for="(header,index) in allHeader"
                    v-bind:key="header.key"
                    :class="header.bodyColor"
                  >
                    <td>{{index +1}}</td>
                    <td v-if="header.name == 'index'">Home</td>
                    <td v-if="header.name == 'aboutus'">About Us</td>
                    <td v-if="header.name == 'services'">Services</td>
                    <td v-if="header.name == 'service-ServiceName'">Services Type</td>
                    <td v-if="header.name == 'cars-models'">Car</td>
                    <td v-if="header.name == 'car-brandId-carId'">Car Type</td>
                    <td v-if="header.name == 'all-brands'">Brand</td>
                    <td v-if="header.name == 'brand-brandId'">Brand Type</td>
                    <td v-if="header.name == 'blog'">Blog</td>
                    <td v-if="header.name == 'blog-blogId'">Blog Details</td>
                    <td v-if="header.name == 'faqs'">Faqs</td>
                    <td>{{ header.tabTitle }}</td>
                    <td>{{ header.metaKeyword }}</td>

                    <td class="pl-4">
                      <router-link
                        class="text-warning btn px-1 py-0"
                        v-b-tooltip.hover
                        title="Edit"
                        :to="{ name: 'EditAllHeader', params: { id: header._id } }"
                        append
                      >
                        <font-awesome-icon :icon="['fas', 'edit']" />
                      </router-link>

                      <button
                        class="text-danger btn px-1 py-0"
                        v-b-modal.modal-1
                        @click="deleteData(header._id)"
                      >
                        <font-awesome-icon :icon="['far', 'trash-alt']" />
                      </button>

                      <!-- <div class="modal"></div> -->
                    </td>
                  </tr>
                  <Delete
                    class="text-center"
                    v-bind:data="{
                          id:id
                        }"
                    v-on:event_child="deleteAndRefresh"
                  ></Delete>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { constants } from 'crypto';
import HeaderSection from '@/components/header-section.vue';
import Sidemenu from '@/components/sidemenu-section.vue';
import service from '@/service/apiService';
import Delete from '@/components/modal/delete.vue';

export default {
  name: 'Table',
  components: {
    HeaderSection,
    Sidemenu,
    Delete,
  },
  data() {
    return {
      type: 'Header',
      id: '',
      dataFound: '',
      page: '',
      allHeader: [],
      userArray: [],
      breadCrum: [
        {
          text: 'User',
        },
      ],
      tableHeaders: [
        {
          tableHeaderName: 'sr-no',
          key: 'key1',
        },
        {
          tableHeaderName: 'name',
          key: 'key1',
        },
        {
          tableHeaderName: 'Title',
          key: 'key1',
        },
        {
          tableHeaderName: 'Keyword',
          key: 'key1',
        },
        {
          tableHeaderName: 'Action',
          key: 'key1',
        },
      ],
      approvedClass: 'text-success',
      rejectedClass: 'text-danger',
      pendingClass: 'text-primary',
    };
  },
  created() {
    this.viewHeader();
  },

  methods: {
    deleteAndRefresh(obj) {
      service.deleteAll('AllHeader/delete', obj, (data) => {
        this.viewHeader();
      });
    },
    viewHeader() {
      const formData = {};
      service.getAllHeader((data) => {
        console.log('data', data);
        if (data.data) {
          this.allHeader = data.data;
        }
        if (formData === 'noDataFound') {
          this.dataFound = false;
        } else if (formData === 'error') {
          this.dataFound = false;
        } else {
          this.dataFound = true;
        }
      });
    },

    deleteData(id) {
      this.id = id;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/scss/import";

input[type="text"]::placeholder {
  color: $bg-text-blue;
}
</style>
