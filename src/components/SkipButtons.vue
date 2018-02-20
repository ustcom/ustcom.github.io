<template>
    <div :style="style" class="skip-buttons">
        <button type="button" class="btn btn-outline-success">Услуги</button>
        <button type="button" class="btn btn-outline-primary">Справка</button>
    </div>
</template>

<script>
    import {animationable} from "../mixins/animationable";

    export default {
        name: "skip-buttons",
        mixins: [animationable],
        data() {
            return {
                opacity: 1,
                animation: [
                    {
                        time: {
                            from: 0,
                            duration: 7
                        },
                        properties: {
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
                    transform: `translate(20px, 48vh)`,
                    opacity: this.opacity
                }
            }
        }
    }
</script>

<style scoped>
    .skip-buttons button {
        margin: 2px;
    }
</style>