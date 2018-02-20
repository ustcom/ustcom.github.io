<template>
    <span :style="style">Почему мы?</span>
</template>

<script>
    import {animationable} from "../mixins/animationable";

    export default {
        mixins: [animationable],
        name: "why-we",
        data() {
            return {
                rotate: 0,
                fontSize: 56,
                translateY: 30,
                translateX: 600,
                opacity: 0,
                animation: [
                    {
                        time: {
                            from: 5,
                            duration: 10
                        },
                        properties: {
                            translateX: {
                                from: 600,
                                to: 300
                            },
                            opacity: {
                                from: 0,
                                to: 1
                            }
                        }
                    },
                    {
                        time: {
                            from: 50,
                            duration: 10
                        },
                        properties: {
                            translateX: {
                                from: 300,
                                to: 200
                            }
                        }
                    }
                ]
            }
        },
        computed: {
            style() {
                return {
                    transform: `translate(${this.translateX}px, calc(${this.translateY}vh - 112px))`,
                    'transition': 'all  .300s ease',
                    display: 'inline-block',
                    position: 'absolute',
                    'transform-origin': `${this.translateX}px calc(${this.translateY}vh - 112px)`,
                    'font-size': `${this.fontSize}px`,
                    opacity: this.opacity
                }
            }
        }
    }
</script>

<style scoped>

</style>