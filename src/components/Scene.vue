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
            },
            addProps(components) {
                components.map(children => {
                    const props = path(['componentOptions', 'propsData'], children);
                    const childs = path(['componentOptions', 'children'], children);
                    if (childs) {
                        this.addProps(childs);
                    }

                    if (!props) {
                        return;
                    }

                    children.componentOptions.propsData.currentTime = this.currentTime;
                });
            }
        },
        render(h) {
            this.addProps(this.$slots.default);
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