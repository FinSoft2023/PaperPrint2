<template>
    <main>
        <PaperDoc>
           <!-- กู้ฉุกเฉินหน้า 2 photo1 -->

        </PaperDoc>

        <MorePaperDoc>
           <!-- กู้ฉุกเฉินหน้า 2 photo2 -->
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

