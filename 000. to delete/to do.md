
4. getter method to format the timestamp on query

8. fix user put route
        9. thought put route

12.



# yeah
- you may also optionally use a JavaScript date library of your choice or the native JavaScript `Date` object to format timestamps.



### API Routes

**`/api/thoughts/:thoughtId/reactions`**

* `POST` to create a reaction stored in a single thought's `reactions` array field

* `DELETE` to pull and remove a reaction by the reaction's `reactionId` value
















## Acceptance Criteria
- WHEN I enter the command to invoke the application THEN my server is started and the Mongoose models are synced to the MongoDB database
- WHEN I open API GET routes in Insomnia for users and thoughts THEN the data for each of these routes is displayed in a formatted JSON
- WHEN I test API POST, PUT, and DELETE routes in Insomnia THEN I am able to successfully create, update, and delete users and thoughts in my database
- WHEN I test API POST and DELETE routes in Insomnia THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s 



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
