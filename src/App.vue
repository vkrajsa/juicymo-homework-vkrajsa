<template>
  <div id="app" class="container">
    <AppNavbar />
    <router-view />
  </div>
</template>

<script>
import AppNavbar from "@/components/AppNavbar.vue";
export default {
  components: {
    AppNavbar,
  },
};
</script>

<style scoped>
.container {
  max-width: 1140px;
  background: rgb(246, 248, 250);
  min-height: 100vh;
}
</style>
