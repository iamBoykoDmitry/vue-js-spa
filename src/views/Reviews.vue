<template>
    <div class="all_reviews">
        <h1>Отзывы</h1>
        <h2>{{$store.getters['reviews/count']}}</h2>
        <div class="reviews">
            <div v-for="review in reviewArray"
                :key="review.id">
                {{review.id}}: {{review.title}}
            </div>
            <router-view />
            <div @click="doLoadReviews">Загрузить еще...</div>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            reviewArray () {
                return this.$store.getters['reviews/all'];
            },
        },
        created() {
            this.doLoadReviews();
        },
        data () {
        },
        methods: {
            onAdd () {
                this.$router.push('/reviews');
            },
            doLoadReviews () {
                this.$store.dispatch('reviews/loadReviews');
            }
        },
};
</script>

<style>
  .all_reviews {

  }
</style>