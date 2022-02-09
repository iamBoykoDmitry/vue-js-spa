<template>
    <div class="radio">
        <input type="radio" :id="choice" :value="name"  :name="name" v-model="inputValue" />
        <label for="one">{{ label }}</label>
    </div>
</template>

<script>
export default {
        name: 'Myradio',
        data () {
            return {
                inputValue: '',
            };
        },
        props: {
            modelValue: {
                type: String,
                default: null,
            },
            label: {
                type: String,
                default: null,
            },
            choice: {
                type: String,
                default: 'id',
            },
            name: {
                type: String,
                default: null,
            },
        },
         watch: {
            modelValue: {
                handler () {
                    this.inputValue = this.modelValue;
                },
                immediate: true,
            },
            inputValue: {
                handler () {
                    this.$emit('update:modelValue', this.inputValue);
                }
            },
        },
    };
</script>
    

<style>
    .btn {
    text-align: start
  }
</style>

<!--<template>
<div id="v-model-radiobutton">
  <input type="radio" id="one" value="Один" v-model="picked" />
  <label for="one">{{label}}</label>
  <br />
  <input type="radio" id="two" value="Два" v-model="picked" />
  <label for="two">{{label}}</label>
  <br />
  <span>Выбрано: {{ label }}</span>
</div>
</template>

<script>
    export default {
  data() {
    return {
    picked: ''
    };
  },
   props: {
        label: {
            type: String,
            default: 'Вопрос',
        },
   }
}

</script>-->