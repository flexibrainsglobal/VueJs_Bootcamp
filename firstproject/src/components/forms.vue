<template>
    <div>
        <h1>Forms</h1>
        <form @submit.prevent="postForm()">
            <input v-model="userForm.firstName" id="firstName" type="text" placeholder="First Name">
            <input v-model="userForm.middlename" id="middleName" type="text" placeholder="Middle Name">
            <input v-model="userForm.lastName" id="lastName" type="text" placeholder="Last Name">
            <input v-model="userForm.gender" id="gender" type="text" placeholder="Gender">
            <input v-model="userForm.contact" id="contact" type="text" placeholder="Contact">
            <input v-model="userForm.username" id="username" type="text" placeholder="Username">
            <input v-model="userForm.email" id="email" type="eamil" placeholder="Email">
            <input value="Submit" type="submit">
        </form>
        <hr>
        <p>Inputs Of Form</p>
        <p>First Name : {{userForm.firstName}}</p>
        <p>Middle Name : {{userForm.middlename}}</p>
        <p>Last Name : {{userForm.lastName}}</p>
        <p>Gender : {{userForm.gender}}</p>
        <p>Contact Name : {{userForm.contact}}</p>
        <p>USername Name : {{userForm.username}}</p>
        <p>Email Name : {{userForm.email}}</p>
    </div>
</template>
<script>
import axios from "axios"
export default {
    name:"Forms",
    data() {
        return {
            userForm:{
                id:3001,
			firstName: null,
			middlename: null,
			lastname: null,
			gender: null,
			contact: null,
			username: null,
			email: null
		}
        }
    },
    methods: {
        postForm(){
            console.log(this.userForm)
            var FormData = this.userForm
            axios.post('http://localhost:3000/data',FormData)
            .then(function(res){
                if(res.status==201){
                    alert("Form is Submitted")
                }
            })
            .catch(function(error){
                console.log(error)
            })
        }
    },
}
</script>
<style lang="">
    
</style>