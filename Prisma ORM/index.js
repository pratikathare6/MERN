import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function inseruser(username, password, firstname, lastname) {
    const res = await prisma.user2.create({
        data: {
            email: username,
            password,
            firstname,
            lastname
        },
        select: {
            id: true
        }
    });
    console.log(res);
}
inseruser('pratik', '1231a', 'pratik', 'athare');
//# sourceMappingURL=index.js.map