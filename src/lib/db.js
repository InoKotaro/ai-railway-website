import prisma from './prisma';

/**
 * データベースから忘れ物を検索
 * @param {string} line - 検索する路線名
 * @param {string} category - 検索するカテゴリ名
 * @param {string} center - お忘れ物センター名
 * @returns {Promise<Array>} 検索結果の配列
 */
export async function queryLostItems(line, category) {
  const where = {};

  if (line) {
    where.line = {
      name: line,
    };
  }

  if (category) {
    where.category = {
      name: category,
    };
  }

  const lostItems = await prisma.lostItem.findMany({
    where,
    include: {
      line: true,
      category: true,
    },
  });

  // Prismaの検索結果をコンポーネントが期待する形式に変換
  return lostItems.map((item) => ({
    id: item.id,
    name: item.itemName,
    category: item.category.name,
    foundLine: item.line.name,
    image: item.imageUrl || '/images/other/no-image.jpg',
    foundDate: 'N/A',
    center: item.center,
  }));
}
