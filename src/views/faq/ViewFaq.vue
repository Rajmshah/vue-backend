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
                <!-- create button -->
                <!-- <a
                  class="btn btn-primary rounded-0 float-right mt-minus7 ml-3"
                  href="/create-faq"
                >Create User</a>-->
                <!-- search  -->
                <div class="search search-width float-right mt-minus7">
                  <div class="row no-gutters align-items-center">
                    <div class="col">
                      <input
                        class="form-control border-0 rounded-0 text-blue"
                        type="text"
                        v-model="searchText"
                        @input="viewFaq(1)"
                        placeholder="Search"
                      />
                    </div>
                    <div class="ml-5">
                      <button
                        class="ml-auto text-dark font-weight-bold btn btn-warning"
                        onclick="window.location.href='/create-faq'"
                      >Create Faq</button>
                    </div>
                  </div>
                </div>
                <h5 class="card-title m-0">FAQ</h5>
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
                  <!-- <div class="text-center font-size-lg" v-if="!allUser.length">No data found.</div> -->
                  <tr class="table-body-contents" v-if="!allFaq.length">
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
                    v-for="(faq, index) in allFaq"
                    v-bind:key="faq.key"
                    :class="faq.bodyColor"
                  >
                    <td>{{index + 1 + (currentPage - 1) * 10}}</td>
                    <td>{{ faq.question }}</td>

                    <td class="pl-4">
                      <!-- <span	9999999999 class="text-info btn px-1">
                                        <font-awesome-icon :icon="['fas', 'edit']"/>
                      </span>-->
                      <!-- <a class="text-primary btn px-1"> -->
                      <router-link
                        class="text-warning btn px-1 py-0"
                        v-b-tooltip.hover
                        title="Edit"
                        :to="{ name: 'Edit Faq', params: { _id: faq._id } }"
                        append
                      >
                        <font-awesome-icon :icon="['fas', 'edit']" />
                      </router-link>
                      <button
                        class="text-danger btn px-1 py-0"
                        v-b-modal.modal-1
                        @click="deleteData(faq._id)"
                      >
                        <font-awesome-icon :icon="['far', 'trash-alt']" />
                      </button>
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
            <div class="my-2 py-1">
              <b-pagination
                class="mb-0"
                align="center"
                v-if="totalCount"
                :total-rows="totalCount"
                v-model="currentPage"
                :per-page="perPage"
                v-on:input="goToPage(currentPage)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <b-modal id="modal1" title="Are sure you want to delete?" hide-footer no-stacking>
      <Delete class="text-center" v-bind:Id="deleteId"></Delete>
    </b-modal>
    <div class="modal"></div>-->
  </div>
</template>

<script>
import HeaderSection from "@/components/header-section.vue";
import Sidemenu from "@/components/sidemenu-section.vue";
import service from "@/service/apiService";
import Delete from "@/components/modal/delete.vue";

export default {
  name: "Table",
  components: {
    HeaderSection,
    Sidemenu,
    Delete
  },
  data() {
    return {
      dataFound: "",
      id: "",
      type: "faq",
      page: "",
      searchText: "",
      currentPage: 1,
      totalCount: 0,
      perPage: 0,
      allFaq: [],
      deleteId: {},
      userArray: [],
      breadCrum: [
        {
          text: "User"
        }
      ],
      tableHeaders: [
        {
          tableHeaderName: "sr-no",
          key: "key1"
        },
        {
          tableHeaderName: "Question",
          key: "key1"
        },
        {
          tableHeaderName: "Action",
          key: "key1"
        }
      ],
      approvedClass: "text-success",
      rejectedClass: "text-danger",
      pendingClass: "text-primary"
    };
  },
  created() {
    this.viewFaq(this.currentPage);
  },

  methods: {
    deleteAndRefresh(obj) {
      service.deleteAll("Faq/deleteFaq", obj, data => {
        this.viewFaq(this.currentPage);
      });
    },
    viewFaq(page) {
      this.currentPage = page;
      const formData = {};
      formData.page = page;
      formData.name = this.searchText;
      service.getAllFaq(formData, data => {
        console.log("In Here", data);
        if (data.data.result) {
          this.allFaq = data.data.result;
          this.totalCount = data.data.count;
          this.perPage = 10;
        } else if (page > 1) {
          this.goToPage(page - 1);
        }
        if (formData === "noDataFound") {
          this.dataFound = false;
        } else if (formData === "error") {
          this.dataFound = false;
        } else {
          this.dataFound = true;
        }
      });
    },
    deleteData(id) {
      this.id = id;
    },
    goToPage(page) {
      this.$router.push({
        name: "View faq"
      });
      this.viewFaq(page);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/scss/import";

input[type="text"]::placeholder {
  color: $bg-text-blue;
}
</style>
