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

        doneTodo(index) {
            if (this.todos[index].done === 'false') {
                this.todos[index].done = 'true';
                
                console.log('todo completata'); //DEBUG

            } else if (this.todos[index].done === 'true') {
                this.todos[index].done = 'false'

                console.log('todo da completare'); //DEBUG
            }
        },

        deleteTodo(index) {
            this.todos.splice(index, 1);
        }
    }
});