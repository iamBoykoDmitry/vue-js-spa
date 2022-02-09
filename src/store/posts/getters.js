export default {
    count (state) {
        return state.posts.length;
    },
    all (state) {
        return state.posts;
    },
    newsPosts (state) {
        return state.post.filter(post => post.type === 'news');
    },
}