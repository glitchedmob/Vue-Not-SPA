export default {
    inserted(el) {
        el.classList.add('mounted');
    },
    unbind(el) {
        el.classList.remove('mounted');
    },
};
