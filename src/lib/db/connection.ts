import { Admin, Battle, Challenge, ChallengeVideos, User, UserVideo } from "../../models";
import { Sequelize } from "sequelize-typescript";

class DBConnection {
  constructor() {
    const connection = new Sequelize({
      dialect: "postgres",
      host: process.env.DB_HOST,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      logging: false,
      models: [
        User,
        Challenge,
        ChallengeVideos,
        UserVideo,
        Battle,
        Admin,
      ],
    });

    (async () => {
      try {
        await connection.sync();
        console.log("db server started");
      } catch (error) {
        console.error(error);
        process.exit(1);
      }
    })();
  }
}


export default DBConnection;

