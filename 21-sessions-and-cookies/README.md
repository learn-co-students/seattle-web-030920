# Discussion
1. What do mean when we say http is stateless.
  - the request has the response, and it is independent (means that it doesn't know about it's other requests)
2. What are the 3 hash-like structures that Rails provides us:
  - the http client is storing the session
  - params
  - flash: will store the value for one redirect -> expire after the next request
  - session:  is a cookie, except it's encrypted. For storing information typically use a session. 
  - cookie: persists, hash-like structurs, store data about the user in our browser. 
# Rails Quest
We have a pre-built trivia app which presents the user with questions in succession, and allows them to answer.
We can check in our controller whether the user answered correctly or not, but how can we get the server to 'remember' how many questions a user has answered  correctly for as long as they are on the site?

## Deliverables
* Add a feature which displays the number of questions a user has answered correctly
* Add a message which tells the user whether or not they got the last answer correct

## External Resources:
- [Rails Docs on Sessions](https://guides.rubyonrails.org/security.html#sessions)
- [Wiki Page on HTTP Headers](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)
- [Edit my Cookie](https://chrome.google.com/webstore/detail/editthiscookie/fngmhnnpilhplaeedifhccceomclgfbg?hl=en)


#Questions:
- 