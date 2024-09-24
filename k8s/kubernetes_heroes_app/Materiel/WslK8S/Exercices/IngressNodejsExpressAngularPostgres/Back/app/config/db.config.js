module.exports = {
  HOST: process.env.DB_HOST, //"postgres-svc.postgres.svc.cluster.local",
  USER: "ps_user",
  PASSWORD: "test1234=",
  DB: "testdb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
