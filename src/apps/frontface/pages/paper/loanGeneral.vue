<template>
    <main>
        <PaperDoc>
            บีม จอง
        </PaperDoc>

        <MorePaperDoc>
            <!-- กู้สามัญทั่วไป general2 -->
        </MorePaperDoc>
        <MorePaperDoc>
            <!-- กู้สามัญทั่วไป general3 -->
        </MorePaperDoc>
        <MorePaperDoc>
            <!-- กู้สามัญทั่วไป general4 -->
        </MorePaperDoc>
        <MorePaperDoc>
            <!-- กู้สามัญทั่วไป general5 -->
        </MorePaperDoc>
        <MorePaperDoc>
            <!-- กู้สามัญทั่วไป general6 -->
        </MorePaperDoc>
        <MorePaperDoc>
            <!-- กู้สามัญทั่วไป general7 -->
        </MorePaperDoc>
    </main>
</template>
<script setup
        lang="ts">
        import Index from '../index.vue';

        const { data } = await useFetch<any>('/api/sampleWithData');
</script>
