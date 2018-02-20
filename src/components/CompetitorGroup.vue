<template>
    <div class="competitor-group" :style="style">
        <h2 class="header">А не они?</h2>
        <slot></slot>
    </div>
</template>

<script>
    import {animationable} from "../mixins/animationable";

    export default {
        mixins: [animationable],
        name: "competitor-group",
        data() {
            return {
                opacity: 0,
                translateX: 900,
                animation: [{
                    time: {
                        from: 50,
                        duration: 10
                    },
                    properties: {
                        translateX: {
                            from: 900,
                            to: 650
                        },
                        opacity: {
                            from: 0,
                            to: 1
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
    .header {
        font-size: 46px;
    }
</style>