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
          ref="navbarBurgerRef"
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
        ref="navbarMenuRef"
      >
        <div class="navbar-end">
          <RouterLink
            to="/"
            class="navbar-item"
            active-class="is-active"
            @click="isShowMobileMenu = false"
          >
            Notes
          </RouterLink>
          <RouterLink
            to="/stats"
            class="navbar-item"
            active-class="is-active"
            @click="isShowMobileMenu = false"
          >
            Stats
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";

const isShowMobileMenu = ref(false);
const navbarMenuRef = ref(null);
const navbarBurgerRef = ref(null);

onClickOutside(
  navbarMenuRef,
  (e) => {
    isShowMobileMenu.value = false;
  },
  {
    ignore: [navbarBurgerRef],
  }
);
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
