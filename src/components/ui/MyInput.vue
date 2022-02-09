<template>
    <div class="all-signin">
        <label style="text-align: start" for="login" @mouseenter="showHint" @mouseleave="hideHint" >{{label}}</label>
        <input id="login" v-model="inputValue" :required = 'required'/>
        <div class="hint" v-if="shownHint">
            {{hint}}
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                inputValue: '',
                shownHint: false,
            };
        },
        props: {
            modelValue: {
                type: String,
                default: null,
            },
            hint: {
                type: String,
            },
            label: {
                type: String,
                default: 'Поле ввода',
            },
            required: {
                type: Boolean,
                default: false,
            }
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
        methods: {
            showHint() {
                    this.shownHint = true;
            },
            hideHint() {
                this.shownHint = false;
            },
        }
    }
</script>

<style>
    .all_signin {
        display: flex;
        flex-direction: column;
  }
  label {}
  .hint {
      background: white;
      border: 1px solid gray;
      border-radius: 10px;
      position: relative;
  }
</style>