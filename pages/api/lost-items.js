import { PrismaClient, Status } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    // 忘れ物の一覧取得（路線・カテゴリも含める）
    const items = await prisma.lostItem.findMany({
      include: {
        line: true,
        category: true,
      },
    });
    res.status(200).json(items);
  } else if (req.method === 'POST') {
    // 忘れ物の新規登録
    const { lineId, categoryId, itemName, status, imageUrl, notes } = req.body;

    try {
      const item = await prisma.lostItem.create({
        data: {
          lineId,
          categoryId,
          itemName,
          status, // 例: "STORED"
          imageUrl,
          notes,
        },
      });
      res.status(201).json(item);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: '登録に失敗しました' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
