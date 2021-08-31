<template>
  <div>
    <h1>Fetch API Using Axios</h1>
    <table id="mytable">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Middle Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Contact Number</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in DynamicData" :key="user.username">
          <td>{{ user.firstName }}</td>
          <td>{{ user.middlename }}</td>
          <td>{{ user.lastname }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.contact }}</td>
          <td>{{ user.gender }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "FetchApi",
  data() {
    return {
      DynamicData: [],
    };
  },
  created() {
    this.fetchAPI();
  },
  mounted() {
       


  },
  methods: {
    fetchAPI() {
      var _this = this;
      axios.get("http://localhost:3000/data").then(function (response) {
        console.log(response.data);
        _this.DynamicData = response.data;

      });
    },
  },
};
</script>
<style lang="">
</style>