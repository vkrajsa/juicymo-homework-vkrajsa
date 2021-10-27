<template>
  <main id="homePage">
    <div class="container col-xxl-8 px-4 py-5">
      <div class="row g-5">
        <div class="col-lg-6">
          <h1 class="my-5">
            {{ $t("HomePage.h1") }}
          </h1>
          <SearchBar></SearchBar>
        </div>

        <div class="col-lg-6">
          <img
            src="../assets/images/globe.png"
            alt="globe"
            class="spin-animation"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";
export default {
  components: {
    SearchBar,
  },
};
</script>
<style scoped>
</style>