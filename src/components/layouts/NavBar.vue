<template>
  <nav class="navbar is-success" role="navigation" aria-label="main navigation">
    <div class="container is-max-desktop px-2">
      <div class="navbar-brand">
        <RouterLink to="/" class="navbar-item is-size-4 is-familly-monospace">
          Notable
        </RouterLink>

        <a
          role="button"
          class="navbar-burger"
          :class="{ 'is-active': isShowMobileMenu }"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          @click.prevent="isShowMobileMenu = !isShowMobileMenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        class="navbar-menu"
        :class="{ 'is-active': isShowMobileMenu }"
      >
        <div class="navbar-end">
          <RouterLink to="/" class="navbar-item" active-class="is-active">
            Notes
          </RouterLink>
          <RouterLink to="/stats" class="navbar-item" active-class="is-active">
            Stats
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const isShowMobileMenu = ref(false);
</script>

<style lang="scss" scoped>
@media (max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    top: 52px;
    width: 100%;
  }
}
</style>
