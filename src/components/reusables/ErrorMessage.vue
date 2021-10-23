<template>
  <!-- PASS PROPS SHOULD DIFFERENTIATE BETWEEN ERROR AND USER/REPO NOT FOUND -->
  <section>
    <div class="alert alert-danger mt-4" role="alert">
      <slot> </slot>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>
