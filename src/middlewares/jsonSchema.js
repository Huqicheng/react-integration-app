export default {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
      "comments": {
        "type": "array",
        "items": [
          {
            "type": "string"
          },
          {
            "type": "string"
          }
        ]
      },
      "auto": {
        "type": "boolean"
      }
    },
    "required": [
      "comments",
      "auto"
    ]
  };