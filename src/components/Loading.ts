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
            [m('span', { class: 'visuall-hidden' }, 'Data is Loading ...')],
          ]),
        ]
      );
    },
  };
};

export default Loading;
