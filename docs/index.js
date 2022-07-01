const petSchema = require('./schemas/pet');
const petPath = require('./paths/pets');

module.exports = {
  // swagger: '2.0',
  openapi: '3.0.0',
  info: {
    title: 'E-Commerce API DOCS',
    description: 'How to use E-Commerce API',
    version: '1.0.0'
  },
  host: 'localhost:3000',
  tags: [
    {
      name: "pet",
      description: "Everything about your Pets"
    },
    {
      name: "store",
      description: "Access to Petstore orders"
    },
    {
      name: "user",
      description: "Operations about user"
    }
  ],
  schemes: [ "https", "http" ],
  securityDefinitions: {
    petstore_auth: {
      type: "basic",
      authorizationUrl: "http://petstore.swagger.io/oauth/dialog",
      flow: "implicit",
      scopes: {
        'write:pets': "modify pets in your account",
        'read:pets': "read your pets"
      }
    }
  },
  paths: {
    ...petPath
  },
  // Jika menggunakan openapi: '3.0.0',
  components: {
    schemas: {
      ...petSchema,
      Store: {
        type: 'object',
        properties: {
          id: {
            type: 'interger',
            multipleOf: 10
          }
        }
      }
    }
  },
  // // jika menggunkan swagger: '2.0.0'
  // definitions: {
  //  ...petSchema
  // }
}