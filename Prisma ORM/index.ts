import { PrismaClient } from "@prisma/client"; // default ESM-friendly import
import dotenv from "dotenv";
dotenv.config();

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user2.create({
    data: {
      email: "abc@mail.com",
      firstname: "abc",
      lastname: "bcd",
      password: "smallcase123",
    },
  });

  console.log(user);
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
