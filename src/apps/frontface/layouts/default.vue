<template>
  <UContainer>
    <UPage>
      <template #left>
        <UAside>
          <UNavigationLinks :links />
        </UAside>
      </template>

      <slot />
    </UPage>
  </UContainer>
</template>

<script setup lang="ts">
const links = inject('links', []);
</script>