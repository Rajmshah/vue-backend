<template>
  <div>
    <b-modal
      id="modal-1"
      ref="deleteButton"
      title="Are sure you want to delete?"
      hide-footer
      no-stacking
    >
      <b-button @click="close()" variant="outline-danger" class="mr-3">Delete</b-button>
      <b-button variant="outline-primary" @click="$bvModal.hide('modal-1')">Cancel</b-button>

      <notifications group="foo" />
      <notifications group="warning" />
    </b-modal>
  </div>
</template>

<script>
import { constants } from "crypto";
import service from "@/service/apiService";

export default {
  props: ["data"],
  name: "Delete",
  data() {
    return {
      status: "",
      modal: "",
      deleteData: {}
    };
  },
  created() {
    this.page = this.$route.params.page;
  },
  methods: {
    close() {
      this.modal = this.id;
      const obj = {};
      obj._id = this.data.id;
      this.$bvModal.hide("modal-1");
      this.$emit("event_child", obj);

      // this.$notify({
      //   group: "foo",
      //   type: "success",
      //   title: "Important message",
      //   text: "Data Deleted Successfully",
      //   duration: 1500
      // });
    },
    deleteTostr() {
      if (this.status == 200) {
        this.$notify({
          group: "foo",
          type: "success",
          title: "Success message",
          text: "Data Deleted Successfully"
        });
      } else {
        this.$notify({
          group: "foo",
          type: "error",
          title: "Error message",
          text: "Data Deleted Unsuccessfully"
        });
      }
    },
    closeCancelModal() {
      this.hideDeleteModal();
      // this.$root.$emit("bv::hide::modal", this.id.modal);
      // this.$notify({
      //   group: "foo",
      //   type: "error",
      //   title: "Important message",
      //   text: "Data not deleted",
      //   duration: 1500
      // });
    }
  }
};
</script>
<style lang="scss">
@import "~@/scss/import";
.modal-body {
  position: relative;
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 1rem;
  text-align: center;
}
</style>
