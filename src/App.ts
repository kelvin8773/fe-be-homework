import m from 'mithril';
// import 'tw-elements';
import Header from './components/Header';
import Loading from './components/Loading';
import Navigator from './components/Navigator';
import SkillsCard from './components/SkillsCard';

const App = {
  oninit: async (vnode) => {
    vnode.state.experiences = await (
      await fetch('http://localhost:9000/api/experiences')
    ).json();
    vnode.state.skills = await (
      await fetch('http://localhost:9000/api/skills')
    ).json();
    vnode.state.loaded = 'true';
    vnode.state.selected = 'skill';
    m.redraw();
  },
  view: (vnode) => {
    const { loaded, selected, skills, experiences } = vnode.state;

    return m('div', { class: 'container mx-auto text-base py-4' }, [
      m(
        Header({
          name: 'Kelvin Liang',
        })
      ),
      m(Navigator({ selected })),
      vnode.state.experiences
        ? m(SkillsCard({ skills: vnode.state.skills }))
        : m(Loading),
    ]);
  },
};

export default App;
