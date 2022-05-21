import m from 'mithril';

const Navigator = {
  view: () =>
    m('div', { class: 'container flex justify-center' }, [
      m(
        'button',
        {
          class:
            'mt-8 mr-4 py-2 px-8 bg-sky-600 hover:bg-sky-700 text-white rounded-full shadow-lg',
        },
        'Skill'
      ),
      m(
        'button',
        {
          class:
            'mt-8 mr-4 py-2 px-8 bg-sky-600 hover:bg-sky-400 text-white rounded-full shadow-lg',
        },
        'Experiences'
      ),
      m(
        'button',
        {
          class:
            'mt-8 mr-4 py-2 px-8 bg-sky-600 hover:bg-sky-400 text-white rounded-full shadow-lg',
        },
        'Contacts'
      ),
    ]),
};

export default Navigator;
