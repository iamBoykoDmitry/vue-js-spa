<template>
  <div id="wrapper">
    <div class="newsitemsall">
      <div class="newitem">
        <div class="imagenew"><img src="../assets/new.jpg" alt="tolpa"></div>
        <div class="namenew">Ветеринарная клиника</div>
        <div class="subnamenew">Домашние животные – это полноценные члены семьи, без которых трудно представить свой дом. Но, чтобы наши любимцы всегда чувствовали себя хорошо, были здоровыми и энергичными, им нужен качественный уход, регулярное обследование, лечение и профилактика заболеваний. Именно такие цели ставит перед собой наша ветеринарная клиника</div>
      </div>
      <div class="newitem">
        <div class="imagenew"><img src="../assets/new2.jpg" alt="tolpa"></div>
        <div class="namenew">Круглосуточная клиника – качество лечения и удобство Ваших питомцев</div>
        <div class="subnamenew">У нас оборудованы просторные кабинеты для приема, обеспечивается комфортное ожидание своей очереди. В каждом из наших 3 центров есть большие стационары с обогревателями, вентиляцией и кондиционерами для комфорта заболевших животных.</div>
      </div>
    </div>
        <h2>{{$store.getters['posts/count']}}</h2>
        <div class="posts">
            <div v-for="post in postArray"
                :key="post.id">
                {{post.id}}: {{post.title}}
            </div>
            <router-view />
            <div @click="doLoadPosts">Показать больше</div>
        </div>
  </div>
</template>

<script>
export default {
  computed: {
            postArray () {
                return this.$store.getters['posts/all'];
            },
        },
  created() {
            this.doLoadPosts();
        },
    methods: {
            onAdd () {
                this.$router.push('/');
            },
            doLoadPosts () {
              this.$store.dispatch('posts/loadPosts');
            }
        },
    
}
</script>
