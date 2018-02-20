<script>
    export default {
        name: "cut-hover",
        render(h) {
            return h('div', {class: 'cut-hover'}, this.$slots.default);
        }
    }
</script>

<style scoped>
    .cut-hover {
        height: 90px;
        overflow: hidden;
        text-overflow: ellipsis;
        transition: .400s height ease;
    }

    .cut-hover:hover {
        height: 200px;
        transition: .400s height ease;
    }
</style>