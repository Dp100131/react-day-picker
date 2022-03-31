import React from 'react';

import { render } from '@testing-library/react';

import { freezeBeforeAll } from 'react-day-picker/test/utils';

import Example from '@examples/rtl';

const today = new Date(2021, 10, 25);
freezeBeforeAll(today);

let container: HTMLElement;
beforeEach(() => {
  container = render(<Example />).container;
});

test('should have the rtl attribute', () => {
  expect(container.firstChild).toHaveAttribute('dir', 'rtl');
});