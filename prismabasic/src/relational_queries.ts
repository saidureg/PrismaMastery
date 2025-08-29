import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient();

const main = async () => {
  // Fluent API
  //   const result = await prisma.user
  //     .findUnique({
  //       where: { id: 1 },
  //     })
  //     .posts();

  // Relational Query
  const result = await prisma.user.findMany({
    include: {
      posts: {
        where: {
          published: true,
        },
      },
    },
  });

  console.dir(result, { depth: Infinity });
};

main();
