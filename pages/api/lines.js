import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const lines = await prisma.line.findMany();
    res.status(200).json(lines);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
