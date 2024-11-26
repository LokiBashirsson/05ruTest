<script setup lang="ts">
import { ref } from 'vue';
</script>

<script lang="ts">
export const imageRef = ref<string | undefined>('https://images.petovod.ru/photos/132487552777.jpg');
</script>

<template>
    <div class="ImageAdd">
        <img :src='imageRef' alt="Выберите картинку">
    </div>
</template>

<style scoped>
@import url(../styles/ImageAdd.scss);
</style>