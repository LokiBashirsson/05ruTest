<script setup lang="ts">
import GoBack from '../assets/GoBack.svg';
import GoNext from '../assets/GoNext.svg';
import TextTitle from '../assets/TextTitle.svg';
import TextParagraph from '../assets/TextParagraph.svg';
import AddImage from '../assets/AddImage.svg';
import { copyText } from '../utils/ReactiveButtons';
import { handlePrompt, handleRedo, handleUndo } from '../utils/ImageAdd';
import { textareaRef, textRedactorRef } from './TextRedactor.vue';
import { convertSelectedToLowercase, convertSelectedToUppercase } from '../hooks/uppercaseHook';
</script>

<script lang="ts">
const upperCase = () => convertSelectedToUppercase(textareaRef.value, textRedactorRef);
const lowerCase = () => convertSelectedToLowercase(textareaRef.value, textRedactorRef);
</script>

<template>
    <div class="ReactiveButtons">
        <div class="ReactiveButtons_buttons">
            <button @click="handleUndo"><img :src="GoBack" alt="Назад"></button>
            <button @click="handleRedo"><img :src="GoNext" alt="Вперед"></button>
            <button @click="upperCase"><img :src="TextTitle" alt="Вставить заголовок"></button>
            <button @click="lowerCase"><img :src="TextParagraph" alt="Вставить Абзац"></button>
            <button @click="handlePrompt"><img :src="AddImage" alt="Добавить картинку"></button>
        </div>
        <p class="ReactiveButtons_text" @click="copyText">
            Скопировать HTML
        </p>
    </div>
</template>

<style scoped>
@import url(../styles/ReactiveButtons.scss);
</style>
