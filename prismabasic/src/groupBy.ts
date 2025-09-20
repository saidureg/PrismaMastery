import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient();

const groupBy = async () => {
  const result = await prisma.post.groupBy({
    by: ["published", "authorId"],
    _count: {
      title: true,
    },

    having: {
      authorId: {
        _sum: {
          gt: 2,
        },
      },
    },
  });

  console.log(result);
};
groupBy();
