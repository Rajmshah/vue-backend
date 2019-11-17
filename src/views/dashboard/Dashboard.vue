<template>
  <div>
    <header>
      <header-section></header-section>
    </header>
    <!-- header end -->
    <div class="d-flexs">
      <!-- sidemenu -->
      <sidemenu></sidemenu>
      <!-- sidemenu end-->
      <div class="main-content bg-light">
        <!-- breadcrum -->
        <!-- <b-breadcrumb :items="breadCrum" class="bg-light border rounded-0"/> -->
        <div class="container-fluid basic-table my-3">
          <div class="row">
            <div class="col-md-2 p-1 zoom noselect" v-for="(key,data) in dashboards">
              <div class="card border-transparent" v-on:click="goToPage(data)">
                <div class="bg-lightgray">
                  <div class="bg-blue" style="padding:8px; border-radius:4px 4px 0px 0px">
                    <h6
                      class="card-title text-center text-capital title-padding font-helvetica-bold font-size-20"
                      style="text-transform: uppercase; margin-top:5px; color:#ffff"
                    >{{data}}</h6>
                  </div>

                  <p
                    class="card-text font-helvetica-bold-light text-light-secondary desc-padding font-size-20 line-height2"
                    style="padding:20px"
                  >
                    <span>
                      <center>
                        <font color="blue" size="6px">{{key}}</font>
                      </center>
                    </span>
                  </p>
                  <!-- <div class="d-flex justify-content-between pb-4 font-helvetica-medium">
                    <div class="card-details details-padding">
                      <nuxt-link :to="service.to" class="text-dark">
                        <u>{{service.details}}</u>
                      </nuxt-link>
                    </div>
                    <div class="card-button"></div>
                  </div>-->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    toggleMenu() {
      this.closed = !this.closed;
    },
  },
};
</script>
<script>
import HeaderSection from '@/components/header-section.vue';
import Sidemenu from '@/components/sidemenu-section.vue';
import service from '@/service/apiService';
import Delete from '@/components/modal/delete.vue';
export default {
  name: 'Table',
  components: {
    HeaderSection,
    Sidemenu,
    Delete
  },
  data() {
    return {
      dataFound: "",
      page: "",
      searchText: "",
      currentPage: 1,
      totalCount: 0,
      perPage: 0,
      allUser: [],
      deleteId: {},
      userArray: [],
      dashboards: [],
      breadCrum: [
        {
          text: "Dashboard"
        }
      ],

      approvedClass: "text-success",
      rejectedClass: "text-danger",
      pendingClass: "text-primary"
    };
  },
  created() {
    this.Dashboard();
  },

  methods: {
    Dashboard() {
      var formData = {};
      service.getDashboard(formData, data => {
      
        this.dashboards = data.data;
      });
    },
    showModal(_id) {
      this.deleteId._id = _id;
      this.deleteId.schemaName = "User";
      this.deleteId.modal = "modal1";
      // console.log(this.deleteId);
      this.$root.$emit("bv::show::modal", "modal1");
    },
    goToPage(page) {
      if (page == "total users") {
        this.$router.push({
          name: "View User"
        });
      }
      if (page == "rejected") {
        this.$router.push({
          name: "View KYC",
          params: { status: "rejected" }
        });
      }
      if (page == "pending") {
        this.$router.push({
          name: "View KYC",
          params: { status: "pending" }
        });
      }
      if (page == "approved") {
        this.$router.push({
          name: "View KYC",
          params: { status: "approved" }
        });
      }
      if (page == "non kyc users") {
        this.$router.push({
          name: "View User"
        });
      }
      this.Dashboard(page);
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
