
<template>
  <div id="app">
    <div class="container">
          <router-view />
    </div>
  </div>
</template>

<script>
import BlogAdminPanel from './components/BlogAdminPanel.vue'
import addNew from './components/addNew.vue'

export default {
  name: 'app',
  components: {
    BlogAdminPanel,
    addNew
  }
}
</script>

<style>

</style>