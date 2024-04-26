<template>
    <main class="font-sans">
        <PaperDoc>

            
        </PaperDoc>

      <MorePaperDoc>
        
      </MorePaperDoc>
    </main>
  </template>
  
  <script setup
  lang="ts">

  const { data } = await useFetch<any>('/api/group2');
</script>