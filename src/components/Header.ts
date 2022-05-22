import m from 'mithril';
import avatar from '../static/images/kelvin-avatar.png';

interface Props {
  name: string;
}

const Header = (props: Props) => {
  return {
    view: () => {
      const { name } = props;

      return m(
        'header',
        {
          class: 'py-4 px-2 flex flex-col justify-center items-center',
        },
        [
          m('img', { class: 'w-32 rounded-full', src: avatar }),
          m('div', { class: 'mt-2 text-4xl italic font-mono font-bold' }, name),
        ]
      );
    },
  };
};

export default Header;
