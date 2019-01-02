export default {
    form: null,
    recaptcha: null,
    data: () => ({
        success: false,
    }),
    render() {
        return this.$scopedSlots.default({
            success: this.success,
            registerForm: this.registerForm,
            registerRecaptcha: this.registerRecaptcha,
            onSubmit: this.onSubmit,
            onVerify: this.onVerify,
        });
    },
    methods: {
        registerForm({ el }) {
            this.$options.form = el;
        },
        registerRecaptcha({ component }) {
            this.$options.recaptcha = component;
        },
        onSubmit(evt) {
            evt.preventDefault();

            this.$options.recaptcha.execute();
        },
        onVerify(token) {
            const data = {
                name: this.$options.form.name,
                email: this.$options.form.email,
                message: this.$options.form.message,
                'g-recaptcha-response': token,
            };

            // axios.post('/contact', data)

            setTimeout(() => {
                console.log({ data });
                this.success = true;
            }, 500);
        },
    },
};
