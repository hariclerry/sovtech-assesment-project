export const resolvers = {
  Query: {
    people: (_: any, __: any, { dataSources }: any) =>
      dataSources.swapiApi.getAllPeople(),
    person: (_: any, { name }: any, { dataSources }: any) =>
      dataSources.swapiApi.getPerson(name),
    peoplePaginate: (_: any, args: any, { dataSources }: any) =>
      dataSources.swapiApi.getPaginatePeople(args.page),
  },
};
