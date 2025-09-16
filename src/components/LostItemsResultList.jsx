'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';

export default function LostItemsResultList({ items }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // ページネーション用の計算
  const totalPages = Math.ceil((items?.length || 0) / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = useMemo(() => {
    return items?.slice(startIndex, endIndex) || [];
  }, [items, startIndex, endIndex]);

  // ページ変更ハンドラー
  const handlePageChange = (page) => {
    setCurrentPage(page);
    // ページトップにスクロール
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!items || items.length === 0) {
    return (
      <div className="rounded-lg border bg-white p-8 text-center text-gray-600 shadow-sm">
        <p className="text-lg">
          お探しの条件に合致する忘れ物は見つかりませんでした。
        </p>
        <p className="mt-2 text-sm">条件を変更して、もう一度お試しください。</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* 結果の表示 */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-2">
        {currentItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-4 rounded-lg border bg-white p-4 shadow-sm sm:flex-row sm:items-center"
          >
            <div className="relative h-32 w-full flex-shrink-0 sm:h-24 sm:w-24">
              <Image
                src={item.image || '/images/lost-items/default.jpg'}
                alt={item.name}
                fill
                className="rounded-md object-cover"
                sizes="(max-width: 640px) 100vw, 96px"
              />
            </div>
            <div className="text-gray-700">
              <p>種類： {item.category}</p>
              <p>路線： {item.foundLine}</p>
              <p>保管： {item.center}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ページネーション */}
      {totalPages > 1 && (
        <div className="flex flex-col items-center space-y-4">
          {/* ページ情報 */}
          <div className="text-sm text-gray-600">
            {startIndex + 1} - {Math.min(endIndex, items.length)} 件目 / 全{' '}
            {items.length} 件
          </div>

          {/* ページネーションボタン */}
          <div className="flex items-center space-x-2">
            {/* 前のページボタン */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              前へ
            </button>

            {/* ページ番号ボタン */}
            <div className="flex space-x-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => {
                  // 表示するページ番号を制限（現在のページ周辺のみ表示）
                  const showPage =
                    page === 1 ||
                    page === totalPages ||
                    (page >= currentPage - 2 && page <= currentPage + 2);

                  if (!showPage) {
                    // 省略記号を表示
                    if (page === currentPage - 3 || page === currentPage + 3) {
                      return (
                        <span key={page} className="px-2 py-2 text-gray-500">
                          ～
                        </span>
                      );
                    }
                    return null;
                  }

                  return (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`rounded-md px-3 py-2 text-sm font-medium ${
                        currentPage === page
                          ? 'bg-blue-600 text-white'
                          : 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {page}
                    </button>
                  );
                },
              )}
            </div>

            {/* 次のページボタン */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              次へ
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
