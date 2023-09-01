import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
// const prisma = new PrismaClient({ log: ["query"]})

async function main() {
  // const user = await prisma.user.create({ data: { name: "anouar" } })
  // const users = await prisma.user.findMany()
  // console.log(users);
  // await prisma.user.deleteMany()
  // const user = await prisma.user.create({
  // const users = await prisma.user.createMany({
  // const users = await prisma.user.createMany({
  //   data: [{
  //     name: "Sally",
  //     email: "sally1@sally.com",
  //     age: 26,
  //     // userPreference: {
  //     //   create: {
  //     //     emailUpdates: true
  //     //   }
  //     // }
  //   },
  //   {
  //     name: "Sally",
  //     email: "sally2@sally.com",
  //     age: 29,
  //   },
  //   {
  //     name: "Sally",
  //     email: "sally3@sally.com",
  //     age: 16,
  //   },
  //   {
  //     name: "Sally",
  //     email: "sally4@sally.com",
  //     age: 6,
  //   },
  //   ],
  //   // include: {
  //   //   userPreference: true
  //   // },
  //   // select: {
  //   //   name: true,
  //   //   // userPreference: true,
  //   //   userPreference: { select: { id: true } },
  //   // }
  // })
  // console.log("user: ", user);
  // console.log("users: ", users);

  // const user = await prisma.user.findUnique({
  //   where: {
  //     // email: "adil@adil.com",
  //     age_name: {
  //       age: 26,
  //       name: "Adil"
  //     }
  //   },
  // })

  // const user = await prisma.user.findFirst({
  const users = await prisma.user.findMany({
    where: {
      // name: "Sally",
      // name: { equals: "Sally" },
      // name: { not: "Sally" },
      // name: { in: ["Sally", "kyle"] },
      // name: { notIn: ["Sally", "kyle"] },
      // age: { lt: 20},
      // age: { lte: 20},
      // age: { gt: 20},
      // age: { gte: 20},
      // email: { contains: "@test.com"},
      // email: { endsWith: "com"},
      // email: { startsWith: "sall"},
      // AND: [
      // OR: [
      // NOT: [
      //   {
      //     // age: 26
      //     age: { lte: 20 }
      //   },
      //   {
      //     email: { startsWith: "sall" }
      //   },
      //   {
      //     name: "Sally"
      //   }],
      // userPreference: {
      //   emailUpdates: true,
      // },
      writtenPosts: {
        // every: { title: "test" },
        none: {},
        some: {}
      },
    },
    // distinct: ["name", "age"],
    // take: 2,
    // skip: 1,
    orderBy: {
      age: "asc"
    }
  })

  console.log(users);
  console.log(users.length);


}

main()
  .catch(e => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
  // .then(async () => {
  //   await prisma.$disconnect()
  // })
  // .catch(async (e) => {
  //   console.error(e);
  //   await prisma.$disconnect()
  //   process.exit(1)
  // })
