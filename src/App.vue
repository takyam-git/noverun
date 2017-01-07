<template>
  <div id="app">
    <div class="mdl-layout mdl-js-layout">
      <navigation />
      <main class="mdl-layout__content mdl-color--grey-100">
        <editor />
      </main>
      <div :class="['mdl-layout__obfuscator', {['is-visible']: isSidebarOpened}]" @click.prevent="toggleSidebar"></div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  import Navigation from './components/Navigation';
  import Editor from './components/Editor';

  export default {
    name: 'app',
    computed: {
      ...mapGetters([
        'isSidebarOpened',
      ]),
    },
    components: {
      Navigation,
      Editor,
    },
    methods: {
      ...mapActions([
        'toggleSidebar',
      ]),
    },
  };
</script>

<style>
</style>
