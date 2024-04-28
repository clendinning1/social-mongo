
3. where are these being stored? can i delete them in mongodb compass?
4. getter method to format the timestamp on query

6. fix virtuals
7. fix delete route
8. fix put route



# build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list
- You’ll use Express.js for routing
- a MongoDB database
- and the Mongoose ODM.
- you may also optionally use a JavaScript date library of your choice or the native JavaScript `Date` object to format timestamps.
- no seed data is provided, so you’ll need to create your own data using Insomnia after you’ve created your API.

## Acceptance Criteria
- WHEN I enter the command to invoke the application THEN my server is started and the Mongoose models are synced to the MongoDB database
- WHEN I open API GET routes in Insomnia for users and thoughts THEN the data for each of these routes is displayed in a formatted JSON
- WHEN I test API POST, PUT, and DELETE routes in Insomnia THEN I am able to successfully create, update, and delete users and thoughts in my database
- WHEN I test API POST and DELETE routes in Insomnia THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s 










### API Routes

**`/api/users`**

* `GET` a single user by its `_id` and populated thought and friend data

* `POST` a new user:

```json
// example data
{
  "username": "lernantino",
  "email": "lernantino@gmail.com"
}
```

* `PUT` to update a user by its `_id`

---

**`/api/users/:userId/friends/:friendId`**

* `POST` to add a new friend to a user's friend list

* `DELETE` to remove a friend from a user's friend list

---

**`/api/thoughts`**

* `GET` to get all thoughts

* `GET` to get a single thought by its `_id`

* `POST` to create a new thought (don't forget to push the created thought's `_id` to the associated user's `thoughts` array field)

```json
// example data
{
  "thoughtText": "Here's a cool thought...",
  "username": "lernantino",
  "userId": "5edff358a0fcb779aa7b118b"
}
```

* `PUT` to update a thought by its `_id`

* `DELETE` to remove a thought by its `_id`

---

**`/api/thoughts/:thoughtId/reactions`**

* `POST` to create a reaction stored in a single thought's `reactions` array field

* `DELETE` to pull and remove a reaction by the reaction's `reactionId` value

## Grading Requirements
- walkthrough in readme
- turn in walkthrough and repo link

## walkthrough shows
"The walkthrough video must show all of the technical acceptance criteria being met." ???
- mongoose connecting to mongodb
- user and thought models
- schema settings for user and thought models
- Includes Reactions as the `reaction` field's subdocument schema in the Thought model
- Uses functionality to format queried timestamps properly.

  * The walkthrough video must demonstrate how to start the application’s server.

  * The walkthrough video must demonstrate GET routes for all users and all thoughts being tested in Insomnia.

  * The walkthrough video must demonstrate GET routes for a single user and a single thought being tested in Insomnia.

  * The walkthrough video must demonstrate POST, PUT, and DELETE routes for users and thoughts being tested in Insomnia.

  * Walkthrough video must demonstrate POST and DELETE routes for a user’s friend list being tested in Insomnia.

  * Walkthrough video must demonstrate POST and DELETE routes for reactions to thoughts being tested in Insomnia.
