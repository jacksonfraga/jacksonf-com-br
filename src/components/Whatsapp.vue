<template>
  <div class="whatsapp">
    <h2>{{ msg }}</h2>
    <input v-model="fone" placeholder="+5551999998888">
    <a v-bind:href="url">Send Message</a>
  </div>
</template>

<script>
export default {
  name: 'WhatsApp',
  data () {
    return {
      msg: 'Abrir conversa whatsapp sem contato',
      fone: ''

    }
  },
  computed: {
    url () {
      return 'whatsapp://send?abid=' + this.fone + '&text=Olá!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
