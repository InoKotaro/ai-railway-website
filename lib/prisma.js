import { PrismaClient } from '@prisma/client';

// PrismaClientのインスタンスを保持するグローバル変数を宣言
let prisma;

if (process.env.NODE_ENV === 'production') {
  // 本番環境では新しいインスタンスを作成
  prisma = new PrismaClient();
} else {
  // 開発環境ではグローバル変数にインスタンスがなければ作成
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;
