<script>
    import {path} from 'ramda';

    export default {
        props: {
            duration: {
                type: Number
            }
        },
        data() {
            return {
                currentTime: 0
            }
        },
        mounted() {
            document.addEventListener('wheel', this.onWheelHandler);
        },
        beforeDestroy() {
            document.removeEventListener('wheel', this.onWheelHandler);
        },
        methods: {
            onWheelHandler(e) {
                let step = e.deltaY > 0 ? 1 : -1;
                if (step < 0 && this.currentTime === 0) {
                    return;
                }

                if (step > 0 && this.currentTime === this.duration) {
                    return;
                }

                this.currentTime += step;
            }
        },
        render(h) {
            this.$slots.default.map(children => {
                const props = path(['componentOptions', 'propsData'], children);
                if (!props) {
                    return;
                }
                children.componentOptions.propsData.currentTime = this.currentTime;
            });

            return h('div', {class: 'scene'}, this.$slots.default);
        }
    };
</script>
<style scoped>
    .scene {
        position: relative;
        height: 100%;
        overflow: hidden;
    }
</style>