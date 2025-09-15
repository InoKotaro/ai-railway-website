import { act, fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import BackToTopButton from './BackToTopButton';

// Mock window properties and methods
// Directly define pageYOffset to be writable
Object.defineProperty(window, 'pageYOffset', { writable: true, value: 0 });
const mockScrollTo = jest.fn();
Object.defineProperty(window, 'scrollTo', {
  value: mockScrollTo,
  writable: true,
});

// Mock add/removeEventListener for scroll
const scrollListeners = {};
const mockAddEventListener = jest
  .spyOn(window, 'addEventListener')
  .mockImplementation((event, callback) => {
    scrollListeners[event] = callback;
  });
const mockRemoveEventListener = jest
  .spyOn(window, 'removeEventListener')
  .mockImplementation((event, callback) => {
    delete scrollListeners[event];
  });

// Helper to trigger scroll event
const triggerScroll = (yOffset) => {
  window.pageYOffset = yOffset; // Directly set the value
  if (scrollListeners.scroll) {
    act(() => {
      scrollListeners.scroll();
    });
  }
};

describe('BackToTopButton', () => {
  beforeEach(() => {
    mockScrollTo.mockClear();
    mockAddEventListener.mockClear();
    mockRemoveEventListener.mockClear();
    // Reset scroll position for each test
    triggerScroll(0);
  });

  afterAll(() => {
    mockScrollTo.mockRestore();
    mockAddEventListener.mockRestore();
    mockRemoveEventListener.mockRestore();
  });

  it('renders the button and is not visible initially', () => {
    render(<BackToTopButton isModalOpen={false} />);
    const button = screen.getByRole('button', { name: 'トップへ戻る' });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('opacity-0');
    expect(button).toHaveClass('translate-y-full');
    expect(button).toHaveClass('pointer-events-none');
  });

  it('becomes visible when scrolled past 100px', () => {
    render(<BackToTopButton isModalOpen={false} />);
    const button = screen.getByRole('button', { name: 'トップへ戻る' });

    triggerScroll(101);

    expect(button).toHaveClass('opacity-100');
    expect(button).toHaveClass('translate-y-0');
    expect(button).not.toHaveClass('pointer-events-none');
  });

  it('becomes hidden when scrolled back to 0', () => {
    render(<BackToTopButton isModalOpen={false} />);
    const button = screen.getByRole('button', { name: 'トップへ戻る' });

    triggerScroll(101); // Make it visible
    expect(button).toHaveClass('opacity-100');

    triggerScroll(0); // Scroll back
    expect(button).toHaveClass('opacity-0');
    expect(button).toHaveClass('translate-y-full');
    expect(button).toHaveClass('pointer-events-none');
  });

  it('remains hidden when isModalOpen is true, even if scrolled', () => {
    render(<BackToTopButton isModalOpen={true} />);
    const button = screen.getByRole('button', { name: 'トップへ戻る' });

    triggerScroll(101); // Should be visible if not for isModalOpen

    expect(button).toHaveClass('opacity-0');
    expect(button).toHaveClass('translate-y-full');
    expect(button).toHaveClass('pointer-events-none');
  });

  it('calls window.scrollTo when clicked', () => {
    render(<BackToTopButton isModalOpen={false} />);
    const button = screen.getByRole('button', { name: 'トップへ戻る' });

    triggerScroll(200); // Make it visible and clickable
    fireEvent.click(button);

    expect(mockScrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });

  it('removes the scroll event listener on unmount', () => {
    const { unmount } = render(<BackToTopButton isModalOpen={false} />);
    expect(mockAddEventListener).toHaveBeenCalledWith(
      'scroll',
      expect.any(Function),
    );

    unmount();

    expect(mockRemoveEventListener).toHaveBeenCalledWith(
      'scroll',
      expect.any(Function),
    );
  });
});
