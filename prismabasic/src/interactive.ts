import { PrismaClient, Role } from "./generated/prisma";

const prisma = new PrismaClient();

const interactiveTransaction = async () => {
  const result = await prisma.$transaction(async (tx) => {
    const getAllUser = await tx.user.findMany();

    const countUser = await tx.user.count();

    const updateUser = await tx.user.update({
      where: { id: 6 },
      data: { age: 27 },
    });

    return { getAllUser, countUser, updateUser };
  });

  console.log(result);
};

interactiveTransaction();
