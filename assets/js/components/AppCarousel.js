export default {
    props: {
        totalSlides: String,
    },
    data: () => ({
        active: 0,
        animation: '',
    }),
    render() {
        return this.$scopedSlots.default({
            active: this.active,
            next: this.next,
            previous: this.previous,
            animation: this.animation,
        });
    },
    methods: {
        next() {
            this.animation = 'next-slide';

            if (this.active >= this.totalSlides - 1) {
                this.active = 0;
                return;
            }

            this.active++;
        },
        previous() {
            this.animation = 'prev-slide';

            if(this.active <= 0) {
                this.active = this.totalSlides - 1;
                return;
            }

            this.active--;
        }
    }
};
