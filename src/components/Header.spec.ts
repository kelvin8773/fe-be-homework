/**
 * @jest-environment jsdom
 */

const m = require('mithril');
const { tidy } = require('mithril-jest');
const Header = require('./Header');

describe('Header Component', () => {
  const names = ['Susan Wong', 'Michael Jordon', 'Bruce Lee'];

  names.map((name) => {
    test('should show name props correctly', () => {
      const cmp = m(Header({ name }));
      const html = tidy(cmp);
      expect(html).toMatchSnapshot();
    });
  });
});
