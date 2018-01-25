# Todo REST API

A customizable REST API built for anyone who wants to create a quick backend Express/Node REST API.

The API is built with Express, MongoDB, and Mongoose.

## Getting Started

View the raw API data in JSON format by entering the url: https://afternoon-dawn-27478.herokuapp.com/api/todos

![](/public/images/github_todoAPI_JSON.png)

To test out the API, I recommend using [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en).

###1. Get all Todos

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
  }
```
