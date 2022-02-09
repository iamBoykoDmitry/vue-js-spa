export default {
    loadPosts (context) {
        if (!context.state.initLoad) {
            context.state.initLoad = true;
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => context.state.reviews = context.state.posts.concat(json));
        }
    },

    createPost (context, data) {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json())
            .then((json) => context.commit('addPost', json));
                }
}