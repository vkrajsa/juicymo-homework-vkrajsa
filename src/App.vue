<template>
  <div id="app" class="main-container">
    <AppHeader />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
export default {
  components: {
    AppHeader,
  },
};
</script>

<style scoped>
/* .container {
  max-width: 1140px;
  background: rgb(246, 248, 250);
  min-height: 100vh;
} */

.main-container {
  min-height: 100vh;
  /* background: rgb(4, 13, 33); */
}

/* .container {
  min-height: 100vh;
  background: rgb(4, 13, 33);
} */

.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
