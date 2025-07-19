'use client';
import { useEffect } from 'react';

export default function Modal({ isOpen, onClose, children }) {
  // 表示時後ろスクロール防止
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  //  if (!isOpen) {
  //    return null;
  //  } 省略形

  // <isOpen> Modalコンポーネントが親コンポーネント(Announcements.jsxなど)から受け取るプロパティ。
  //          モーダル開か(true)、閉か(false)の状態を表す、スイッチのような役割を持つ変数

  // <!>「論理NOT演算子」で、後ろに続く値が持つ「真偽値（true/false）」を反転させる。
  //     isOpen(モーダル本体) が true(開)時、!isOpen は false(閉)判定になる、逆もしかり
  //  「もし開いていなければ」

  // isOpenがfalse時、return null; を実行しコンポーネントの処理を終了する分岐
  // isOpenがtrue時は、if文の条件に不一致でreturn null;は実行されずに、次行return実行でモーダル表示
  if (!isOpen) return null;

  // モーダル
  return (
    <div
      // モーダル表示時背景
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75"
      onClick={onClose}
    >
      {/* モーダル外枠 */}
      <div
        className="relative mx-4 max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-lg bg-white p-6 shadow-xl"
        // モーダル内部のクリックで閉じないようにする
        onClick={(e) => e.stopPropagation()}
      >
        {/* モーダル閉じるボタン */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white text-2xl font-bold border-2 text-gray-500 shadow-md transition-colors hover:bg-gray-200 hover:text-gray-800"
        >
          &times;
        </button>

        {/* 各コンポーネント */}
        {children}
      </div>
    </div>
  );
}
