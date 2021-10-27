<template>
  <section>
    <ul class="mt-5">
      <h2>branches of {{ this.$route.params.repoName }}</h2>

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