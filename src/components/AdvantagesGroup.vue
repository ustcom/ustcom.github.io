<template>
    <div class="advantage-group" :style="style">
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
                    transform: `translate(${this.translateX}px, 30vh)`,
                    transition: '.300s ease all'
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
</style>