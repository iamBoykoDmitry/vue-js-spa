import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
//import About from '../views/About.vue'
import Services from '../views/Services.vue'
import Reviews from '../views/Reviews.vue'
import ReviewsForm from '../components/ReviewsForm.vue'
import AddReview from '../views/AddReview.vue'
import Contacts from '../components/Contacts.vue'
import Authorize from '../views/Authorize.vue'
import SignIn from '../views/SignIn.vue'
//import { isAuth } from '../App.vue';

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/services',
        name: 'Services',
        component: Services,
    },
    {
        path: '/reviews',
        name: 'Reviews',
        component: Reviews,
    },
    {
        path: '/new_reviews',
        name: 'add_review',
        component: AddReview,
    },
    {
        path: '/contacts',
        name: 'Contacts',
        component: Contacts,
    },
    {
        path: '/:id',
        component: ReviewsForm,
    },
    {
        path: '/authorize',
        name: 'Authorize',
        component: Authorize,
    },
    {
        path: '/signin',
        name: 'Signin',
        component: SignIn,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router