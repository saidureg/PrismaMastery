import { PrismaClient, Role } from "./generated/prisma";

const prisma = new PrismaClient();

const main = async () => {
  console.log("Starting Prisma Client...");
  //   const result = await prisma.user.create({
  //     data: {
  //       username: "Anna",
  //       email: "anna@example.com",
  //       role: Role.USER, // Assuming Role is an enum with USER as one of its values
  //     },
  //   });

  //   const result = await prisma.profile.create({
  //     data: {
  //       bio: "Hello, I'm Anna!",
  //       userId: 1, // Replace with the actual user ID
  //     },
  //   });

  //   const result = await prisma.category.create({
  //     data: {
  //       name: "Technology",
  //     },
  //   });

  //   const result = await prisma.post.create({
  //     data: {
  //       title: "My Second Post",
  //       content: "This is the content of my second post.",
  //       published: true,
  //       authorId: 3, // Replace with the actual author ID
  //       postCategories: {
  //         create: [
  //           { category: { connect: { id: 1 } } }, // Replace with actual category ID
  //           { category: { connect: { id: 2 } } },
  //         ],
  //       },
  //     },
  //   });
  const result = await prisma.post.create({
    data: {
      title: "My Fourth Post",
      content: "This is the content of my fourth post.",
      published: true,
      authorId: 3, // Replace with the actual author ID
      postCategories: {
        create: [{ categoryId: 1 }],
      },
    },
    include: {
      author: true,
      postCategories: {
        include: {
          category: true,
        },
      },
    },
  });
  console.log("Post created:", result);
};

main();
