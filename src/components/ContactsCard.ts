import m from 'mithril';
import * as F from '@mithril-icons/font-awesome';

interface Contact {
  id: string;
  catetory: string;
  context: string;
}

interface Contacts extends Array<Contact> {}

interface Props {
  contacts: Contacts;
}

const ONLINE_PLATFORMS = [
  {
    name: 'linkedin',
    icon: m(F.brands.Linkedin, {
      width: 50,
      height: 50,
      fill: 'rgb(2 132 199)',
    }),
    brandColor: 'bg-sky-200',
  },
  {
    name: 'github',
    icon: m(F.brands.Github, {
      width: 50,
      height: 50,
      fill: 'rgb(15 23 42)',
    }),
    brandColor: 'bg-zinc-200',
  },
  {
    name: 'leetcode',
    icon: m(F.solid.Code, {
      width: 50,
      height: 50,
      fill: 'rgb(234 179 8)',
    }),
    brandColor: 'bg-yellow-200',
  },
  {
    name: 'devto',
    icon: m(F.brands.Dev, {
      width: 50,
      height: 50,
      fill: 'rgb(38 38 38)',
    }),
    brandColor: 'bg-neutral-200',
  },
];

const ContactsCard = (props: Props) => {
  return {
    oninit: (vnode) => {
      vnode.state.contacts = props.contacts;
    },
    view: (vnode) => {
      const { contacts } = vnode.state;
      const onlinePlatforms = contacts
        .map((c) => {
          const search = ONLINE_PLATFORMS.find((p) => p.name === c.category);
          if (search) {
            return { ...c, ...search };
          } else {
            return undefined;
          }
        })
        .filter((f) => f !== undefined);

      const email = contacts.find((c) => c.category == 'email');

      return m(
        'div',
        {
          class:
            'bg-stone-50 shadow-lg overflow-hidden sm:rounded-2xl mx-32 mt-8 px-8 py-4',
        },
        [
          m(
            'div',
            { class: 'font-mono text-xl text-zinc-400 indent-12 px-2 my-4' },
            'Hi, thanks for checkouting my site, if you like to know more about me, you can checkout my present in following platforms.'
          ),
          m('div', { class: 'flex flex-row justify-center items-center' }, [
            onlinePlatforms.map((p) => {
              const iconClass = `mr-8 hover:${p.brandColor}`;
              return m(
                'a',
                {
                  href: p.context,
                  target: '_blank',
                  class: iconClass,
                },
                [p.icon]
              );
            }),
          ]),
          m(
            'div',
            { class: 'font-mono text-xl text-zinc-400 px-2 my-4' },
            'Or Drop me an email to say Hi.'
          ),
          m(
            'a',
            {
              href: `mailto: ${email.context}`,
              class: 'flex flex-row justify-center items-center',
            },
            m(F.solid.Envelope, {
              class: 'mr-2',
              width: 30,
              height: 30,
              fill: 'rgb(14 165 233)',
            }),
            m(
              'span',
              { class: 'font-mono text-xl italic text-sky-700' },
              email.context
            )
          ),
        ]
      );
    },
  };
};

export default ContactsCard;
