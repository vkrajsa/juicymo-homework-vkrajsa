<template>
  <!-- PASS PROPS SHOULD DIFFERENTIATE BETWEEN ERROR AND USER/REPO NOT FOUND -->
  <div class="col-10 col-lg-12 alert alert-warning" role="alert">
    <slot> </slot>
  </div>
</template>

<script>
export default {
  props: {
    hidden: {
      type: Boolean,
      default: () => true,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
