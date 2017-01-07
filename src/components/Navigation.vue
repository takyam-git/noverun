<template>
  <div>
    <header class="mdl-layout__header mdl-layout__header--transparent is-casting-shadow">
      <div class="mdl-layout__header-row">
        <!-- Title -->
        <span class="mdl-layout-title">{{appName}}</span>
      </div>
    </header>
    <div :class="['mdl-layout__drawer', {['is-visible']: isSidebarOpened}]">
      <span class="mdl-layout-title">{{appName}}</span>
      <nav class="mdl-navigation">
        <a class="mdl-navigation__link" href="">
          <i class="material-icons mdl-list__item-icon">mode_edit</i>
          新しく書く
        </a>
      </nav>
    </div>
    <div aria-expanded="false" class="mdl-layout__drawer-button" @click.prevent="toggleSidebar">
      <i class="material-icons" role="presentation">menu</i>
    </div>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex';

  export default {
    name: 'header-navigation',
    computed: {
      ...mapState('config', ['appName']),
      ...mapGetters([
        'isSidebarOpened',
      ]),
    },
    components: {},
    methods: {
      ...mapActions([
        'toggleSidebar',
      ]),
    },
  };
</script>
