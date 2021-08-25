<template>
    <div>
        <h1 id="heading">Hello Testing </h1>
    </div>
</template>
<script>
export default {
    name:"Template",
    // Data Comes Here
    data(){
        return{

        }
    },
    // Lifecycles will come here 
    beforeCreate() {
        // functions or methods will come here which we want to run before comile template
        alert("Before Create Called")
    },
    created() {
        // Once the Instance/ Component get initialized or compiled and we want to run some 
        // functions before mount then it will  come here 
        alert(" Created Called")
    },
    beforeMount() {
        //  Same as crwated lifecycle hook
        alert("Before Mount Called")
    },
    mounted() {
        //  Once our instance get mounted on screen then actions to perform will come here 
        alert("Mounted Called")
    },
   beforeUpdate() {
    //    Same as mounted lifecycle hook
    alert("Before Update  Called")
   },

    updated() {
        //  If there is update in the component then it will come here 
        alert("Updated Called")
    },

    beforeUnmount() {
        //  Same as updated life cycle hook 
        alert("Before Unmount Called")
    },
        
   
    unmounted() {
        //  if we want to perform some action before closing the component we can perform it here 
        alert("Mounted Called")
    },

    // Methods Here
}
</script>
<style>
#heading{
    color: brown;
}
</style>