import { createStore } from 'vuex'
import reviewsStore from './reviews'
import userStore from './user'
import postStore from './posts'

export default createStore({
    modules: {
        user: userStore,
        reviews: reviewsStore,
        posts: postStore,
    },
});