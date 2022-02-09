export default {
    loadReviews (context) {
        if (!context.state.initLoad) {
            context.state.initLoad = true;
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => context.state.reviews = context.state.reviews.concat(json));
        }
    },

    createReview (context, data) {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'REVIEW',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json())
            .then((json) => context.commit('addReview', json));
                }
}