<template>
      <button class="btn">{{label}}</button>
</template>

<script>
export default {
        name: 'MyButton',
        props: {
            label: {
                type: String,
                default: 'Название',
            },
            type: {
                type: String,
                default: 'submit',
            },
        },
    };
</script>
    

<style>
    .btn {
    text-align: start;
  }
</style>