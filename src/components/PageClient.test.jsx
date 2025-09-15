import { render, screen } from '@testing-library/react';
import React from 'react';

import PageClient from './PageClient';

// すべての子コンポーネントをモック化
jest.mock('@/components/Header', () => () => <div data-testid="mock-header" />);
jest.mock('@/components/CurrentStatus', () => () => (
  <div data-testid="mock-current-status" />
));
jest.mock('@/components/Slider', () => () => <div data-testid="mock-slider" />);
jest.mock('@/components/Announcements', () => () => (
  <div data-testid="mock-announcements" />
));
jest.mock('@/components/LostItemSearch', () => () => (
  <div data-testid="mock-lost-item-search" />
));
jest.mock('@/components/Lines', () => () => <div data-testid="mock-lines" />);
jest.mock('@/components/PrSpots', () => () => (
  <div data-testid="mock-pr-spots" />
));
jest.mock('@/components/Safety', () => () => <div data-testid="mock-safety" />);
jest.mock('@/components/Company', () => () => (
  <div data-testid="mock-company" />
));
jest.mock('@/components/Footer', () => () => <div data-testid="mock-footer" />);
jest.mock('@/components/BackToTopButton', () => () => (
  <div data-testid="mock-back-to-top-button" />
));

// 設定とデータをモック化
jest.mock('@/config/config', () => ({
  siteConfig: {
    color: {
      backgroundColor: '#fff',
      siteColor: '#000',
    },
  },
}));
jest.mock('@/data/navLinks', () => ({ navLinks: [] }));

describe('PageClient', () => {
  it('renders all the main sections of the page', () => {
    // ダミーのpropsを提供
    const props = {
      searchLines: [],
      searchCategories: [],
      displayLines: [],
      announcements: [],
      prSpots: [],
      sliderSlides: [],
    };

    render(<PageClient {...props} />);

    // すべてのモック化されたコンポーネントがレンダリングされていることを確認
    expect(screen.getByTestId('mock-header')).toBeInTheDocument();
    expect(screen.getByTestId('mock-current-status')).toBeInTheDocument();
    expect(screen.getByTestId('mock-slider')).toBeInTheDocument();
    expect(screen.getByTestId('mock-announcements')).toBeInTheDocument();
    expect(screen.getByTestId('mock-lost-item-search')).toBeInTheDocument();
    expect(screen.getByTestId('mock-lines')).toBeInTheDocument();
    expect(screen.getByTestId('mock-pr-spots')).toBeInTheDocument();
    expect(screen.getByTestId('mock-safety')).toBeInTheDocument();
    expect(screen.getByTestId('mock-company')).toBeInTheDocument();
    expect(screen.getByTestId('mock-footer')).toBeInTheDocument();
    expect(screen.getByTestId('mock-back-to-top-button')).toBeInTheDocument();
  });
});
