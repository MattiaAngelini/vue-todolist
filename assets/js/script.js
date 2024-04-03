
const { createApp } = Vue;

createApp({
  data() {
    return {
      inputUser: '',
      toDoList: [
        { text: 'portare il cane', done: true },
        { text: 'fare la spesa', done: true },
        { text: 'fare il bucato', done: false },
        { text: 'andare in banca', done: true },
        { text: 'andare in palestra', done: false }
      ],      
    };
  },
  methods: {

    removeItem (indexToDelete){
        this.toDoList.splice(indexToDelete,1);
    },

    addNewItem() {
        if (this.inputUser.trim() !== '') {
            this.toDoList.push({ text: this.inputUser});
            this.inputUser = '';
        }
    }
  
  }
}).mount('#app');
