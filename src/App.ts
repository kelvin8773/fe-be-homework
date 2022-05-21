import m from 'mithril';
import 'tw-elements';
import Header from './components/Header';
import Loading from './components/Loading';
import Navigator from './components/Navigator';

const App = {
  oninit: async (vnode) => {
    vnode.state.experiences = await (
      await fetch('http://localhost:9000/api/experiences')
    ).json();
    m.redraw();
  },
  view: (vnode) => {
    console.log(vnode.state.experiences);
    return vnode.state.experiences
      ? m('div', { class: 'container mx-auto text-base py-4' }, [
          m(
            Header({
              name: 'Kelvin Liang',
            })
          ),
          m(Navigator),
        ])
      : m(Loading);
  },
};

export default App;
