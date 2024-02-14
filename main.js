const { loadFilesSync } = require("@graphql-tools/load-files");
const { mergeTypeDefs } = require("@graphql-tools/merge");
const { print } = require("graphql");
const fs = require("fs");
const path = require("path");

const typesArray = loadFilesSync(path.join(__dirname, "./schema"), {
  extensions: ["graphql"],
});
const mergedTypeDefs = mergeTypeDefs(typesArray);

// Merged type definitions should be a string, not an AST/DocumentNode.
const schemaString = print(mergedTypeDefs);

fs.writeFileSync("./combined-schema.graphql", schemaString);
