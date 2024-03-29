import m from 'mithril';

interface Skill {
  id: string;
  category: string;
  context: string;
  level: string;
}

interface Skills extends Array<Skill> {}

interface Props {
  skills: Skills;
}

const SkillsCard = (props: Props) => {
  return {
    oninit: (vnode) => {
      vnode.state.skills = props.skills;
    },
    view: (vnode) => {
      const skillsets = {};
      vnode.state.skills.map((skill) => {
        if (skillsets[skill.category] === undefined) {
          skillsets[skill.category] = [];
        }
        skillsets[skill.category].push({
          context: skill.context,
          level: skill.level,
        });
      });

      return m(
        'div',
        {
          class:
            'bg-stone-50 shadow-lg overflow-hidden sm:rounded-2xl mx-32 mt-8 px-8 py-4',
        },

        Object.entries(skillsets).map(([key, value]) => {
          return [
            m('div', { class: 'px-8 py-8 sm:px-6' }, [
              m(
                'div',
                {
                  class:
                    'font-mono text-3xl leading-6 font-semibold text-gray-900',
                },
                key
              ),
              m(
                'div',
                { class: 'my-2 italic max-w-2xl text-md text-gray-500' },
                `Skills list of my ${key} Knowledge`
              ),
              value.map((skill) => {
                const skillLevel = (skill.level / 5) * 100;
                const skillColor =
                  skillLevel == 100
                    ? 'bg-teal-600'
                    : skillLevel > 60
                    ? 'bg-teal-400'
                    : 'bg-teal-200';
                const progessBarClass = 'h-5 rounded-full ' + skillColor;
                return m('div', { class: 'border-t border-gray-200' }, [
                  m('dl', [
                    m(
                      'div',
                      {
                        class:
                          'bg-gray-50 px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6',
                      },
                      [
                        m(
                          'dt',
                          { class: 'text-xl font-semibold text-gray-500' },
                          skill.context
                        ),
                        m(
                          'dd',
                          {
                            class:
                              'mt-1 text-lg text-gray-900 sm:mt-0 sm:col-span-2',
                          },
                          [
                            m(
                              'div',
                              {
                                class:
                                  'w-full bg-gray-200 rounded-full h-5 dark:bg-gray-700',
                              },
                              [
                                m('div', {
                                  class: progessBarClass,
                                  style: `width: ${skillLevel + '%'}`,
                                }),
                              ]
                            ),
                          ]
                        ),
                      ]
                    ),
                  ]),
                ]);
              }),
            ]),
          ];
        })
      );
    },
  };
};

export default SkillsCard;
