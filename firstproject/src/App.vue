<template>
<div>
    <Template/>
    <ConditionalRendering/>
    <ListRendering/>
    <DyanamicComponent/>
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
