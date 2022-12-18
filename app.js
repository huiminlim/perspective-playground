Vue.createApp({
    data() {
        return {
            perspective: 500,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0
        }
    },
    computed: {
        rotation() {
            return {
                transform: `
                    perspective(${this.perspective}px)
                    rotateX(${this.rotateX}deg)
                    rotateY(${this.rotateY}deg)
                    rotateZ(${this.rotateZ}deg)
                `
            }
        }
    },
    methods: {
        reset() {
            this.perspective = 500
            this.rotateX = 0
            this.rotateY = 0
            this.rotateZ = 0
        },
        async copy() {
            let text = `transform:${this.transform};`
            await navigator.clipboard.writeText(text)
            // TODO: Add a good notification
        }
    }
}).mount("#app")