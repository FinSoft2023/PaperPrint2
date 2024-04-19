<template>
    <main>
        <PaperDoc>
            <!-- กู้ฉุกเฉินหน้าที่ 1 photo1 -->
        </PaperDoc>

        <MorePaperDoc>
           <!-- กู้ฉุกเฉินหน้า 2 photo2 -->
        </MorePaperDoc>
    </main>
</template>
<script setup lang="ts">
import Index from '../index.vue';

const { data } = await useFetch<any>('/api/sampleWithData');
</script>

