<script lang="ts" setup>
import { useThemeCustomizer } from "~/stores/ThemCustomizer";

const store = useThemeCustomizer();
</script>

<template>
  <VNavigationDrawer v-model="store.isExpand">
    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-home-outline"
        title="Home Page"
        to="/"
      />
      <v-list-item prepend-icon="mdi-information-outline" title="About Page" to="/about" />
    </v-list>
  </VNavigationDrawer>
</template>
