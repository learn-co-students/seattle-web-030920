# We need to build a Dog Liking website!

This website should allow people to like pictures of dogs, comment on dogs, and submit new dogs in both the front end and the back (persisting the data to the json file included). 

## Setup

To begin, first start your json server by running 
```json-server --watch db.json```

Once you can confirm that your server is hosting the data at http://localhost:3000/dogs, you should open up your index.html page in your browser. You can then begin to work with the index.js file to meet the deliverables. 


## Deliverables

1. Import all dogs in the database so that they load into the page. The structure for each dog should look like this once it is loaded into the HTML:
```html
    <div id='1'>
            <h2>Norma</h2>
            <p>Italian Greyhound</p>
            <img src='https://3.bp.blogspot.com/-uCd3eT8_AgA/XCZ-qnZIbXI/AAAAAAAATgQ/G8t6mwyZeIwb9OtUd2tEuasstpXsJgWlQCLcBGAs/s1600/IMG_3613l.JPG'></img>
            <p>Likes: 15</p>
            <p>Comments:</p>
            <ul>
                <li>God's perfect idiot</li>
                <li>Everyone loves her</li>
                <li>I'm literally going to steal this dog</li>
            </ul>
            <form>
                <label>Add Comment:</label>
                <input placeholder='text here' type='text' name='comment'></input>
                <input type='submit'></input>
            </form>
        </div>
```

2. Allow site users to submit a comment that is persisted to the database and, once a successful response is received from the server, updates the DOM without a refresh needed

3. Add functionality to the like button. You may handle this however you would like -- if you want to add a button for it, go for it! If you would prefer to have users click directly on the likes to increase them, that is acceptable. This should render *optimistically*, meaning that users can like the photo and see it on the DOM without waiting for a server response. 

4. Add functionality for a __super like__. For this, you should add a button that instantly adds 10 likes to that dog's database entry. You can choose if you want it to render optimistically or pessimistically. 

5. Add a form to the top of your html page which will allow users to add an entirely new dog to the database! For this particular deliverable, you are able to edit the HTML file directly *in combination with* adding event listeners and fetches into your javascript file handle the form submission. 

