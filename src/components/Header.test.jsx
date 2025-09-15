import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import Header from './Header';

// Mock data for props
const mockNavLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'External', href: 'https://example.com' },
];

const siteColor = '#000000';
const backgroundColor = '#ffffff';

describe('Header', () => {
  it('renders the logo and navigation links', () => {
    render(
      <Header
        navLinks={mockNavLinks}
        siteColor={siteColor}
        backgroundColor={backgroundColor}
      />,
    );

    // Check for the logo
    const logo = screen.getByAltText('AI電鉄 ロゴ');
    expect(logo).toBeInTheDocument();
    expect(logo.closest('a')).toHaveAttribute('href', '/');

    // Check for navigation links within the main navigation
    const mainNav = screen.getByRole('navigation', { name: 'Main navigation' });
    const withinMainNav = within(mainNav);

    expect(withinMainNav.getByText('Home')).toBeInTheDocument();
    expect(withinMainNav.getByText('About')).toBeInTheDocument();
    expect(withinMainNav.getByText('External')).toBeInTheDocument();

    // Check href attributes
    expect(withinMainNav.getByText('Home').closest('a')).toHaveAttribute('href', '/');
    expect(withinMainNav.getByText('About').closest('a')).toHaveAttribute('href', '/about');
    expect(withinMainNav.getByText('External').closest('a')).toHaveAttribute(
      'href',
      'https://example.com',
    );
  });

  it('toggles the mobile menu', () => {
    const onMenuToggle = jest.fn();
    render(
      <Header
        navLinks={mockNavLinks}
        siteColor={siteColor}
        backgroundColor={backgroundColor}
        onMenuToggle={onMenuToggle}
      />,
    );

    const menuOpenButton = screen.getByLabelText('メニューを開く');
    expect(menuOpenButton).toBeInTheDocument();

    // Open the menu
    fireEvent.click(menuOpenButton);
    expect(onMenuToggle).toHaveBeenCalledWith(true);

    const menuCloseButton = screen.getByLabelText('メニューを閉じる');
    expect(menuCloseButton).toBeInTheDocument();

    // Check if mobile nav links are visible
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' });
    const withinMobileNav = within(mobileNav);
    expect(withinMobileNav.getByText('Home')).toBeInTheDocument();
    expect(withinMobileNav.getByText('About')).toBeInTheDocument();
    expect(withinMobileNav.getByText('External')).toBeInTheDocument();


    // Close the menu
    fireEvent.click(menuCloseButton);
    expect(onMenuToggle).toHaveBeenCalledWith(false);
  });
});
