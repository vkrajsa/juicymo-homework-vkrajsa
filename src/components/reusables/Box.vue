<template>
  <div class="card mt-4">
    <div class="card-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
  max-width: 800px;
  margin: 0 auto;
}
</style>