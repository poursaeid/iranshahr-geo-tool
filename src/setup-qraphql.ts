import { ApolloServer } from "@apollo/server"
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer' // Use appolo as express middleware
import { resolvers, typeDefs } from "./graphql"
import { HTTP_SERVER } from './types';

export const graphqlSetup = async (httpServer: HTTP_SERVER) => {
    // Set up Apollo Server
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });
    await server.start();
    return server
}