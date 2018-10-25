// This file connects to our remote prisma DB and gives us the ability to query it with JS

const { Prisma } = require('prisma-binding');

const db = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
  debug: false // will console log all query and mutations
});

module.exports = db;
