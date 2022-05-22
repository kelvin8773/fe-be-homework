import m from 'mithril';
import Header from './components/Header';
import Loading from './components/Loading';
import Navigator from './components/Navigator';
import SkillsCard from './components/SkillsCard';
import ExperiencesCard from './components/ExperiencesCard';
import ContactsCard from './components/ContactsCard';

const loadSelected = async (select: string, node: Object) => {
  node[select] = await (
    await fetch(`http://localhost:9000/api/${select}`)
  ).json();
};

const App = {
  oninit: async (vnode) => {
    vnode.state.selected = 'contacts';
    await loadSelected(vnode.state.selected, vnode.state);
    vnode.state.loaded = 'true';
    m.redraw();
  },

  view: (vnode) => {
    const { loaded, skills, experiences, contacts } = vnode.state;
    let { selected } = vnode.state;
    const setSelected = async (select) => {
      await loadSelected(select, vnode.state);
      vnode.state.selected = select;
      m.redraw();
    };

    return m('div', { class: 'container mx-auto text-base py-4' }, [
      m(
        Header({
          name: 'Kelvin Liang',
        })
      ),
      m(Navigator({ selected, setSelected })),
      loaded
        ? selected == 'skills'
          ? m(SkillsCard({ skills }))
          : selected == 'experiences'
          ? m(ExperiencesCard({ experiences }))
          : m(ContactsCard({ contacts }))
        : m(Loading),
    ]);
  },
};

export default App;
