import prismaInstance from './PrismaInstance';

const ConnectDb = async () => {
  try {
    await prismaInstance.$connect();
    console.log('Connected to DB Successfully.');
  } catch (error) {
    console.log('Something went wrong. Failed to Connect to DB.');
  } finally {
    await prismaInstance.$disconnect();
    console.log('Connection is released.');
  }
};

export default ConnectDb;
