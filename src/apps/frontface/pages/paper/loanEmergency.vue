<template>
    <main>
        <PaperDoc>
            สุริยะ  ประจันนวล
        </PaperDoc>

        <MorePaperDoc>
           ธงไท ผิวศิริ

        </MorePaperDoc>
        
        <MorePaperDoc>
           <!-- กู้ฉุกเฉินหน้า 2 photo2 -->
        </MorePaperDoc>
    </main>
</template>
<script setup lang="ts">
import Index from '../index.vue';

const { data } = await useFetch<any>('/api/sampleWithData');
</script>

