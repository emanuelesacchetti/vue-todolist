const { createApp } = Vue

createApp({
    data() {
            return {
                error: true,
                newTask: '',
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
      removeTask(index){
        this.taskList.splice(index, 1)
      },
      addTask(element){
        nuovaTask = {
                    text: element,
                    done: false  
                    };
        this.taskList.push(nuovaTask);
        this.newTask = '';
      },
      fatto(indice){
        this.taskList[indice].done = !this.taskList[indice].done
      }
    }
}).mount('#app')