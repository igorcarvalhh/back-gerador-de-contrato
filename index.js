const { PrismaClient } = require("@prisma/client");
const empresas = require("./data/empresas.js");

const prisma = new PrismaClient();

async function main() {
  //   await Promise.all(
  //     empresas.map(async (empresa) => {
  //       await prisma.empresa.create({
  //         data: empresa,
  //       });
  //     })
  //   );

  const allUsers = await prisma.empresa.findMany();

  console.log(allUsers);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
