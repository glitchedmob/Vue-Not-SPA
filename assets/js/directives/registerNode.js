export default {
    inserted: (el, bindings, vnode) => {
        const register = bindings.value;

        register({ el, component: vnode.componentInstance });
    },
};
