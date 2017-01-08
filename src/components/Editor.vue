<template>
  <div>
    <div class="mdl-grid">
      <div id="input-cell" class="mdl-shadow--2dp mdl-color--white mdl-cell mdl-cell--6-col">
        <form action="#" id="form">
          <div class="mdl-textfield mdl-js-textfield" id="title-input-container">
            <input class="mdl-textfield__input" type="text" id="title-input" v-model="title">
            <label class="mdl-textfield__label" for="title-input">タイトルを入力してください</label>
          </div>
          <div class="mdl-textfield mdl-js-textfield" id="text-body-input-container">
            <textarea class="mdl-textfield__input" id="text-body-input" v-model="textBody"></textarea>
            <label class="mdl-textfield__label" for="text-body-input">本文を入力してください</label>
          </div>
        </form>
      </div>

      <div class="mdl-cell mdl-shadow--2dp mdl-cell--3-col mdl-grid mdl-color--white">
      </div>

      <div class="mdl-cell mdl-shadow--2dp mdl-cell--3-col mdl-grid mdl-color--white">
        <div class="mdl-cell mdl-grid mdl-cell--12-col" style="margin: 0;">
          <div class="mdl-cell mdl-cell--6-col">
            <h4 style="margin: 0;">単語辞書</h4>
          </div>
          <div class="mdl-cell mdl-cell--6-col">
            <label class="mdl-switch mdl-js-switch mdl-js-ripple-effect" for="display-description-switch">
              <input type="checkbox" id="display-description-switch" class="mdl-switch__input" v-model="isDisplayDescription">
              <span class="mdl-switch__label" style="font-size: 14px;">説明を表示</span>
            </label>
          </div>
        </div>
        <ul class="demo-list-three mdl-list dictionary-words-container">
          <li class="mdl-list__item mdl-list__item--three-line mdl-list__item-text-body dictionary-word-container" v-for="(commonWord, index) in commonWords">
            <span class="mdl-list__item-primary-content dictionary-word-primary">
              <span>{{commonWord.word}}</span>
              <span class="mdl-list__item-text-body dictionary-word-description" v-if="isDisplayDescription && commonWord.description" v-html="nl2br(commonWord.description)"></span>
            </span>
            <span class="mdl-list__item-secondary-action">
              <button :id="`dictionary-word-copy-button-${index}`" class="mdl-button mdl-js-button mdl-button--fab mdl-button--icon dictionary-word-copy-button" @click.prevent="copyDictionaryWord(commonWord.word)">
                <i class="material-icons">content_copy</i>
              </button>
              <div class="mdl-tooltip" :data-mdl-for="`dictionary-word-copy-button-${index}`">コピー</div>
            </span>
          </li>
        </ul>
      </div>
    </div>
    <preview-dialog ref="previewDialog" :title="title" :body="textBody"></preview-dialog>
    <div id="preview-button">
      <button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect" @click.prevent="openPreview">
        <i class="material-icons">visibility</i>
      </button>
    </div>
    <div id="toast" class="mdl-js-snackbar mdl-snackbar">
      <div class="mdl-snackbar__text"></div>
      <button class="mdl-snackbar__action" type="button"></button>
    </div>
  </div>
</template>

<script>
  import _ from 'lodash';
  import { mapState } from 'vuex';
  import copy from 'copy-to-clipboard';

  import PreviewDialog from './Editor/PreviewDialog';

  export default {
    name: 'editor',
    components: {
      PreviewDialog,
    },
    data() {
      return {
        title: '',
        textBody: '',
        isDisplayDescription: true,
      };
    },
    computed: {
      ...mapState('dictionary', ['commonWords']),
    },
    methods: {
      nl2br(text) {
        return _.escape(text).replace(/\n/g, '<br />');
      },
      copyDictionaryWord(word) {
        copy(word);
        this.$el.querySelector('#toast').MaterialSnackbar.showSnackbar({
          message: 'コピーしました',
          timeout: 500,
        });
      },
      openPreview() {
        this.$refs.previewDialog.openPreview();
      },
    },
    watch: {},
  };
</script>

<style>
  #input-cell {
    padding: 20px;
  }

  #form {
    height: 100%;
  }

  #title-input-container,
  #text-body-input-container {
    width: 100%;
  }

  #title-input {
    font-size: 3rem;
  }

  #text-body-input-container {
    min-height: calc(100vh - 250px);
    height: calc(100% - 100px);
  }

  #text-body-input {
    height: 100%;
  }

  #preview-button {
    position: fixed;
    right: 23px;
    bottom: 23px;
    padding-top: 15px;
    margin-bottom: 0;
    z-index: 998;
  }

  .dictionary-words-container {
    width: 100%;
    margin-top: 0;
  }

  .dictionary-word-container {
    overflow: visible;
    height: auto;
    padding: 5px 20px;
  }

  .mdl-list__item--three-line .dictionary-word-primary,
  .mdl-list__item--three-line .dictionary-word-description {
    height: auto;
  }

  .dictionary-word-copy-button {
    color: white;
    width: 24px;
    height: 24px;
    font-size: 18px;
    min-width: 24px;
  }

  .dictionary-word-copy-button .material-icons {
    transform: translate(-9px, -9px);
    line-height: 18px;
    width: 18px;
    font-size: 18px;
  }
</style>

