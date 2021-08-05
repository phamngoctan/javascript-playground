Vue.component('app-user', {
    props: ['user'],
    data: function() {
        return {
            // username: 'Chris'
        }
    },
    template: '<p @click="userClicked">{{ user }}</p>',
    methods: {
        userClicked() {
            this.$emit('usrclicked', this.user);
        }
    }
});

new Vue({
    el: '#app',
    data: {
        todos: [],
        userInput: ''
    },
    methods: {
        addTodo: function() {
            // this in VueJS, makes sure it point to the Vue instance
            if (this.userInput.trim() == '') {
                return;
            }
            console.log('User input value: ' + this.userInput);
            let newTodo = initNewTopo(this.userInput);
            function initNewTopo(userInput) {
                return {
                    id: _.uniqueId(),
                    value: userInput
                };
            }
            this.todos.push(newTodo);
            pointBackToInput.apply(this);
            function pointBackToInput() {
                this.$refs.inputText.focus();
                this.userInput = '';
            }
        },
        removeTodo(todoItem) {
            for (let i = 0; i < this.todos.length; i++) {
                if (this.todos[i]['id']== todoItem.id) {
                    this.todos.splice(i, 1);
                    break;
                }
            }
            console.log(this.todos);
        },
        getColor(number) {
            return number % 2 == 0 ? '#2ab52a' : 'orange';
        },
        userWasClicked(name) {
            alert(name);
        }
    }
});


new Vue({
    el: '#secondApp',
    data: {
        message: "Second app warmly welcome"
    }
});


