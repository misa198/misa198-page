<script lang="ts" setup>
import VueFeather from 'vue-feather';
import { NAV_LINKS } from '~~/constants/navLinks';
const isOpenMenu = ref(false);

const onToggleMenu = () => {
  isOpenMenu.value = !isOpenMenu.value;
};
</script>

<template>
  <header
    class="default-header relative w-full container mx-auto py-6 flex justify-between items-center z-20"
  >
    <NuxtLink class="default-header__logo text-3xl select-none" to="/">
      {{ $t('common.name') }}
    </NuxtLink>
    <span class="cursor-pointer md:hidden" @click="onToggleMenu">
      <VueFeather type="menu" />
    </span>
    <div
      :class="[
        'absolute z-10 inset-0 w-screen h-screen bg-black transition-all duration-300 md:hidden',
        {
          'visible opacity-60': isOpenMenu,
          'invisible opacity-0': !isOpenMenu,
        },
      ]"
      @click="onToggleMenu"
    />
    <div
      :class="[
        `absolute z-20 top-0 right-0 left-auto bg-white w-64 h-screen flex flex-col py-4 pl-5 pr-4
          transform transition-transform duration-300 md:static md:flex-row md:h-auto md:p-0 md:w-auto
          md:transform-none md:bg-transparent md:transition-none`,
        {
          'translate-x-0': isOpenMenu,
          'translate-x-full': !isOpenMenu,
        },
      ]"
    >
      <div class="w-full flex justify-end mb-3 md:hidden">
        <span class="cursor-pointer" @click="onToggleMenu">
          <VueFeather type="x" />
        </span>
      </div>
      <NuxtLink
        v-for="({ label, href }, i) in NAV_LINKS"
        :key="`nav-link-${i}`"
        :to="href"
        class="mb-3 md:mb-0 md:mx-4 md:hover:text-highlight md:transition-colors duration-200"
        @click="onToggleMenu"
      >
        {{ $t(label) }}
      </NuxtLink>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.default-header {
  &__logo {
    font-family: 'Righteous', sans-serif;
  }
}
</style>
