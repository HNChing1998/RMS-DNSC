<template>
<div id="app">

  <router-view></router-view>
  
<Dashboard/>

   
</div> 

</template>
<script>


import Dashboard from './components/Dashboard.vue'
export default {
  name: 'App',
  components: {  

Dashboard

  
  }
}
</script>
