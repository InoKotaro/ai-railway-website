import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import Announcements from './Announcements';

// Mock the Modal component to make testing easier
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

const mockAnnouncements = [
  {
    title: 'First Announcement',
    description: 'This is the description for the first announcement.',
    images: ['/image1.jpg', '/image2.jpg'],
  },
  {
    title: 'Second Announcement',
    description: 'This is the description for the second announcement.',
    images: [],
  },
];

const siteColor = '#000000';

describe('Announcements', () => {
  // Mock Date to make tests deterministic
  beforeAll(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2025-09-15T12:00:00Z'));
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('renders the announcements list', () => {
    render(
      <Announcements announcements={mockAnnouncements} siteColor={siteColor} />,
    );

    expect(screen.getByText('お知らせ')).toBeInTheDocument();
    expect(screen.getByText('First Announcement')).toBeInTheDocument();
    expect(screen.getByText('Second Announcement')).toBeInTheDocument();

    // Check for dates (based on the mocked date and internal logic)
    // daysToAdd = [6, 11, 23]
    // 2025-09-15 + 6 days = 2025-09-21
    // 2025-09-15 + 11 days = 2025-09-26
    expect(screen.getByText('2025/09/21')).toBeInTheDocument();
    expect(screen.getByText('2025/09/26')).toBeInTheDocument();
  });

  it('opens and closes the modal on announcement click', () => {
    const onModalToggle = jest.fn();
    render(
      <Announcements
        announcements={mockAnnouncements}
        siteColor={siteColor}
        onModalToggle={onModalToggle}
      />,
    );

    // Modal should be closed initially
    expect(screen.queryByTestId('mock-modal')).not.toBeInTheDocument();

    // Click the first announcement
    fireEvent.click(screen.getByText('First Announcement'));

    // Check that modal toggle callback was called
    expect(onModalToggle).toHaveBeenCalledWith(true);

    // Modal should now be open
    const modal = screen.getByTestId('mock-modal');
    expect(modal).toBeInTheDocument();

    // Check modal content
    expect(
      screen.getByText('This is the description for the first announcement.'),
    ).toBeInTheDocument();
    expect(screen.getAllByRole('img').length).toBe(2);
    expect(screen.getByAltText('First Announcement 1')).toHaveAttribute(
      'src',
      '/image1.jpg',
    );

    // Close the modal
    fireEvent.click(screen.getByText('Close Modal'));

    // Modal should be closed
    expect(screen.queryByTestId('mock-modal')).not.toBeInTheDocument();
    expect(onModalToggle).toHaveBeenCalledWith(false);
  });
});
