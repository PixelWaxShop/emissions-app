import { render } from '@testing-library/react';
import Rating, { RatingProps } from './Rating';

describe('Rating component', () => {
  const ratingProps: RatingProps = { rating: '4.5' };

  it('should render correctly with the given props', () => {
    const { getByText } = render(<Rating {...ratingProps} />);

    expect(getByText('Trip rating')).toBeInTheDocument();
    expect(getByText('4.5')).toBeInTheDocument();
    expect(getByText('star', { exact: false })).toHaveAttribute('color', 'yellow.500');
    expect(getByText('star', { exact: false })).toHaveStyle('margin-right: 2px;');
  });
});
