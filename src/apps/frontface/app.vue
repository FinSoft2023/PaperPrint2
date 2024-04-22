<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const links = [ {
  label: 'Home',
  to: '/',
  icon: 'i-heroicons-home'
}, {
  label: 'Template',
  to: '/paper/empty',
  icon: 'i-heroicons-document-magnifying-glass',
  badge: 'New'
}, {
  label: 'Sample',
  to: '/paper/sample',
  icon: 'i-heroicons-document',
}, {
  label: 'Sample w Data',
  to: '/paper/sampleWithData',
  icon: 'i-heroicons-document',
}, {
  label: 'New Member',
  to: '/paper/newMembership',
  icon: 'i-heroicons-document',
}, {
  label: 'Loan (EM)',
  to: '/paper/loanEmergency',
  icon: 'i-heroicons-document',
}, {
  label: 'Loan (GN)',
  to: '/paper/loanGeneral',
  icon: 'i-heroicons-document',
}];

provide('links', links);
</script>