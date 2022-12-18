Vue.createApp({
    data() {
        return {
            perspective: 500,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0
        }
    },
    methods: {
        reset() {
            this.perspective = 500
            this.rotateX = 0
            this.rotateY = 0
            this.rotateZ = 0
        }
    }
}).mount("#app")