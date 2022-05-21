import m from 'mithril';

const Loading = () => {
  return {
    view: () => {
      return m(
        'div',
        {
          class: 'container mx-auto mt-8',
        },
        [
          m('div', { class: 'flex justify-center items-center' }, [
            m(
              'div',
              {
                class:
                  'spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full',
                role: 'status',
              },
              [m('span', { class: 'visuall-hidden' }, 'Data is Loading ...')]
            ),
          ]),
        ]
      );
    },
  };
};

export default Loading;
