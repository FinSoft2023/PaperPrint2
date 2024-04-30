<template>
    <main>
        <PaperDoc> <!-- หน้า 1 -->
            
        </PaperDoc>

        <MorePaperDoc> <!-- หน้า 2 -->
            
        </MorePaperDoc>

        <MorePaperDoc> <!-- หน้า 3 -->
            
        </MorePaperDoc>

        <MorePaperDoc> <!-- หน้า 4 -->
            
        </MorePaperDoc>

        <MorePaperDoc> <!-- หน้า 5 -->
            
        </MorePaperDoc>

        <MorePaperDoc> <!-- หน้า 6 -->
            
        </MorePaperDoc>

        <MorePaperDoc> <!-- หน้า 7 -->
            
        </MorePaperDoc>

        <MorePaperDoc> <!-- หน้า 8 -->
            
        </MorePaperDoc>

        <MorePaperDoc> <!-- หน้า 9 -->
            
        </MorePaperDoc>

        <MorePaperDoc> <!-- หน้า 10 -->
            
        </MorePaperDoc>
    </main>
</template>

<script setup lang="ts">
import BlankSpace from '~/components/BlankSpace.vue';
import MoneyText from '~/components/MoneyText.vue';

    const { data } = await useFetch<any>('/api/group2');
</script>