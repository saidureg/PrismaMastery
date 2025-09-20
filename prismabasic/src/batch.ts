import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient();

const batchTransactions = async () => {
  const createUser = prisma.user.create({
    data: {
      username: "saidur2",
      email: "saidur2@gmail.com",
    },
  });

  const updateUser = prisma.user.update({
    where: { id: 5 },
    data: {
      age: 25,
    },
  });

  const [createData, updateData] = await prisma.$transaction([
    createUser,
    updateUser,
  ]);
  console.log(createData, updateData);
};

batchTransactions();
