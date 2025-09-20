import { PrismaClient, Role } from "./generated/prisma";

const prisma = new PrismaClient();

const aggregates = async () => {
  const result = await prisma.user.aggregate({
    _avg: {
      age: true,
    },
    _sum: {
      age: true,
    },
    _min: {
      age: true,
    },
    _max: {
      age: true,
    },
    _count: {
      age: true,
    },
  });

  const countResult = await prisma.user.count();

  console.log(result);
  console.log(countResult);
};

aggregates();
