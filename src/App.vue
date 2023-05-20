<template>
  <nav>
    <RouterLink to="/" class="button">Home</RouterLink>
    <RouterLink to="/stats" class="button">Stats</RouterLink>
  </nav>

  <RouterView />
</template>

<style scoped>
@import "bulma/css/bulma.min.css";
</style>
