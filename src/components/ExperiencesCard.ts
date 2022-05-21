import m from 'mithril';
import { DateTime } from 'luxon';

interface Duty {
  did: string;
  description: string;
}

interface Experience {
  id: string;
  company: string;
  location: string;
  from: string;
  to: string;
  title: string;
  duties: Array<Duty>;
}

interface Experiences extends Array<Experience> {}

interface Props {
  experiences: Experiences;
}

const ExperiencesCard = (props: Props) => {
  return {
    oninit: (vnode) => {
      vnode.state.experiences = props.experiences;
    },
    view: (vnode) => {
      const { experiences } = vnode.state;
      return m(
        'div',
        {
          class:
            'bg-stone-50 shadow-lg overflow-hidden sm:rounded-2xl mx-32 mt-8 px-8 py-4',
        },

        experiences.map((exp) => {
          return [
            m('div', { class: 'px-8 py-8 sm:px-6' }, [
              m('div', { class: 'flex flex-row items-baseline' }, [
                m(
                  'div',
                  { class: 'text-2xl font-medium text-gray-900' },
                  exp.company
                ),
                m(
                  'span',
                  {
                    class:
                      'ml-2 max-w-1xl text-md font-thin text-gray-500 italic',
                  },
                  `${DateTime.fromISO(exp.from).toFormat('LLL, yyyy')} ~ ${
                    exp.to
                      ? DateTime.fromISO(exp.to).toFormat('LLL, yyyy')
                      : 'present'
                  }`
                ),
              ]),
              m(
                'div',
                { class: 'mt-1 max-w-2xl text-lg text-gray-500 font-black' },
                `${exp.title}`
              ),
              m(
                'div',
                { class: 'mt-1 max-w-2xl text-md text-gray-500 font-mono' },
                exp.location
              ),
              exp.duties.map((duty) => {
                return m('ul', { class: 'border-gray-200 mt-2' }, [
                  m(
                    'li',
                    {
                      class:
                        'bg-gray-50 sm:gap-4 sm:px-6 text-md font-light text-gray-500',
                    },
                    `+ ${duty.description}`
                  ),
                ]);
              }),
            ]),
          ];
        })
      );
    },
  };
};

export default ExperiencesCard;
