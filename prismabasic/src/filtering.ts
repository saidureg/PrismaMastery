import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient();

const filtering = async () => {
  const andFilter = await prisma.post.findMany({
    where: {
      AND: [
        {
          title: {
            contains: "Second",
          },
        },
        {
          published: true,
        },
      ],
    },
  });

  const orFilter = await prisma.post.findMany({
    where: {
      OR: [
        {
          title: {
            contains: "First",
          },
        },
        {
          published: true,
        },
      ],
    },
  });

  const startWithFilter = await prisma.user.findMany({
    where: {
      username: {
        startsWith: "A",
      },
    },
  });

  const UserNameArr = ["user1", "user2", "user3", "Anna"];

  const inFilter = await prisma.user.findMany({
    where: {
      username: {
        in: UserNameArr,
      },
    },
  });

  const inDepthData = await prisma.user.findUnique({
    where: {
      id: 1,
    },
    include: {
      posts: {
        include: {
          postCategories: {
            include: {
              category: true,
            },
          },
        },
      },
    },
  });

  //   console.log(orFilter);
  console.dir(inDepthData, { depth: Infinity });
};

filtering();
