import { Context, APIGatewayProxyResult, APIGatewayEvent } from "aws-lambda";
//import "dotenv/config";
import BattleCombination from "./combination";
//import connection from "./lib/db/connection";
import { User } from "./models";
import DBConnection from "./lib/db/connection";
//Connection Initialize
new DBConnection();
export const handler = async (
  event: any,
  context: any
): Promise<APIGatewayProxyResult> => {
  console.log(`Event: ${JSON.stringify(event, null, 2)}`);
  console.log(`Context: ${JSON.stringify(context, null, 2)}`);
  console.log("================test=====123===");


  const data1 = await User.findByPk();

  console.log("data=========1111111111=>", data1);
  //console.log("connection", connection);

  const battle = await BattleCombination.createBattleCombination();

  console.log("battle", battle);

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "hello world",
    }),
  };
};

//handler({}, {});
