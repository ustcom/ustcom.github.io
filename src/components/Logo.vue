<template>
    <h1 class="logo" :style="style">ОАО USTCOM</h1>
</template>

<script>
    import {animationable} from "../mixins/animationable";

    export default {
        mixins: [animationable],
        name: "logo",
        data() {
            return {
                translateY: 10,
                fontSize: 65,
                animation: [{
                    time: {
                        from: 0,
                        duration: 10
                    },
                    properties: {
                        translateY: {
                            from: 10,
                            to: 5
                        },
                        fontSize: {
                            from: 65,
                            to: 40
                        }
                    }
                }]
            }
        },
        computed: {
            style() {
                return {
                    transform: `translateY(${this.translateY}vh)`,
                    'font-size': `${this.fontSize}px`
                }
            }
        }
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Quicksand');
    .logo {
        font-family: 'Quicksand', sans-serif;
        font-weight: bolder;
        position: absolute;
        transition: .300s ease all;
        text-align: center;
        width: 100%;
    }
</style>