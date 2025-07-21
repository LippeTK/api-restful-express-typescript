const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

export default {
  port: 3000,
  dbURI: `mongodb+srv://${dbUser}:${dbPassword}@cluster0.cycpdq2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
};
