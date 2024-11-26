import { imageRef } from "../components/ImageAdd.vue"

export const handlePrompt = () => imageRef.value = prompt('Вставьте урл-ссылку на вашу картинку') || 'https://images.petovod.ru/photos/132487552777.jpg';

export const handleUndo = () => document.execCommand('undo');
export const handleRedo = () => document.execCommand('redo');