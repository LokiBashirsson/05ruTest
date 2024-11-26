<script setup lang="ts">
import ImageAdd from './components/ImageAdd.vue';
import ReactiveButtons from './components/ReactiveButtons.vue';
import TextRedactor from './components/TextRedactor.vue';
import TextRedactorCopy from './components/TextRedactorCopy.vue';
</script>

<template>
  <header></header>
  <main>
    <ReactiveButtons />
    <TextRedactor />
    <ImageAdd />
    <TextRedactorCopy />
  </main>
  <footer></footer>
</template>

<style scoped></style>
