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
        'About me'
      ),
      m(
        'button',
        {
          class:
            'mt-8 mr-4 py-2 px-8 bg-sky-600 hover:bg-sky-400 text-white rounded-full shadow-lg',
        },
        'Hire me'
      ),
    ]),
};

export default Navigator;
