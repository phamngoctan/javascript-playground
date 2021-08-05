Vue.component('app-hobby', {
    props: ['hobby'],
    template: '<li v-on:click="removeHobby">{{ hobby }}</li>',
    methods: {
        removeHobby() {
            // remember this.hobby is passed to the $event in the index.html
            this.$emit('hobbyremoved', this.hobby);
        }
    }
});

new Vue({
    el: '#hobbyApp',
    data: {
        hobbies: ['Sports', 'Cooking', 'Reading'],
        userHobby: '',
        hobbyWasDeleted: false,
        deletedHobby: ''
    },
    methods: {
        addHobby() {
            if (this.userHobby.trim() == '') {
                return;
            }
            this.hobbies.push(this.userHobby);
            this.userHobby = '';
            this.$refs.inputUserHobby.focus();
        },
        removeHobby(hobby) {
            let position = this.hobbies.indexOf(hobby);
            this.deletedHobby = hobby;
            this.hobbies.splice(position, 1);
            this.hobbyWasDeleted = true;
        }
    }
});