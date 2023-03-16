const { createApp } = Vue

createApp({
    data() {
            return {
                taskList: [
                    {
                    text: 'fai quel che vuoi!',
                    done: false  
                    },
                    {
                    text: 'fallo quando vuoi!',
                    done: false  
                    },
                    {
                    text: 'fallo con chi vuoi!',
                    done: false  
                    }
            ]
            }
    },
    methods: {
      
    }
}).mount('#app')