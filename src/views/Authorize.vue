<template>
  <div class="authorize">
    <div class="authorize-text">
      <h1>Регистрация</h1>
    </div>
    <form class="fields">
      <my-input label="Придумайте логин:" v-model.trim="loginText" required = "true" hint="Поле не должно быть пустым"/>
      <my-input label="Придумайте пароль:" v-model="passwordText" type="password" required = "true" hint="Поле не должно быть пустым" />
      <my-input label="Повторите пароль:" v-model.trim="passwordText" type="password" required = "true" hint="Поле не должно быть пустым"/>
    <div class="others">
      <div class="radio">
                Пол:
                <my-radio class="radio" label="М" choice="1" name="1" v-model="first" required = "true" />
                <my-radio class="radio" label="Ж" choice="2" name="2" v-model="first" required = "true" />
            </div>
      <div class="check">
        <my-checkbox class="check" label="" required = "true" />Принимаю условия пользовательского соглашения
            </div>
            <div class="authbuttons">
      <my-button class="but" label="Зарегистрироваться" type="submit" @click="onAdd">Зарегистрироваться</my-button>
      <my-button class="batn" label="На главную" @click="dialogClick"></my-button>
      <my-dialog ref="dialog" @okClick="todo">
                    <template #header>
                      <div></div>
                    </template>
                    <template #body>
                      Вы точно хотите выйти на главную страницу?
                    </template>
                    <template #footer>
                    </template>
                </my-dialog>
          </div>
            </div>
    </form>
  </div>
</template>

<script>
    import MyDialog from '@/components/ui/MyDialog.vue';
  export default {
    components: {MyDialog, },
          data () {
              return {
                  logIn: "",
                  password: "",
                  first: '',
                  shownDialog: false,
              };
          },
          methods: {
              onAdd () {
                  // this.$router.push('/');
              },
              dialogClick () {
                this.$refs.dialog.show();
            },
            todo () {
                this.$router.push('/');
            },
          },
  };
</script>

<style scoped>
  .fields {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .but {
    width: 165px;
    font-size: 16px;
  }
  .radio {
    display: flex;
    text-align: start;
  }
  .authbuttons {
    text-align: start;
  }
  .batn {
    width: 110px;
    font-size: 16px;
    margin-left: 10px;
  }
</style>