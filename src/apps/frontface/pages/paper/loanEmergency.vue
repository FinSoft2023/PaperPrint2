<template>
    <main>
        <PaperDoc>
            สุริยะ  ประจันนวล
        </PaperDoc>

        <MorePaperDoc>
           ธงไท ผิวศิริ

        </MorePaperDoc>

        <MorePaperDoc>
           นาย สิทธิชัย มั่งอะนะ ชื่อเล่น พิณ อายุ 19 เกิด วันที่ 27 กันยายน 2004 
        </MorePaperDoc>

    </main>
</template>
<script setup lang="ts">
import Index from '../index.vue';

const { data } = await useFetch<any>('/api/sampleWithData');
</script>

