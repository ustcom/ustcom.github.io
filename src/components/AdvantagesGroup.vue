<template>
    <div class="advantage-group" :style="style">
        <h2 class="header">Почему мы?</h2>
        <slot></slot>
    </div>
</template>

<script>
    import {animationable} from "../mixins/animationable";

    export default {
        mixins: [animationable],
        name: "advantages-group",
        data() {
            return {
                opacity: 0,
                translateX: 600,
                animation: [{
                    time: {
                        from: 15,
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
                }, {
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
                }]
            }
        },
        computed: {
            style() {
                return {
                    transform: `translate(${this.translateX}px, 15vh)`,
                    transition: '.300s ease all',
                    opacity: this.opacity
                }
            }
        }
    }
</script>

<style scoped>
    .advantage-group {
        height: 100%;
        position: absolute;
    }

    .header {
        font-size: 46px;
    }
</style>