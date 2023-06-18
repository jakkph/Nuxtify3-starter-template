<template>
  <VApp>
    <LayoutSidebarMain />
    <LayoutTopbarMain />
    <VMain>
      <VContainer fluid>
        <slot />
      </VContainer>
    </VMain>
  </VApp>
</template>
