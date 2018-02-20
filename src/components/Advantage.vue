<template>
    <div class="advantage" :style="style">
        <div class="header">
            <h2><span class="number">{{this.number}}. </span>{{ this.header }}</h2>
        </div>
        <div class="desc">{{ this.desc }}</div>
    </div>
</template>

<script>
    import {animationable} from "../mixins/animationable";

    export default {
        mixins: [animationable],
        props: {
            number: {
                type: Number
            },
            header: {
                type: String
            },
            desc: {
                type: String
            },
            start: {
                type: Number
            }
        },
        name: "advantage",
        data() {
            return {
                height: 0,
                animation: [{
                    time: {
                        from: this.start,
                        duration: 25
                    },
                    properties: {
                        height: {
                            from: 0,
                            to: 140
                        }
                    }
                }]
            }
        },
        computed: {
            style() {
                return {
                    height: this.height + 'px'
                }
            }
        }
    }
</script>

<style scoped>
    .advantage {
        width: 250px;
        max-height: 500px;
        overflow: hidden;
        transition: all .300s ease;
    }

    .header .number {
        color: blueviolet;
    }
</style>