module.exports = {
  Pet: {
    type: 'object',
    required: [
      "name",
      "photoUrls"
    ],
    properties: {
      id: {
        type: "integer",
      },
      name: {
        type: "string",
      },
      photoUrls: {
        type: "array",
        items: {
          type: "string"
        }
      },
      status: {
        type: "string",
        enum: [
          "available",
          "pending",
          "sold"
        ]
      }
    }
  }
}