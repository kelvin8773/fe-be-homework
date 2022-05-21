import m from 'mithril';

interface Props {
  selected: string;
  setSelected: (select: string) => void;
}

const Navigator = (props: Props) => {
  const { selected, setSelected } = props;
  const selectedClass =
    'mt-8 mr-4 py-2 px-8 bg-sky-300 text-white rounded-full shadow-lg';
  const notSelectedClass =
    'mt-8 mr-4 py-2 px-8 bg-sky-600 hover:bg-sky-300 text-white rounded-full shadow-lg';

  return {
    view: () =>
      m('div', { class: 'container flex justify-center' }, [
        m(
          'button',
          {
            class: selected == 'skills' ? selectedClass : notSelectedClass,
            onclick: () => setSelected('skills'),
          },
          'Skills'
        ),
        m(
          'button',
          {
            class: selected == 'experiences' ? selectedClass : notSelectedClass,
            onclick: () => setSelected('experiences'),
          },
          'Experiences'
        ),
        m(
          'button',
          {
            class: selected == 'contacts' ? selectedClass : notSelectedClass,
            onclick: () => setSelected('contacts'),
          },
          'Contacts'
        ),
      ]),
  };
};

export default Navigator;
