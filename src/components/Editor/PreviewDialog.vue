<template>
  <dialog class="mdl-dialog" id="preview-dialog">
    <button id="preview-dialog-close-button" class="mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--fab mdl-color--accent" @click.prevent="closePreview">
      <i class="material-icons mdl-color-text--white" role="presentation">clear</i>
      <span class="visuallyhidden">閉じる</span>
    </button>
    <h5 class="mdl-dialog__title" id="preview-dialog-title">{{title}}</h5>
    <div class="mdl-dialog__content" id="preview-dialog-content">
      <preview :source="body"></preview>
    </div>
  </dialog>
</template>


<script>
  import Preview from './Preview';

  export default {
    name: 'previewDialog',
    props: ['title', 'body'],
    components: {
      Preview,
    },
    computed: {
    },
    methods: {
      openPreview() {
        this.$el.showModal();
      },
      closePreview() {
        this.$el.close();
      },
    },
  };
</script>

<style>
  #preview-dialog {
    min-width: 500px;
    height: 90%;
    overflow: visible;
  }

  #preview-dialog-title {
    margin-bottom: 20px;
  }

  #preview-dialog-content {
    max-height: 80%;
    overflow: auto;
    padding: 0 50px 20px 20px;
  }

  #preview-dialog-close-button {
    position: absolute;
    top: 5px;
    right: -23px;
    transform: translate(5px, -23px);
  }
</style>
