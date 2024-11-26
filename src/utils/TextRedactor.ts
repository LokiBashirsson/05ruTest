export const autoResize:Function = (e:HTMLTextAreaElement) => {
    if (e.value) {
        e.style.height = 'auto';
        e.style.height = e.scrollHeight + 'px';
    }
};