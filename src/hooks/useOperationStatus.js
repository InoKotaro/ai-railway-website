import { useEffect, useState } from 'react';

/**
 * 運行状況メッセージのリストを受け取り、その中からランダムに1つを選択して返すカスタムフック
 * @param {Array<Object>} messages - 運行状況メッセージの配列
 * @returns {Object} ランダムに選択されたメッセージオブジェクト
 */
export function useOperationStatus(messages) {
  const [statusMessage, setStatusMessage] = useState(messages[0]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    setStatusMessage(messages[randomIndex]);
  }, [messages]); // messagesが変更された場合にも再実行されるように依存配列に含める

  return statusMessage;
}
