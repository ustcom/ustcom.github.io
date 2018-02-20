<script>
    export default {
        name: "blur-hover",
        render(h) {
            return h('div', {class: 'blur'}, this.$slots.default);
        }
    }
</script>

<style scoped>
    .blur {
        transition: filter .300s ease;
    }
    .blur:hover {
        filter: blur(5px)
    }
</style>