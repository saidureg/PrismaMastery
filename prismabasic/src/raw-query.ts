import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient();

const rawQuery = async () => {
  const result = await prisma.$queryRaw`SELECT * FROM users`;

  console.log(result);
};

rawQuery();
