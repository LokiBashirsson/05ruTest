import { textRedactorRef } from "../components/TextRedactor.vue"

export const copyText = () => navigator.clipboard.writeText(textRedactorRef.value || '');