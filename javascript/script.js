new Vue ({
    el: '#app',
    data: {
        todos: [
            {
                text: 'Seguire la lezione di boolean',
                done: 'true'
            },
            {
                text: 'Riposo',
                done: 'true',
            },
            {
                text: 'Esercitazione coding',
                done: 'false',
            },
            {
                text: 'Andare in palestra',
                done: 'false',
            },
            {
                text: 'Continuare ad esercitarsi con Vue.js',
                done: 'false',
            },
        ],

        newTodoText: '',
        
    },
    methods: {
        addTodo() {
            if (this.newTodoText.trim()) {
                this.todos.push({
                    text: this.newTodoText.trim(),
                    done: 'false'
                })
                this.newTodoText = '';
            } else {}
        },

        deleteTodo(index) {
            this.todos.splice(index, 1);
        }
    }
});