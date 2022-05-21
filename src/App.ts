import m from 'mithril';
// import 'tw-elements';
import Header from './components/Header';
import Loading from './components/Loading';
import Navigator from './components/Navigator';
import SkillsCard from './components/SkillsCard';
import ExperiencesCard from './components/ExperiencesCard';

const App = {
  oninit: async (vnode) => {
    vnode.state.experiences = await (
      await fetch('http://localhost:9000/api/experiences')
    ).json();
    vnode.state.skills = await (
      await fetch('http://localhost:9000/api/skills')
    ).json();
    vnode.state.loaded = 'true';
    vnode.state.selected = 'skills';
    m.redraw();
  },
  view: (vnode) => {
    const { loaded, skills, experiences } = vnode.state;
    let { selected } = vnode.state;
    const setSelected = (select) => {
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
          : 'Contact Info'
        : m(Loading),
    ]);
  },
};

export default App;
