<template>
  <div id="app" class="container">
    <AppNavbar />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
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

.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
