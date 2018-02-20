<script>
    export default {
        name: "shake-hover",
        render(h) {
            return h('div', {class: 'shake'}, this.$slots.default);
        }
    }
</script>

<style scoped>
    @keyframes shake {
        0% {
            transform: translate(2px, 3px);
        }
        10% {
            transform: translate(-3px, 3px);
        }
        20% {
            transform: translate(5px, 3px);
        }
        30% {
            transform: translate(1px, -6px);
        }
        40% {
            transform: translate(5px, 0px);
        }
        50% {
            transform: translate(-1px, 10px);
        }
        60% {
            transform: translate(8px, 10px);
        }
        70% {
            transform: translate(1px, 10px);
        }
        80% {
            transform: translate(2px, 5px);
        }
        90% {
            transform: translate(-2px, 5px);
        }
        100% {
            transform: translate(0px, 0px);
        }
    }

    .shake:hover {
        animation: shake .300s infinite;
    }
</style>