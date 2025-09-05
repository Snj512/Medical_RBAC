const { DataSource } = require("typeorm");

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "5120",
  database: "medical_db",
  synchronize: true,
  logging: true,
  entities: ["src/models/*.js"],
});

module.exports = AppDataSource;
