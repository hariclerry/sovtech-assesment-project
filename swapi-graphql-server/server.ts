import { ApolloServer } from "apollo-server-express";
import express from "express";
import cors from "cors";

// import resolvers and schema definition
import { resolvers } from "./src/resolvers";
import { typeDefs } from "./src/schema";
import { SwapiApi } from "./src/data-sources/swapiApi";

const apolloServer = new ApolloServer({
  dataSources: () => ({
    swapiApi: new SwapiApi(),
  }),
  typeDefs,
  resolvers,
});

//express server
const app = express();
app.use(cors());

apolloServer.start().then((res) => {
  apolloServer.applyMiddleware({ app, path: "/graphql" });
  app.listen(8000, () =>
    console.log(`Server is running at http://localhost:8000`)
  );
});
