const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await prisma.chessBoard.deleteMany();
  await prisma.chessBoard.createMany({
    data: [
      {
        title: "Kichik o'yin",
        description: "2ta uchuns",
        imageUrl:
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
        userId: "user_1",
        material: "Suyak",
        razmer: "small",
      },
      {
        title: "Kichik o'yin",
        description: "2ta uchuns",
        imageUrl:
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
        userId: "user_2",
        material: "Tosh",
        razmer: "o'rtacha",
      },
      {
        title: "Kichik o'yin",
        description: "2ta uchuns",
        imageUrl:
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
        userId: "user_3",
        material: "Taxta",
        razmer: "Katta",
      },
      {
        title: "Kichik o'yin",
        description: "2ta uchuns",
        imageUrl:
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
        userId: "user_4",
        material: "plastik",
        razmer: "mini",
      },
    ],
  });

  console.log("Seed data muvaffaqiyatli qo'shildi");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
