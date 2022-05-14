import m from 'mithril';
import avatarImg from '../static/images/man-avatar2.jpg';

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
          m('img', { class: 'w-32', src: avatarImg }),
          m('div', { class: 'mt-2 text-4xl italic font-mono font-bold' }, name),
        ]
      );
    },
  };
};

export default Header;
