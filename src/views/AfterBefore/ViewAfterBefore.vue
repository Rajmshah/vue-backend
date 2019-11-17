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
                    <div class="ml-5">
                      <button
                        class="ml-auto text-dark font-weight-bold btn btn-warning"
                        onclick="window.location.href='/create-AfterBefore'"
                      >Create BeforeAfter</button>
                    </div>
                  </div>
                </div>
                <h5 class="card-title m-0">BeforeAfter</h5>
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
                  <tr class="table-body-contents" v-if="!allData.length">
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
                    v-for="(afterbefore, index) in allData"
                    v-bind:key="afterbefore.key"
                    :class="afterbefore.bodyColor"
                  >
                    <td>{{index + 1 }}</td>
                    <td>
                      <img :src="imageUrl+afterbefore.image" width="200" />
                    </td>

                    <td class="pl-4">
                      <router-link
                        class="text-warning btn px-1 py-0"
                        v-b-tooltip.hover
                        title="Edit"
                        :to="{ name: 'EditAfterBefore', params: { id: afterbefore._id } }"
                        append
                      >
                        <font-awesome-icon :icon="['fas', 'edit']" />
                      </router-link>

                      <button
                        class="text-danger btn px-1 py-0"
                        v-b-modal.modal-1
                        @click="deleteData(afterbefore._id)"
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderSection from "@/components/header-section.vue";
import Sidemenu from "@/components/sidemenu-section.vue";
import service from "@/service/apiService";
import Delete from "@/components/modal/delete.vue";
import globaljs from "@/service/global.js";
export default {
  name: "Table",
  components: {
    HeaderSection,
    Sidemenu,
    Delete
  },
  data() {
    return {
      imageUrl: globaljs.readFileUrl,
      id: "",
      dataFound: "",
      allData: [],

      breadCrum: [
        {
          text: "BeforeAfter"
        }
      ],
      tableHeaders: [
        {
          tableHeaderName: "sr-no",
          key: "key1"
        },
        {
          tableHeaderName: "IMAGE",
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
    this.viewafterbefore();
  },

  methods: {
    deleteAndRefresh(obj) {
      service.deleteAll("AfterBefore/deleteAfterBefore", obj, data => {
        this.viewafterbefore();
      });
    },
    viewafterbefore() {
      var formData = {};
      service.getAllBeforeAfter(formData, data => {
        if (data.status === 200) {
          this.allData = data.data;
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

    deleteData(id, type) {
      this.id = id;
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
