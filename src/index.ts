import { mergeSchemas } from "@graphql-tools/schema";

export const main = () => {
  mergeSchemas({ typeDefs: "type Query { hello: String }" });
  console.log("Hello, World!");
};

main();
