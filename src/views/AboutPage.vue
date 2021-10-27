<template>
  <main id="aboutPage">
    <div class="container px-4 py-5">
      <div class="row g-5">
        <div class="col-lg-6">
          <h1 class="my-5">{{ $t("AboutPage.h1") }}</h1>
          <p class="lead">
            {{ $t("AboutPage.lead") }}
          </p>
        </div>

        <div class="row mt-5">
          <div class="d-grid col-10 col-lg-4">
            <a
              href="https://www.vojtechkrajsa.cz"
              class="btn btn-primary"
              target="blank"
              role="button"
              >{{ $t("AboutPage.button") }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>
