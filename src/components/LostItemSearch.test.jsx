import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import LostItemSearch from './LostItemSearch';

// useRouterフックをモック化
const mockPush = jest.fn();
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

const mockLines = [
  { id: 1, name: 'Wangan Line' },
  { id: 2, name: 'Loop Line' },
];

const mockCategories = [
  { id: 1, name: 'Valuables' },
  { id: 2, name: 'Clothing' },
];

const siteColor = '#000000';

describe('LostItemSearch', () => {
  beforeEach(() => {
    // 各テストの前にモックの履歴をクリア
    mockPush.mockClear();
  });

  it('renders the form with dropdowns and a search button', () => {
    render(
      <LostItemSearch
        lines={mockLines}
        categories={mockCategories}
        siteColor={siteColor}
      />,
    );

    expect(screen.getByLabelText('種類')).toBeInTheDocument();
    expect(screen.getByLabelText('路線')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '検索' })).toBeInTheDocument();
  });

  it('navigates to the search results page with selected parameters on submit', async () => {
    const user = userEvent.setup();
    render(
      <LostItemSearch
        lines={mockLines}
        categories={mockCategories}
        siteColor={siteColor}
      />,
    );

    // カテゴリを選択
    await user.selectOptions(screen.getByLabelText('種類'), 'Valuables');
    expect(screen.getByLabelText('種類')).toHaveValue('Valuables');

    // 路線を選択
    await user.selectOptions(screen.getByLabelText('路線'), 'Wangan Line');
    expect(screen.getByLabelText('路線')).toHaveValue('Wangan Line');

    // 検索ボタンをクリック
    await user.click(screen.getByRole('button', { name: '検索' }));

    // router.pushが正しいURLで呼び出されたか確認
    const expectedParams = new URLSearchParams();
    expectedParams.append('line', 'Wangan Line');
    expectedParams.append('category', 'Valuables');
    expect(mockPush).toHaveBeenCalledWith(
      `/lost-items/search?${expectedParams.toString()}`,
    );
  });

  it('navigates without parameters if none are selected', async () => {
    const user = userEvent.setup();
    render(
      <LostItemSearch
        lines={mockLines}
        categories={mockCategories}
        siteColor={siteColor}
      />,
    );

    // 何も選択せずに検索ボタンをクリック
    await user.click(screen.getByRole('button', { name: '検索' }));

    // router.pushがクエリパラメータなしで呼び出されたか確認
    expect(mockPush).toHaveBeenCalledWith('/lost-items/search?');
  });
});
