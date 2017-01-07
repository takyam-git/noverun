<template>
  <div id="preview" class="mdl-color--white mdl-typography--title" v-html="parsed">
  </div>
</template>

<script>
  import _ from 'lodash';
  import marked from 'marked';
  import stringWidth from 'string-width';

  const renderer = new marked.Renderer();
  function renderBox(text) {
    const lines = text.split(/\n/);
    const separator = _.repeat('−', stringWidth(_.maxBy(lines, line => stringWidth(line))));
    return `<p>${_.join([separator, _.join(lines, '<br />'), separator], '<br />')}</p>`;
  }
  const renderText = text => `<p>${text}</p>`;
  const renderPlain = text => text;
  renderer.blockquote = renderBox;
  renderer.code = renderBox;
  renderer.html = renderPlain;
  renderer.heading = (text, level) => `<p>${_.repeat('-', level)} ${text} ${_.repeat('-', level)}</p>`;
  renderer.paragraph = renderText;
  renderer.list = body => `<p>${body.replace(/<br \/>$/, '')}</p>`;
  renderer.listitem = text => `・${text.replace(/(^<p>|<\/p>$)/g, '')}<br />`;
  renderer.hr = () => _.repeat('-', 30);
  renderer.strong = renderPlain;
  renderer.em = renderPlain;
  renderer.codespan = renderPlain;
  renderer.br = () => '<br />';
  renderer.del = renderPlain;
  renderer.link = (href, title, text) => `<ruby><rb>${text}</rb><rt>${href}</rt></ruby>`;

  marked.setOptions({
    renderer,
    gfm: true,
    tables: false,
    breaks: true,
    pedantic: false,
    sanitize: true,
    smartLists: false,
    smartypants: false,
  });

  export default {
    name: 'preview',
    props: ['source'],
    components: {},
    computed: {
      parsed() {
        return marked(this.source);
      },
    },
  };
</script>

<style>
  #preview {
    width: 100%;
    padding: 20px;
  }
</style>
