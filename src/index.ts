import m from 'mithril';
import './index.css';

const App = {
  view: function () {
    return m('main', [
      m('h1', { class: 'title' }, 'My first app'),
      m('button', 'A button'),
    ]);
  },
};

const root = document.body;

m.mount(root, App);
