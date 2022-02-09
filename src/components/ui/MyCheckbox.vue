<template>
    <input type="checkbox" id="checkbox" v-model="checked" />
    <label for="checkbox">{{ label }}</label>
</template>

<script>
export default {
        name: 'checkbox',
        props: {
            label: {
                type: String,
                default: 'Вопрос',
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
    text-align: start
  }
</style>