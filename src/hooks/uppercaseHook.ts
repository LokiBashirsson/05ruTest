export const convertSelectedToUppercase = (textarea: HTMLTextAreaElement | null, textRef: { value: string | undefined }) => {
    if (!textarea || !textRef.value) return;
    const before = textRef.value.slice(0, textarea.selectionStart);
    const selected = textRef.value.slice(textarea.selectionStart, textarea.selectionEnd).toUpperCase();
    const after = textRef.value.slice(textarea.selectionEnd);
    textRef.value = before + selected + after;
};

export const convertSelectedToLowercase = (textarea: HTMLTextAreaElement | null, textRef: { value: string | undefined }) => {
    if (!textarea || !textRef.value) return;
    const before = textRef.value.slice(0, textarea.selectionStart);
    const selected = textRef.value.slice(textarea.selectionStart, textarea.selectionEnd).toLowerCase();
    const after = textRef.value.slice(textarea.selectionEnd);
    textRef.value = before + selected + after;
};

// Изначально планировались хуки, но потом нашел вариант по проще