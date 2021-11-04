import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Link {
    category: String
    description: String
    id: String
    imageUrl: String
    index: Int
    title: String
    url: String
    userId: Int
  }

  type Query {
    links: [Link]!
  }
`;