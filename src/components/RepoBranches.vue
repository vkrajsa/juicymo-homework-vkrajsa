<template>
  <section>
    <ul class="mt-5">
      <h2>{{ $t("RepoBranches.h2") }} {{ this.$route.params.repoName }}</h2>

      <BaseBox v-for="branch in branches" :key="branch.dep">
        <li>
          {{ branch.name }}
        </li>
      </BaseBox>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    branches: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style>
</style>