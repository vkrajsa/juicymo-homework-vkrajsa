<template>
  <section>
    <ul class="mt-5">
      <BaseBox v-for="branch in branches" :key="branch.dep">
        <h2 v-once>Branches</h2>
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