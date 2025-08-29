import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient();

const main = async () => {
  console.log("Starting Prisma Client...");
  //   const result = await prisma.post.create({
  //     data: {
  //       title: "My first post 2",
  //       content: "Hello, world! 2",
  //       published: true,
  //       authorName: "John Doe",
  //     },
  //   });
  //   console.log("Post created:", result);

  const posts = await prisma.post.findMany();
  console.log("All posts:", posts);
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
  });
