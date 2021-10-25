<template>
  <!-- PASS PROPS SHOULD DIFFERENTIATE BETWEEN ERROR AND USER/REPO NOT FOUND -->
  <section>
    <div
      class="alert mt-4"
      role="alert"
      :class="{ 'alert-warning': warning, 'alert-danger': !warning }"
    >
      <slot> </slot>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    warning: {
      type: Boolean,
      default: () => false,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
