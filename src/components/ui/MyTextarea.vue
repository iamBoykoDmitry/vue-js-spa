<template>
<div>
  <select v-model="selected">
    <option disabled value="">Выберите один из вариантов</option>
    <option>А</option>
    <option>Б</option>
    <option>В</option>
  </select>
  <span>Выбрано: {{ selected }}</span>
</div>
</template>

<script>
export default {
        name: 'checkbox',
        data() {
            return {
        selected: ''
        };
    },
};
</script>
    

<style>
    .btn {
    text-align: start
  }
</style>