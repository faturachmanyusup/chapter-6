module.exports = {
  '/pet': {
    post: {
      tags: ["pet"],
      summary: "Add a new pet to the store",
      description: "An endpoint to add pet.",
      operationId: "addPet",
      consumes: [
        "application/json"
      ],
      produces: [
        "application/json"
      ],
      parameters: [
        {
          in: "body",
          name: "name",
          description: "Name of new Pet",
          required: true,
          schema: {
            type: "string"
          }
        },
        {
          in: "body",
          name: "status",
          description: "Status of pet",
          required: true,
          schema: {
            type: "string",
            enum: [
              "available",
              "pending",
              "sold"
            ]
          }
        },
        {
          in: "body",
          name: "owner",
          description: "pet owner",
          required: true,
          schema: {
            type: "string",
          }
        },
      ],
      responses: {
        201: {
          description: "Success add new pet",
        },
        405: {
          description: "Invalid input"
        }
      },
      security: [
        {
          petstore_auth: [
            "write:pets",
            "read:pets"
          ]
        }
      ]
    },
    get: {
      tags: ['pet'],
      summary: 'get pets',
      operationId: "getPet",
      consumes: [
        "application/json"
      ],
      produces: [
        "application/json"
      ],
      responses: {
        200: {
          description: "Success get pet",
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Pet'
              }
            }
          },
        },
        404: {
          description: "Pet not found"
        }
      },
    }
  },
  "/pet/{petId}": {
    get: {
      tags: [ "pet" ],
      summary: "Find pet by ID",
      description: "Returns a single pet",
      operationId: "getPetById",
      produces: [
        "application/json"
      ],
      "parameters": [
        {
          name: "id",
          in: "path",
          required: true,
          type: "integer",
        }
      ],
      responses: {
        200: {
          description: "successful operation",
          content: {
            'application/json': {
              schema: {
                $ref: "#/components/schemas/Pet"
              }
            }
          }
        },
        400: {
          description: "Invalid ID supplied"
        },
        404: {
          description: "Pet not found"
        }
      }
    }
  }
}