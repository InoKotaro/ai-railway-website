// check-data.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('--- すべての路線のデータを取得 ---');
  const allLines = await prisma.line.findMany();
  console.dir(allLines, { depth: null });

  console.log('\n--- すべてのカテゴリのデータを取得 ---');
  const allCategories = await prisma.category.findMany();
  console.dir(allCategories, { depth: null });

  console.log('\n--- すべての遺失物のデータを取得（関連データも含む） ---');
  const allLostItems = await prisma.lostItem.findMany({
    include: {
      line: true,
      category: true,
    },
  });
  console.dir(allLostItems, { depth: null });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
