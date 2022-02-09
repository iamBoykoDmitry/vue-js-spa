
export default {
    count (state) {
        return state.reviews.length;
    },
    all (state) {
        return state.reviews;
    },
    photoReviews (state) {
        return state.reviews.filter(reviews => reviews.type === 'photorev');
    },
}