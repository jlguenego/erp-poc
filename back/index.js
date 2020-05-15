const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize("mydb", "postgres", "admin", {
  host: "localhost",
  port: 5432,
  dialect: "postgres",
});

class User extends Model {}
User.init(
  {
    username: DataTypes.STRING,
    birthday: DataTypes.DATE,
  },
  { sequelize, modelName: "user" }
);

async function main() {
  await sequelize.sync({ force: false });

  const jane = await User.create({
    username: "janedoe",
    birthday: new Date(1980, 6, 20),
  });

  console.log(jane.toJSON());

  await sequelize.close();
  console.log("closed.");
}

main();
