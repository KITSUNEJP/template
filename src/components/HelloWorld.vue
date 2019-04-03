<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="container">
      <b-tabs content-class="mt-3">
        <b-tab title="first" active><p>I'm the first fading tab</p></b-tab>
        <b-tab title="second"><p>I'm the second tab content</p></b-tab>
        <b-tab title="disabled" disabled><p>Disabled tab!</p></b-tab>
      </b-tabs>
    </div>
    <div>
      <div>
        <b-button v-b-modal.modal-1>Launch demo modal</b-button>

        <!-- Modal Component -->
        <b-modal id="modal-1" title="BootstrapVue" hide-footer="true">
          <p class="my-4">Hello from modal!</p>
        </b-modal>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}

ul {
  padding: 0;
  list-style-type: none;
}

li {
  display: inline-block;
  margin: 0 10px;
}
</style>