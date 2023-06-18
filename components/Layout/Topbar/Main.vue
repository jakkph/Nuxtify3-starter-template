<script lang="ts" setup>
import { useTheme } from "vuetify";
import { useThemeCustomizer } from "~/stores/ThemCustomizer";

const theme = useTheme();
const store = useThemeCustomizer();

const setTheme = () => {
  theme.global.name.value = theme.current.value.dark ? "light" : "dark";
};
// computed property for dark mode

// toggle mode action
</script>

<template>
  <VAppBar>
    <VAppBarTitle>Nuxtify3</VAppBarTitle>

    <VBtn variant="text" @click="setTheme">
      <Icon name="tabler-sun-moon" color="primary" />
    </VBtn>

    <VBtn variant="text" @click.stop="store.setDrawer">
      <Icon name="tabler-menu-2" />
    </VBtn>
  </VAppBar>
</template>
