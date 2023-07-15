import { PrismaClient } from '@prisma/client';
// import institutions from '../data/institutions.json';

const prisma = new PrismaClient();

async function seedInstitutions() {
  await prisma.institution.deleteMany();

  // refactor to a loop -> https://github.com/prisma/prisma/discussions/2629
  await prisma.institution.create({
    data: {
      name: 'Prestigious Science University',
      address: 'P.O. Box 114, 6922 Volutpat. Ave',
      country: 'Jordan',
      region: 'Metropolitana de Santiago',
      id: 'EA8BBED7-4106-94AF-48DD-A1414E386AFB',
    },
  });

  await prisma.institution.create({
    data: {
      name: 'Top University of Mathematics',
      address: '380-7690 Sem Rd.',
      country: 'Heard Island and Mcdonald Islands',
      region: 'LAL',
      id: 'DEA4606B-4A21-D497-40E9-A5FB7589B536',
    },
  });

  await prisma.institution.create({
    data: {
      name: 'Technology Institute',
      address: 'P.O. Box 550, 4768 Consequat Street',
      country: 'Trinidad and Tobago',
      region: 'Sicilia',
      id: '8C8A804F-7A43-5840-4296-8A0117325921',
    },
  });
}

seedInstitutions()
  .catch((e) => {
    console.log('Error while seeding Institutions: ', e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });

// seedSubmissions()
//   .catch((e) => {
//     console.log('Error while seeding Submissions: ', e);
//     process.exit(1);
//   })
//   .finally(() => {
//     prisma.$disconnect();
//   });
