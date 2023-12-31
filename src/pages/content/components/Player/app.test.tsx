import { render, screen } from '@testing-library/react';
import App from '@root/src/pages/content/components/Player/app';

describe('appTest', () => {
  test('render text', () => {
    // given
    const text = 'content view';

    // when
    render(<App />);

    // then
    screen.getByText(text);
  });
});
