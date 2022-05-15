import m from 'mithril';
import Header from './components/Header';
import Navigator from './components/Navigator';

const App = {
  view: () =>
    m('div', { class: 'container mx-auto text-base py-4' }, [
      m(
        Header({
          name: 'Kelvin Liang',
        })
      ),
      m(Navigator),
    ]),
};

export default App;
