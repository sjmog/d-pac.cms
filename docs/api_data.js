define({ "api": [
  {
    "type": "get",
    "url": "/me/account",
    "title": "Retrieve",
    "version": "0.1.0",
    "group": "Account",
    "name": "RetrieveAccount",
    "description": "<p>Retrieves the account details for the current user.</p> ",
    "permission": [
      {
        "name": "Authenticated",
        "title": "Authenticated",
        "description": "<p>Requests are only allowed for authenticated users, i.e. logged in, and restricted to that user.</p> "
      }
    ],
    "filename": "routes/index.js",
    "groupTitle": "Account",
    "success": {
      "fields": {
        "Success Response: User": [
          {
            "group": "Success Response: User",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>User id</p> "
          },
          {
            "group": "Success Response: User",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>E-mail address</p> "
          },
          {
            "group": "Success Response: User",
            "type": "Object",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Success Response: User",
            "type": "String",
            "optional": false,
            "field": "name.first",
            "description": "<p>First name</p> "
          },
          {
            "group": "Success Response: User",
            "type": "String",
            "optional": false,
            "field": "name.last",
            "description": "<p>Last name</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response Example",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"53a984cca87b4b7d57a99858\",\n  \"email\": \"john.doe@example.com\",\n  \"name\": {\n    \"first\": \"John\",\n    \"last\": \"Doe\"\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "patch",
    "url": "/me/account",
    "title": "Update",
    "version": "0.1.0",
    "group": "Account",
    "name": "UpdateAccount",
    "description": "<p>Updates the account details for the current user.</p> ",
    "permission": [
      {
        "name": "Authenticated",
        "title": "Authenticated",
        "description": "<p>Requests are only allowed for authenticated users, i.e. logged in, and restricted to that user.</p> "
      }
    ],
    "filename": "routes/index.js",
    "groupTitle": "Account",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>E-mail address</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password_confirm",
            "description": "<p>Password confirmation</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success Response: User": [
          {
            "group": "Success Response: User",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>User id</p> "
          },
          {
            "group": "Success Response: User",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>E-mail address</p> "
          },
          {
            "group": "Success Response: User",
            "type": "Object",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Success Response: User",
            "type": "String",
            "optional": false,
            "field": "name.first",
            "description": "<p>First name</p> "
          },
          {
            "group": "Success Response: User",
            "type": "String",
            "optional": false,
            "field": "name.last",
            "description": "<p>Last name</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response Example",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"53a984cca87b4b7d57a99858\",\n  \"email\": \"john.doe@example.com\",\n  \"name\": {\n    \"first\": \"John\",\n    \"last\": \"Doe\"\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/me/assessments",
    "title": "List",
    "version": "0.1.0",
    "group": "Assessments",
    "name": "ListAssessments",
    "description": "<p>Retrieves a list of the assessments the current user is registered as an assessor for.</p> ",
    "permission": [
      {
        "name": "Authenticated",
        "title": "Authenticated",
        "description": "<p>Requests are only allowed for authenticated users, i.e. logged in, and restricted to that user.</p> "
      }
    ],
    "filename": "routes/index.js",
    "groupTitle": "Assessments",
    "success": {
      "fields": {
        "Success Response: Assessment[]": [
          {
            "group": "Success Response: Assessment[]",
            "type": "Object[]",
            "optional": false,
            "field": "assessments",
            "description": "<p>List of assessments</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response Example",
          "content": "HTTP/1.1 200 OK\n[\n   {\n      \"_id\": \"5458894f0138e02976448d26\",\n      \"title\": \"Schrijfopdracht 1: Kinderen\",\n      \"description\": \"<p>Lorem ipsum</p>\",\n      \"order\": 10,\n      \"state\": \"published\",\n      \"comparisonsNum\": 23,\n      \"phases\": [\n          \"5423f87677177065a0887b99\",\n          \"5423f87677177065a0887b9a\",\n          \"5423f87677177065a0887b9b\",\n          \"5423f87677177065a0887b9c\",\n          \"5423f87677177065a0887b9d\",\n          \"5423f87677177065a0887b9e\"\n      ]\n  }\n]",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/comparisons/:id",
    "title": "Retrieve",
    "version": "0.1.0",
    "group": "Comparisons",
    "name": "RetrieveComparison",
    "description": "<p>Retrieves the comparison with the given id.</p> ",
    "permission": [
      {
        "name": "Admin",
        "title": "Admin",
        "description": "<p>Requests are only allowed for administrative users, i.e. with special rights.</p> "
      }
    ],
    "filename": "routes/index.js",
    "groupTitle": "Comparisons",
    "success": {
      "fields": {
        "Success Response: Comparison": [
          {
            "group": "Success Response: Comparison",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Comparison id</p> "
          },
          {
            "group": "Success Response: Comparison",
            "type": "Number",
            "optional": false,
            "field": "_rid",
            "description": "<p>Human-friendly unique id</p> "
          },
          {
            "group": "Success Response: Comparison",
            "type": "String",
            "optional": false,
            "field": "assessor",
            "description": "<p>User id</p> "
          },
          {
            "group": "Success Response: Comparison",
            "type": "String",
            "optional": false,
            "field": "assessment",
            "description": "<p>Assessment id</p> "
          },
          {
            "group": "Success Response: Comparison",
            "type": "String",
            "optional": false,
            "field": "phase",
            "description": "<p>Phase id</p> "
          },
          {
            "group": "Success Response: Comparison",
            "type": "Boolean",
            "optional": false,
            "field": "completed",
            "description": "<p>Whether the comparison is completely finished, i.e. all phases have be iterated.</p> "
          },
          {
            "group": "Success Response: Comparison",
            "type": "String",
            "optional": false,
            "field": "selected",
            "description": "<p>Representation id</p> "
          },
          {
            "group": "Success Response: Comparison",
            "type": "String",
            "optional": false,
            "field": "comparativeFeedback",
            "description": "<p>Comparative feedback provided by the assessor.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response Example",
          "content": "HTTP/1.1 200 OK\n{\n    \"_id\": \"54635da80b7ce8bc0ba66382\",\n    \"_rid\": 36,\n    \"assessor\": \"545892d20138e02976448d39\",\n    \"assessment\": \"5458894f0138e02976448d26\",\n    \"phase\": \"5423f87677177065a0887b9e\",\n    \"completed\": true,\n    \"selected\": \"545b261a7b0463af66064169\",\n    \"comparativeFeedback\": \"Lorem ipsum\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "patch",
    "url": "/comparisons/:id",
    "title": "Update",
    "version": "0.1.0",
    "group": "Comparisons",
    "name": "UpdateComparison",
    "description": "<p>Updates the comparison with the given id.</p> ",
    "permission": [
      {
        "name": "Authenticated",
        "title": "Authenticated",
        "description": "<p>Requests are only allowed for authenticated users, i.e. logged in, and restricted to that user.</p> "
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phase",
            "description": "<p>Phase id</p> "
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "completed",
            "description": "<p>Whether the comparison is completed</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comparativeFeedback",
            "description": "<p>Comparative feedback provided by the assessor.</p> "
          }
        ]
      }
    },
    "filename": "routes/index.js",
    "groupTitle": "Comparisons",
    "success": {
      "fields": {
        "Success Response: Comparison": [
          {
            "group": "Success Response: Comparison",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Comparison id</p> "
          },
          {
            "group": "Success Response: Comparison",
            "type": "Number",
            "optional": false,
            "field": "_rid",
            "description": "<p>Human-friendly unique id</p> "
          },
          {
            "group": "Success Response: Comparison",
            "type": "String",
            "optional": false,
            "field": "assessor",
            "description": "<p>User id</p> "
          },
          {
            "group": "Success Response: Comparison",
            "type": "String",
            "optional": false,
            "field": "assessment",
            "description": "<p>Assessment id</p> "
          },
          {
            "group": "Success Response: Comparison",
            "type": "String",
            "optional": false,
            "field": "phase",
            "description": "<p>Phase id</p> "
          },
          {
            "group": "Success Response: Comparison",
            "type": "Boolean",
            "optional": false,
            "field": "completed",
            "description": "<p>Whether the comparison is completely finished, i.e. all phases have be iterated.</p> "
          },
          {
            "group": "Success Response: Comparison",
            "type": "String",
            "optional": false,
            "field": "selected",
            "description": "<p>Representation id</p> "
          },
          {
            "group": "Success Response: Comparison",
            "type": "String",
            "optional": false,
            "field": "comparativeFeedback",
            "description": "<p>Comparative feedback provided by the assessor.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response Example",
          "content": "HTTP/1.1 200 OK\n{\n    \"_id\": \"54635da80b7ce8bc0ba66382\",\n    \"_rid\": 36,\n    \"assessor\": \"545892d20138e02976448d39\",\n    \"assessment\": \"5458894f0138e02976448d26\",\n    \"phase\": \"5423f87677177065a0887b9e\",\n    \"completed\": true,\n    \"selected\": \"545b261a7b0463af66064169\",\n    \"comparativeFeedback\": \"Lorem ipsum\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "patch",
    "url": "/judgements/:id",
    "title": "Update",
    "version": "0.1.0",
    "group": "Judgements",
    "name": "UpdateJudgement",
    "description": "<p>Updates the judgement with the given id.</p> ",
    "permission": [
      {
        "name": "Authenticated",
        "title": "Authenticated",
        "description": "<p>Requests are only allowed for authenticated users, i.e. logged in, and restricted to that user.</p> "
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "notes",
            "description": "<p>Notes on the corresponding representation.</p> "
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "passed",
            "description": "<p>Whether the representation is &quot;passed&quot;.</p> "
          }
        ]
      }
    },
    "filename": "routes/index.js",
    "groupTitle": "Judgements",
    "success": {
      "fields": {
        "Success Response: Judgement": [
          {
            "group": "Success Response: Judgement",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Judgement id.</p> "
          },
          {
            "group": "Success Response: Judgement",
            "type": "String",
            "optional": false,
            "field": "assessor",
            "description": "<p>User id.</p> "
          },
          {
            "group": "Success Response: Judgement",
            "type": "String",
            "optional": false,
            "field": "assessment",
            "description": "<p>Assessment id.</p> "
          },
          {
            "group": "Success Response: Judgement",
            "type": "String",
            "optional": false,
            "field": "representation",
            "description": "<p>Representation id.</p> "
          },
          {
            "group": "Success Response: Judgement",
            "type": "String",
            "optional": false,
            "field": "comparison",
            "description": "<p>Comparison id.</p> "
          },
          {
            "group": "Success Response: Judgement",
            "type": "String",
            "optional": false,
            "field": "position",
            "description": "<p>&quot;left&quot; or &quot;right&quot;.</p> "
          },
          {
            "group": "Success Response: Judgement",
            "type": "String",
            "optional": false,
            "field": "notes",
            "description": "<p>Notes on the representation.</p> "
          },
          {
            "group": "Success Response: Judgement",
            "type": "Boolean",
            "optional": false,
            "field": "passed",
            "description": "<p>Whether the representation is &quot;passed&quot;.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response Example",
          "content": "HTTP/1.1 200 OK\n{\n    \"_id\": \"548ebd1294b99671f604def6\",\n    \"assessor\": \"543f8abd6f0a6bb721653954\",\n    \"assessment\": \"5458894f0138e02976448d26\",\n    \"comparison\": \"548ebd1294b99671f604def5\",\n    \"representation\": \"545b360ecd3c054e06cefd22\",\n    \"position\": \"left\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/me/mementos",
    "title": "Create",
    "version": "0.1.0",
    "group": "Mementos",
    "name": "CreateMementos",
    "description": "<p>Creates a memento for a specific assessment and the current user.</p> ",
    "permission": [
      {
        "name": "Authenticated",
        "title": "Authenticated",
        "description": "<p>Requests are only allowed for authenticated users, i.e. logged in, and restricted to that user.</p> "
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Assessment",
            "description": "<p>Assessment Identifier todo: return object</p> "
          }
        ]
      }
    },
    "filename": "routes/index.js",
    "groupTitle": "Mementos"
  },
  {
    "type": "get",
    "url": "/me/mementos",
    "title": "List",
    "version": "0.1.0",
    "group": "Mementos",
    "name": "ListMementos",
    "description": "<p>Retrieves a list of the active mementos for the current user.</p> ",
    "permission": [
      {
        "name": "Authenticated\ntodo: return object"
      }
    ],
    "filename": "routes/index.js",
    "groupTitle": "Mementos"
  },
  {
    "type": "get",
    "url": "/representations/:id",
    "title": "Retrieve",
    "version": "0.1.0",
    "group": "Representations",
    "name": "RetrieveRepresentation",
    "description": "<p>Retrieves a Representation.</p> ",
    "permission": [
      {
        "name": "Authenticated",
        "title": "Authenticated",
        "description": "<p>Requests are only allowed for authenticated users, i.e. logged in, and restricted to that user.</p> "
      }
    ],
    "filename": "routes/index.js",
    "groupTitle": "Representations",
    "success": {
      "fields": {
        "Success Response: Representation": [
          {
            "group": "Success Response: Representation",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Representation id.</p> "
          },
          {
            "group": "Success Response: Representation",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>URL of the representation file.</p> "
          },
          {
            "group": "Success Response: Representation",
            "type": "String",
            "optional": false,
            "field": "mimeType",
            "description": "<p>MIME type of the representation file.</p> "
          },
          {
            "group": "Success Response: Representation",
            "type": "String",
            "optional": false,
            "field": "ext",
            "description": "<p>Extension of the representation file.</p> "
          },
          {
            "group": "Success Response: Representation",
            "type": "String",
            "optional": false,
            "field": "assessee",
            "description": "<p>User id of the corresponding assessee.</p> "
          },
          {
            "group": "Success Response: Representation",
            "type": "String",
            "optional": false,
            "field": "assessment",
            "description": "<p>Assessment id.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response Example",
          "content": "{\n    \"_id\": \"545b360ecd3c054e06cefd22\",\n    \"url\": \"/representations/545b360ecd3c054e06cefd22.pdf\",\n    \"mimeType\": \"application/pdf\",\n    \"ext\": \".pdf\",\n    \"assessee\": \"5458be880138e02976448ef4\",\n    \"assessment\": \"5458894f0138e02976448d26\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/seqs",
    "title": "Create",
    "version": "0.1.0",
    "group": "SEQS",
    "name": "CreateSEQ",
    "description": "<p>Creates a SEQ.</p> ",
    "permission": [
      {
        "name": "Authenticated",
        "title": "Authenticated",
        "description": "<p>Requests are only allowed for authenticated users, i.e. logged in, and restricted to that user.</p> "
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comparison",
            "description": "<p>Comparison id.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phase",
            "description": "<p>Phase id.</p> "
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "value",
            "description": "<p>SEQ value.</p> "
          }
        ]
      }
    },
    "filename": "routes/index.js",
    "groupTitle": "SEQS",
    "success": {
      "fields": {
        "Success Response: SEQ": [
          {
            "group": "Success Response: SEQ",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>SEQ id.</p> "
          },
          {
            "group": "Success Response: SEQ",
            "type": "String",
            "optional": false,
            "field": "comparison",
            "description": "<p>Comparison id.</p> "
          },
          {
            "group": "Success Response: SEQ",
            "type": "String",
            "optional": false,
            "field": "phase",
            "description": "<p>Phase id.</p> "
          },
          {
            "group": "Success Response: SEQ",
            "type": "Number",
            "optional": false,
            "field": "value",
            "description": "<p>SEQ value in a range [1;7].</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response Example",
          "content": "HTTP/1.1 200 OK\n{\n    \"_id\": \"548ebd1294b99671f604def6\",\n    \"phase\": \"543f8abd6f0a6bb721653954\",\n    \"comparison\": \"548ebd1294b99671f604def5\",\n    \"value\": 5\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "patch",
    "url": "/seqs/:id",
    "title": "Update",
    "version": "0.1.0",
    "group": "SEQS",
    "name": "UpdateSEQ",
    "description": "<p>Updates the SEQ with the given id.</p> ",
    "permission": [
      {
        "name": "Authenticated",
        "title": "Authenticated",
        "description": "<p>Requests are only allowed for authenticated users, i.e. logged in, and restricted to that user.</p> "
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comparison",
            "description": "<p>Comparison id.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phase",
            "description": "<p>Phase id.</p> "
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "value",
            "description": "<p>SEQ value.</p> "
          }
        ]
      }
    },
    "filename": "routes/index.js",
    "groupTitle": "SEQS",
    "success": {
      "fields": {
        "Success Response: SEQ": [
          {
            "group": "Success Response: SEQ",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>SEQ id.</p> "
          },
          {
            "group": "Success Response: SEQ",
            "type": "String",
            "optional": false,
            "field": "comparison",
            "description": "<p>Comparison id.</p> "
          },
          {
            "group": "Success Response: SEQ",
            "type": "String",
            "optional": false,
            "field": "phase",
            "description": "<p>Phase id.</p> "
          },
          {
            "group": "Success Response: SEQ",
            "type": "Number",
            "optional": false,
            "field": "value",
            "description": "<p>SEQ value in a range [1;7].</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response Example",
          "content": "HTTP/1.1 200 OK\n{\n    \"_id\": \"548ebd1294b99671f604def6\",\n    \"phase\": \"543f8abd6f0a6bb721653954\",\n    \"comparison\": \"548ebd1294b99671f604def5\",\n    \"value\": 5\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/me/session",
    "title": "Destroy",
    "version": "0.1.0",
    "group": "Session",
    "name": "DestroySession",
    "description": "<p>Destroys the session for the logged in user, i.e. signout.</p> ",
    "permission": [
      {
        "name": "Authenticated",
        "title": "Authenticated",
        "description": "<p>Requests are only allowed for authenticated users, i.e. logged in, and restricted to that user.</p> "
      }
    ],
    "filename": "routes/index.js",
    "groupTitle": "Session",
    "success": {
      "fields": {
        "Success Response: (No Content)": [
          {
            "group": "Success Response: (No Content)",
            "optional": false,
            "field": "N/A",
            "description": "<p>Response is empty</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response Example: No Content",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/me/session",
    "title": "Create",
    "version": "0.1.0",
    "group": "Session",
    "name": "createSession",
    "description": "<p>(Re-)creates a session, i.e. signin.</p> ",
    "permission": [
      {
        "name": "Anonymous",
        "title": "Anonymous",
        "description": "<p>Requests are allowed for all users.</p> "
      }
    ],
    "filename": "routes/index.js",
    "groupTitle": "Session",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>E-mail address</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password_confirm",
            "description": "<p>Password confirmation</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success Response: User": [
          {
            "group": "Success Response: User",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>User id</p> "
          },
          {
            "group": "Success Response: User",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>E-mail address</p> "
          },
          {
            "group": "Success Response: User",
            "type": "Object",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Success Response: User",
            "type": "String",
            "optional": false,
            "field": "name.first",
            "description": "<p>First name</p> "
          },
          {
            "group": "Success Response: User",
            "type": "String",
            "optional": false,
            "field": "name.last",
            "description": "<p>Last name</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response Example",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"53a984cca87b4b7d57a99858\",\n  \"email\": \"john.doe@example.com\",\n  \"name\": {\n    \"first\": \"John\",\n    \"last\": \"Doe\"\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/me/session",
    "title": "Retrieve",
    "version": "0.1.0",
    "group": "Session",
    "name": "retrieveSession",
    "description": "<p>Retrieve session for logged in user</p> ",
    "permission": [
      {
        "name": "Authenticated",
        "title": "Authenticated",
        "description": "<p>Requests are only allowed for authenticated users, i.e. logged in, and restricted to that user.</p> "
      }
    ],
    "filename": "routes/index.js",
    "groupTitle": "Session",
    "success": {
      "fields": {
        "Success Response: User": [
          {
            "group": "Success Response: User",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>User id</p> "
          },
          {
            "group": "Success Response: User",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>E-mail address</p> "
          },
          {
            "group": "Success Response: User",
            "type": "Object",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Success Response: User",
            "type": "String",
            "optional": false,
            "field": "name.first",
            "description": "<p>First name</p> "
          },
          {
            "group": "Success Response: User",
            "type": "String",
            "optional": false,
            "field": "name.last",
            "description": "<p>Last name</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response Example",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"53a984cca87b4b7d57a99858\",\n  \"email\": \"john.doe@example.com\",\n  \"name\": {\n    \"first\": \"John\",\n    \"last\": \"Doe\"\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/timelogs",
    "title": "Create",
    "version": "0.1.0",
    "group": "Timelogs",
    "name": "CreateTimelog",
    "description": "<p>Creates a timelog.</p> ",
    "permission": [
      {
        "name": "Authenticated",
        "title": "Authenticated",
        "description": "<p>Requests are only allowed for authenticated users, i.e. logged in, and restricted to that user.</p> "
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comparison",
            "description": "<p>Comparison id.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phase",
            "description": "<p>Phase id.</p> "
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "begin",
            "description": "<p>Begin timestamp of logging.</p> "
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "end",
            "description": "<p>End timestamp of logging.</p> "
          }
        ]
      }
    },
    "filename": "routes/index.js",
    "groupTitle": "Timelogs",
    "success": {
      "fields": {
        "Success Response: Timelog": [
          {
            "group": "Success Response: Timelog",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Timelog id.</p> "
          },
          {
            "group": "Success Response: Timelog",
            "type": "String",
            "optional": false,
            "field": "comparison",
            "description": "<p>Comparison id.</p> "
          },
          {
            "group": "Success Response: Timelog",
            "type": "String",
            "optional": false,
            "field": "phase",
            "description": "<p>Phase id.</p> "
          },
          {
            "group": "Success Response: Timelog",
            "type": "Date",
            "optional": false,
            "field": "begin",
            "description": "<p>Begin timestamp of logging.</p> "
          },
          {
            "group": "Success Response: Timelog",
            "type": "Date",
            "optional": false,
            "field": "end",
            "description": "<p>End timestamp of logging.</p> "
          },
          {
            "group": "Success Response: Timelog",
            "type": "Number",
            "optional": false,
            "field": "duration",
            "description": "<p>Time difference between <code>begin</code> and <code>end</code> in seconds.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response Example",
          "content": "HTTP/1.1 200 OK\n{\n    \"_id\": \"54635da90b7ce8bc0ba66385\",\n    \"duration\": 224,\n    \"phase\": \"5423f87677177065a0887b99\",\n    \"comparison\": \"54635da80b7ce8bc0ba66382\",\n    \"begin\": \"2014-11-12T13:16:25.000Z\",\n    \"end\": \"2014-11-12T13:20:09.000Z\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "patch",
    "url": "/timelogs/:id",
    "title": "Update",
    "version": "0.1.0",
    "group": "Timelogs",
    "name": "UpdateTimelog",
    "description": "<p>Updates a timelog.</p> ",
    "permission": [
      {
        "name": "Authenticated",
        "title": "Authenticated",
        "description": "<p>Requests are only allowed for authenticated users, i.e. logged in, and restricted to that user.</p> "
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "end",
            "description": "<p>End timestamp of logging.</p> "
          }
        ]
      }
    },
    "filename": "routes/index.js",
    "groupTitle": "Timelogs",
    "success": {
      "fields": {
        "Success Response: Timelog": [
          {
            "group": "Success Response: Timelog",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Timelog id.</p> "
          },
          {
            "group": "Success Response: Timelog",
            "type": "String",
            "optional": false,
            "field": "comparison",
            "description": "<p>Comparison id.</p> "
          },
          {
            "group": "Success Response: Timelog",
            "type": "String",
            "optional": false,
            "field": "phase",
            "description": "<p>Phase id.</p> "
          },
          {
            "group": "Success Response: Timelog",
            "type": "Date",
            "optional": false,
            "field": "begin",
            "description": "<p>Begin timestamp of logging.</p> "
          },
          {
            "group": "Success Response: Timelog",
            "type": "Date",
            "optional": false,
            "field": "end",
            "description": "<p>End timestamp of logging.</p> "
          },
          {
            "group": "Success Response: Timelog",
            "type": "Number",
            "optional": false,
            "field": "duration",
            "description": "<p>Time difference between <code>begin</code> and <code>end</code> in seconds.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response Example",
          "content": "HTTP/1.1 200 OK\n{\n    \"_id\": \"54635da90b7ce8bc0ba66385\",\n    \"duration\": 224,\n    \"phase\": \"5423f87677177065a0887b99\",\n    \"comparison\": \"54635da80b7ce8bc0ba66382\",\n    \"begin\": \"2014-11-12T13:16:25.000Z\",\n    \"end\": \"2014-11-12T13:20:09.000Z\"\n}",
          "type": "json"
        }
      ]
    }
  }
] });