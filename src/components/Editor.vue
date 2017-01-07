<template>
  <div>
    <div class="mdl-grid">
      <div id="input-cell" class="mdl-shadow--2dp mdl-color--white mdl-cell mdl-cell--8-col">
        <form action="#">
          <div class="mdl-textfield mdl-js-textfield" id="text-body-input-container">
            <textarea class="mdl-textfield__input" id="text-body-input" v-model="textBody" :rows="inputRows"></textarea>
            <label class="mdl-textfield__label" for="text-body-input">
              本文を入力してください
              <span style="visibility: hidden;">{{inputRows}}</span>
            </label>
          </div>
        </form>
      </div>

      <div class="mdl-cell mdl-shadow--2dp mdl-cell--4-col mdl-cell--8-col-tablet mdl-grid mdl-grid--no-spacing">
        <div class="mdl-card mdl-shadow--2dp">
          <div class="mdl-card__title mdl-card--expand">
            <h2 class="mdl-card__title-text">Update</h2>
          </div>
          <div class="mdl-card__supporting-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aenan convallis.
          </div>
          <div class="mdl-card__actions mdl-card--border">
            <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
              View Updates
            </a>
          </div>
        </div>
      </div>
    </div>
    <div>
      <dialog class="mdl-dialog" id="preview-dialog">
        <div class="mdl-dialog__actions">
          <button type="button" class="mdl-button close" @click.prevent="closePreview">閉じる</button>
        </div>
        <h4 class="mdl-dialog__title" id="preview-dialog-title">プレビュー</h4>
        <div class="mdl-dialog__content" id="preview-dialog-content">
          <preview :source="textBody" />
        </div>
      </dialog>
    </div>
    <div id="preview-button">
      <button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect" @click.prevent="openPreview">
        <i class="material-icons">visibility</i>
      </button>
    </div>
  </div>
</template>

<script>
  import _ from 'lodash';
  import Preview from './Editor/Preview';

  export default {
    name: 'editor',
    components: {
      Preview,
    },
    data() {
      return {
        textBody: '',
      };
    },
    computed: {
      inputRows() {
        return _.toString(this.textBody).split(/\n/).length + 1;
      },
      dialog() {
        return this.$el.querySelector('#preview-dialog');
      },
    },
    methods: {
      openPreview() {
        this.dialog.showModal();
      },
      closePreview() {
        this.dialog.close();
      },
    },
    watch: {},
  };
</script>

<style>
  #input-cell {
    padding: 20px;
  }

  #text-body-input-container {
    width: 100%;
  }

  #preview-button {
    position: fixed;
    right: 23px;
    bottom: 23px;
    padding-top: 15px;
    margin-bottom: 0;
    z-index: 998;
  }

  #preview-dialog {
    min-width: 500px;
    height: 90%;
    overflow: hidden;
  }

  #preview-dialog-title {
    margin-bottom: 20px;
  }

  #preview-dialog-content {
    max-height: 70%;
    overflow: auto;
    padding: 20px;
    padding-right: 50px;
  }
</style>

