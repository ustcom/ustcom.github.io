<template>
    <div :style="style" class="animation-word"> Услуги по охране труда</div>
</template>
<script>
    import {animationable} from "../mixins/animationable";
    const START_ROTATE = 0;
    const START_FONT_SIZE = 56;
    const START_TRANSLATE_X = 0;
    const START_TRANSLATE_Y = 50;

    export default {
        name: 'greeting',
        mixins: [animationable],
        data() {
            return {
                rotate: START_ROTATE,
                fontSize: START_FONT_SIZE,
                translateY: START_TRANSLATE_Y,
                translateX: START_TRANSLATE_X,
                animation: [
                    {
                        time: {
                            from: 0,
                            duration: 10
                        },
                        properties: {
                            rotate: {
                                from: START_ROTATE,
                                to: 90
                            },
                            fontSize: {
                                from: START_FONT_SIZE,
                                to: 90
                            },
                            translateY: {
                                from: START_TRANSLATE_Y,
                                to: 30,
                            },
                            translateX: {
                                from: START_TRANSLATE_X,
                                to: 300
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
                            },
                            opacity: {
                                from: 1,
                                to: 0
                            }
                        }

                    }
                ]
            }
        },
        computed: {
            style() {
                return {
                    transform: `rotate(${this.rotate}deg) translate(${this.translateX}px, calc(${this.translateY}vh - 112px))`,
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
    .animation-word {
        white-space: nowrap;
    }
</style>