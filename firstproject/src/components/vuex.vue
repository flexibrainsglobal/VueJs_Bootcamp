<template>
    <div>
        <h1>Vuex</h1>
        
        <ul v-if="ChartData!=null">
            <li v-for="datas in ChartData.test" :key="datas.price">{{datas.department}}-{{datas.price}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    name:"Vuex",
    data() {
        return {
            ChartData:this.$store.state.test
        }
    },
 
   
}
</script>
<style lang="">
    
</style>