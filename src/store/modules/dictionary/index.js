import _ from 'lodash';

export default {
  namespaced: true,
  state: {
    commonWords: [
      { word: 'aaaa', description: 'あiueoidあiueoidisaあいｆｄさあiueoidisaあいｆｄさあiueoidisaあいｆｄさあiueoidisaあいｆｄさisaあいｆｄさ\nｆｄさいおおおおうふぃだ\nすごいだあいいあおああ\nまじでされがあだおあい' },
      { word: 'aaaa', description: 'あiueoidあiueoidisaあいｆｄさあiueoidisaあいｆｄさあiueoidisaあいｆｄさあiueoidisaあいｆｄさisaあいｆｄさ\nｆｄさいおおおおうふぃだ\nすごいだあいいあおああ\nまじでされがあだおあい' },
      { word: 'aaaa', description: 'あiueoidあiueoidisaあいｆｄさあiueoidisaあいｆｄさあiueoidisaあいｆｄさあiueoidisaあいｆｄさisaあいｆｄさ\nｆｄさいおおおおうふぃだ\nすごいだあいいあおああ\nまじでされがあだおあい' },
      { word: 'aaaa', description: 'あiueoidあiueoidisaあいｆｄさあiueoidisaあいｆｄさあiueoidisaあいｆｄさあiueoidisaあいｆｄさisaあいｆｄさ\nｆｄさいおおおおうふぃだ\nすごいだあいいあおああ\nまじでされがあだおあい' },
      { word: 'aaaa', description: 'あiueoidあiueoidisaあいｆｄさあiueoidisaあいｆｄさあiueoidisaあいｆｄさあiueoidisaあいｆｄさisaあいｆｄさ\nｆｄさいおおおおうふぃだ\nすごいだあいいあおああ\nまじでされがあだおあい' },
      { word: 'aaaa', description: 'あiueoidあiueoidisaあいｆｄさあiueoidisaあいｆｄさあiueoidisaあいｆｄさあiueoidisaあいｆｄさisaあいｆｄさ\nｆｄさいおおおおうふぃだ\nすごいだあいいあおああ\nまじでされがあだおあい' },
      { word: 'aaaa', description: 'あiueoidあiueoidisaあいｆｄさあiueoidisaあいｆｄさあiueoidisaあいｆｄさあiueoidisaあいｆｄさisaあいｆｄさ\nｆｄさいおおおおうふぃだ\nすごいだあいいあおああ\nまじでされがあだおあい' },
      { word: 'aaaa', description: 'あiueoidあiueoidisaあいｆｄさあiueoidisaあいｆｄさあiueoidisaあいｆｄさあiueoidisaあいｆｄさisaあいｆｄさ\nｆｄさいおおおおうふぃだ\nすごいだあいいあおああ\nまじでされがあだおあい' },
      { word: 'aaaa', description: 'あiueoidあiueoidisaあいｆｄさあiueoidisaあいｆｄさあiueoidisaあいｆｄさあiueoidisaあいｆｄさisaあいｆｄさ\nｆｄさいおおおおうふぃだ\nすごいだあいいあおああ\nまじでされがあだおあい' },
      { word: 'aaaa', description: 'あiueoidあiueoidisaあいｆｄさあiueoidisaあいｆｄさあiueoidisaあいｆｄさあiueoidisaあいｆｄさisaあいｆｄさ\nｆｄさいおおおおうふぃだ\nすごいだあいいあおああ\nまじでされがあだおあい' },
      { word: 'aaaa', description: 'あiueoidあiueoidisaあいｆｄさあiueoidisaあいｆｄさあiueoidisaあいｆｄさあiueoidisaあいｆｄさisaあいｆｄさ\nｆｄさいおおおおうふぃだ\nすごいだあいいあおああ\nまじでされがあだおあい' },
      { word: 'aaaa', description: 'あiueoidあiueoidisaあいｆｄさあiueoidisaあいｆｄさあiueoidisaあいｆｄさあiueoidisaあいｆｄさisaあいｆｄさ\nｆｄさいおおおおうふぃだ\nすごいだあいいあおああ\nまじでされがあだおあい' },
      { word: 'aaaa', description: 'あiueoidあiueoidisaあいｆｄさあiueoidisaあいｆｄさあiueoidisaあいｆｄさあiueoidisaあいｆｄさisaあいｆｄさ\nｆｄさいおおおおうふぃだ\nすごいだあいいあおああ\nまじでされがあだおあい' },
      { word: 'xxx', description: '' },
    ],
    novelWords: [],
  },
  getters: {},
  mutations: {
    commonWord(state, word, description) {
      const trimmed = _.trim(word);
      if (_.size(trimmed) === 0) {
        return;
      }
      if (!_.find(state.commonWords, data => data.word === trimmed)) {
        state.commonWords.push({
          word: trimmed,
          description: _.toString(description),
        });
      }
    },
  },
};
