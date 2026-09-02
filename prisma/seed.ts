import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.member.createMany({
    data: [
      { name: "岩本照" },
      { name: "深澤辰哉" },
      { name: "渡辺翔太" },
      { name: "宮舘涼太" },
      { name: "佐久間大介" },
      { name: "目黒蓮" },
      { name: "向井康二" },
      { name: "ラウール" },
      { name: "阿部亮平" },
    ],
    skipDuplicates: true,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
