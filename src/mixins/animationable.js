const animationable = {
    props: {
        currentTime: {
            type: Number,
            default: 0
        }
    },
    watch: {
        currentTime() {
            if (!this.animation) {
                return;
            }
            let currentTimeBlocks = this.animation.filter(block => {
                const to = block.time.from + block.time.duration;
                return block.time.from <= this.currentTime && to >= this.currentTime;
            });

            if (currentTimeBlocks.length === 0) {
                return;
            }

            currentTimeBlocks.forEach(block => {
                const currentPosition = this.currentTime - block.time.from;
                for (let property in block.properties) {
                    const from = block.properties[property].from;
                    const to = block.properties[property].to;
                    this[property] = this.easing(from, to, block.time.duration, currentPosition)
                }
            })
        }
    },
    methods: {
        easing(from, to, duration, currentTime) {
            const rage = to - from;
            return from + (currentTime * (rage / duration));
        }
    },
};

export {animationable}