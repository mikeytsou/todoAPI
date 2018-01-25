# Todo REST API

A customizable REST API built for anyone who wants to create a quick backend Express/Node REST API.

The API is built with Express, MongoDB, and Mongoose.

## Getting Started

To test out the API, I recommend using [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en).

**1. Create a Todo**

POST request to `https://afternoon-dawn-27478.herokuapp.com/api/todos`

Body of request should have a key and value like this:

```javascript
  {
    "description": "Go to the gym"
  }
```

The response should look something like this:

```javascript
  {
      "_id": "5a6123e8d13c340014f7bf6f",
      "updatedAt": "2018-01-19T03:25:19.520Z",
      "createdAt": "2018-01-18T22:47:04.689Z",
      "description": "Go to the gym",
      "__v": 0,
      "completed": true
  }
```

**2. Get all Todos**

GET request to `https://afternoon-dawn-27478.herokuapp.com/api/todos`

The response should look something like this:

```javascript
  {
      "_id": "5a6123e8d13c340014f7bf6f",
      "updatedAt": "2018-01-19T03:25:19.520Z",
      "createdAt": "2018-01-18T22:47:04.689Z",
      "description": "Go to the gym",
      "__v": 0,
      "completed": true
  },
  {
      "_id": "5a61240fd13c340014f7bf71",
      "updatedAt": "2018-01-18T22:49:21.767Z",
      "createdAt": "2018-01-18T22:47:43.256Z",
      "description": "Walk the dog",
      "__v": 0,
      "completed": true
  }
```

**3. Get a specific Todo**

GET request to `https://afternoon-dawn-27478.herokuapp.com/api/todos/5a61240fd13c340014f7bf71`

The response should look something like this:

```javascript
  {
      "_id": "5a61240fd13c340014f7bf71",
      "updatedAt": "2018-01-18T22:49:21.767Z",
      "createdAt": "2018-01-18T22:47:43.256Z",
      "description": "Walk the dog",
      "__v": 0,
      "completed": true
  }
```

**4. Update a specific Todo**

PUT request to `https://afternoon-dawn-27478.herokuapp.com/api/todos/5a61240fd13c340014f7bf71`

Body of request should have a key and value like this:

```javascript
  {
    "description": "Walk the dog",
    "completed": false
  }
```

The response should look something like this:

```javascript
  {
      "_id": "5a61240fd13c340014f7bf71",
      "updatedAt": "2018-01-18T22:49:21.767Z",
      "createdAt": "2018-01-18T22:47:43.256Z",
      "description": "Walk the dog",
      "__v": 0,
      "completed": false
  }
```

**5. Delete a specific Todo**

DELETE request to `https://afternoon-dawn-27478.herokuapp.com/api/todos/5a61240fd13c340014f7bf71`

The response should look something like this:

```javascript
  {
    "message": "Todo deleted!"
  }
```

View the raw API data in JSON format by entering the url: https://afternoon-dawn-27478.herokuapp.com/api/todos

![](/public/images/github_todoAPI_JSON.png)
