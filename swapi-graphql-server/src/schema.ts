import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    people: [Person]
    person(name: String!): [Person]
    peoplePaginate(page: Int): PeoplePaginateType
  }

  type Person {
    name: String!
    height: Int
    mass: String
    gender: String
    homeworld: String
    birth_year: String
    eye_color: String
    skin_color: String
    hair_color: String
  }

  type PeoplePaginateType {
    count: Int
    next: String
    previous: String
    results: [Person]
  }
`;
