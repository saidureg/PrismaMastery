import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient({
  log: [
    {
      emit: "event",
      level: "query",
    },
  ],
});

prisma.$on("query", (e) => {
  console.log("Query executed:", e);
  //   console.log("Query: " + e.query);
});

const logging = async () => {
  const allPosts = await prisma.post.findMany();
  //   console.log(allPosts);
};

logging();
