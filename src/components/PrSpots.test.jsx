import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import PrSpots from './PrSpots';

// Mock child components and external libraries
jest.mock('./Modal', () => {
  // eslint-disable-next-line react/prop-types
  return function MockModal({ isOpen, onClose, children }) {
    if (!isOpen) return null;
    return (
      <div data-testid="mock-modal">
        <div>{children}</div>
        <button onClick={onClose}>Close Modal</button>
      </div>
    );
  };
});

jest.mock('swiper/react', () => ({
  Swiper: ({ children }) => <div data-testid="mock-swiper">{children}</div>,
  SwiperSlide: ({ children }) => (
    <div data-testid="mock-swiper-slide">{children}</div>
  ),
}));

const mockPrSpots = [
  {
    name: 'Aqua Park',
    station: 'Aqua Station',
    img: '/aqua.jpg',
    images: ['/aqua1.jpg', '/aqua2.jpg'],
    description: 'A beautiful water park.',
  },
  {
    name: 'Theme Park',
    station: 'Theme Park Station',
    img: '/theme.jpg',
    images: ['/theme1.jpg'],
    description: 'A fun theme park.',
  },
];

const siteColor = '#000000';

describe('PrSpots', () => {
  it('renders the list of PR spots', () => {
    render(<PrSpots prSpots={mockPrSpots} siteColor={siteColor} />);

    expect(screen.getByText('おでかけガイド')).toBeInTheDocument();
    expect(screen.getByText('Aqua Park')).toBeInTheDocument();
    expect(screen.getByText('Aqua Station')).toBeInTheDocument();
    expect(screen.getByText('Theme Park')).toBeInTheDocument();
    expect(screen.getByText('Theme Park Station')).toBeInTheDocument();
  });

  it('opens a modal with spot details when a spot is clicked', () => {
    const onModalToggle = jest.fn();
    render(
      <PrSpots
        prSpots={mockPrSpots}
        siteColor={siteColor}
        onModalToggle={onModalToggle}
      />,
    );

    // Modal should not be visible initially
    expect(screen.queryByTestId('mock-modal')).not.toBeInTheDocument();

    // Click on the first spot
    fireEvent.click(screen.getByText('Aqua Park'));

    // onModalToggle should be called with true
    expect(onModalToggle).toHaveBeenCalledWith(true);

    // Modal should be visible
    const modal = screen.getByTestId('mock-modal');
    expect(modal).toBeInTheDocument();

    // Check for spot details inside the modal
    expect(screen.getByText('A beautiful water park.')).toBeInTheDocument();
    // Check that the swiper and its slides are rendered
    expect(screen.getByTestId('mock-swiper')).toBeInTheDocument();
    expect(screen.getAllByTestId('mock-swiper-slide').length).toBe(2);
    expect(screen.getByAltText('Aqua Park 1')).toHaveAttribute(
      'src',
      '/aqua1.jpg',
    );

    // Close the modal
    fireEvent.click(screen.getByText('Close Modal'));

    // Modal should be closed
    expect(screen.queryByTestId('mock-modal')).not.toBeInTheDocument();
    expect(onModalToggle).toHaveBeenCalledWith(false);
  });
});
