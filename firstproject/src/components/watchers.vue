<template>
    <div>
        <h1>Watchers</h1>
        <h1>{{count}}</h1>
        <button @click="count=count+1"> + </button>
        <button @click="count=count-1"> - </button>
    </div>
</template>
<script>
export default {
    name:"Watcher",
    data() {
        return {
            count:0
        }
    },
    watch:{
        count(val){
            if(val>5){
                alert("Value is 5")
            }

        }
    }
 
   
}
</script>
<style lang="">
    
</style>