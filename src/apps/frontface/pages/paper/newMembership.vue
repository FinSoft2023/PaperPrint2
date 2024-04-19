<template>
    <main>
        <PaperDoc>
            <p class="text-center" v-for="i in 24">โต้ + ปูน</p>
        </PaperDoc>

        <MorePaperDoc>
            tan nontat
        </MorePaperDoc>
        <MorePaperDoc>
            <!-- สมัครสมาชิกใหม่หน้า apply3 -->
        </MorePaperDoc>
        <MorePaperDoc>
            <!-- สมัครสมาชิกใหม่หน้า apply4 -->
        </MorePaperDoc>
        <MorePaperDoc>
            <!-- สมัครสมาชิกใหม่หน้า apply5 -->
        </MorePaperDoc>
        <MorePaperDoc>
            <!-- สมัครสมาชิกใหม่หน้า apply6 -->
        </MorePaperDoc>
        <MorePaperDoc>
            <!-- สมัครสมาชิกใหม่หน้า apply7 -->
        </MorePaperDoc>
        <MorePaperDoc>
            <!-- สมัครสมาชิกใหม่หน้า apply8 -->
        </MorePaperDoc>
        <MorePaperDoc>
            <!-- สมัครสมาชิกใหม่หน้า apply9 -->
        </MorePaperDoc>
        <MorePaperDoc>
            <!-- สมัครสมาชิกใหม่หน้า apply10 -->
        </MorePaperDoc>
    </main>
</template>
<script setup lang="ts">
import Index from '../index.vue';

const { data } = await useFetch<any>('/api/sampleWithData');
</script>
