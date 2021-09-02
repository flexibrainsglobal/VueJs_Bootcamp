<template>
<div>
    <Template/>
    <ConditionalRendering/>
    <ListRendering/>
    <DyanamicComponent/>
    <hr>
    <router-link to="/firstroute">Go To Router</router-link><br/>
    <router-link to="/fetchapi">Fetch API</router-link><br/>
    <router-link to="/datatable">Datatable</router-link><br/>
    <router-link to="/chart">Chart JS</router-link>
    <hr>
    <router-view></router-view>
</div>
</template>

<script>
import Template from './components/template.vue'
import ConditionalRendering from "./components/conditionalrendering.vue"
import ListRendering from "./components/ListRendering.vue"
import DyanamicComponent from "./components/dynamiccomponent.vue"


export default {
  name: 'App',
  components: {
    Template,
    ConditionalRendering,
    ListRendering,
    DyanamicComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
