<template>
    <div class="addreview">
        <h1>Добавить отзыв</h1>
        <div class="flex">
            <my-textarea v-model="reviewText" label="Ваш отзыв:" />
            <input type="file" multiple />
            <my-button class="btn" label="Добавить" type="submit" @click="onAdd"></my-button>
            <div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                shownDialog: false,
                reviewText: "",
            };
        },
        methods: {
            onAdd () {
                this.$store.dispatch('reviews/createReview', {title: this.reviewText});
                this.$router.push('./reviews');
            },
        },
};
</script>

<style scoped>
  .flex {
      display: flex;
      flex-direction: column;
      width: 50%;
      margin-left: 15px;
  }
  .btn {
    text-align: start;
    width: 75px;
    margin-top: 15px;
    margin-right: 5px;
  }
  .check {
      text-align: start;
  }
  .select {
      user-select: none;
  }
</style>