<template>
  <div>
    <h1>Datatable</h1>
    <table id="datatable"></table>
  </div>
</template>
<script>
import axios from "axios";
import $ from "jquery";
export default {
  name: "Datatable",
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      var _this = this;
      axios.get("http://localhost:3000/data").then(function(response) {
        console.log(response.data);
        _this.users = response.data;
        $("#datatable").DataTable({
          data: response.data,
          columns: [
            {
              data: "firstName",
              title: "First Name",
            },
            {
              data: "middlename",
              title: "Middle Name",
            },
            {
              data: "lastname",
              title: "Lastname",
            },
            {
              data: "username",
              title: "Username",
            },
            {
              data: "gender",
              title: "Gender",
            },
            {
              data: "contact",
              title: "Contact",
            },
            {
              data: "email",
              title: "Email",
            },
          ],
        });
      });
    },
  },
};
</script>
<style lang=""></style>
