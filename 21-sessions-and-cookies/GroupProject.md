Module Two Final Project
========================

Congratulations, you're at the end of module two! Now the real fun begins, you get to make your own project!

For your final project, you'll be building a Rails Application that a user can interact with via a browser.

---

## Goals (Minimum Requirements)

You will be building a **Rails App** that uses an MVC structure and RESTful conventions. The goal of which is to demonstrate all of the skills that you've learned in module two:

- MVC & Web Requests
- Rails:
  - Routing
  - Controllers
  - ERB Views
- HTML Forms
- ActiveRecord Models & Relationships
- Problem Solving (via creating this app)

When you get your project proposal approved by us, let us know if any of the following **minimum requirements** are unnecessary or overly strict for your idea. We may make exceptions on a case-by-case basis but only if your app idea is sufficiently complex to showcase your understanding of the material.

Build a Rails app that:

1. Has at least five models. Of these, there must be at least one relationship between your models.

2. Has some methods in your models. These are to be used to better extract data from your tables. Think Flatiron BnB Lab

3. Doesn't use JavaScript. Stay focused on Rails for this project - we'll have plenty of time during the rest of the course to cover JS topics.

4. Accesses a Sqlite3 database using ActiveRecord.

5. Allows the user to perform CRUD operations using forms in the browser. Not all of your models must use all 4 crud operations, but you must have given the user the ability to use each of the 4 of them at some place in your app.

6. Uses MVC. Your work should be split up appropriately in the models, views, and controllers that you write.

---

## Project Overview (Timeline)

### Phase 1: Ideation & Planning

Do not begin coding until you have your pitch approved by an instructor. Do not overthink this. Do not spend your whole day whiteboarding out a schema. Feel free to talk to us if you want to brainstorm, or ask a fellow classmate to help.

#### Planning

Your **first goal** should be to decide on your models and determine the relationships between them. You **must have a minimum of five models consisting of at least _one_ relationship.** Here are some app ideas:

1. [Regifter](http://regifter.herokuapp.com/) - A gift trading app that lets users upload images and descriptions of unwanted gifts and propose trades with other users.
2. [Flatiron Postcard](http://flatironpostcard.herokuapp.com/) - An app that lets you create and send custom postcards to friends and family
3. [ROBYStuff - Rent or Buy Your Stuff](https://stark-falls-90133.herokuapp.com/listings)
4. [JOBuddy - Assistance with Job Applications](https://sheltered-woodland-79144.herokuapp.com/)
5. [Remixer - An App To Make Beats](https://remixer-v2.firebaseapp.com/)

It's not entirely obvious what the models look like just by looking at an app. You will have to navigate this nuance yourself as well. Once you have an idea, make sure you think critically about what the best schema is, and what trade-offs you will have to make for any particular decisions you make here.

Whiteboard out your ideas and think about what columns you'll want in the corresponding tables, including foreign keys.

* What does your schema look like?
* What do your relationships look like?
* Where are foreign keys stored in a many-to-many relationship? A one-to-many relationship?
* etc.

Your **second goal** should be to decide on your [user stories](https://en.wikipedia.org/wiki/User_story). You **must have a minimum of four user stories corresponding to the four CRUD actions** to help explain how a user will interact with your app. A user story should follow the general structure of `"As a <role>, I want <goal/desire> so that <benefit>."`.

For example, if we were creating an app to review restaurants on Yelp, we might write:

* As a user, I want to enter a location and be given a random nearby restaurant suggestion. (**Read**)
* As a user, I want to be able to write a review for a restaurant. (**Create**)
* As a user, I want to enter a restaurant and be given user reviews of that restaurant. (**Read**)
* As a user, I should be able to edit my restaurant review. (**Update**)
* As a user, I want to be able to delete one of my restaurant reviews. (**Delete**)
* Note that a user probably wouldn't be able to delete a restaurant record itself, unless they have that permission. Focus on **one user's stories** first, and expand your functionality that way.

#### Mockups

Take some time to think about what the visual elements of your app are, and how things are laid out on the screen. Having this figured out earlier will make development of your views especially much easier, and will also help you organize your work if you're working with another person.

*Think about this*: once you know what your views look like, you can start to formulate what your routes look like.

#### The Pitch

Projects need to be approved prior to launching into them, so take some time to brainstorm project options that will fulfill the requirements above. When you are ready to pitch, be sure to bring the following with you when you sit down with your instructor(s):

* schema
* user stories

As you pitch, think about how you would explain your [Minimum Viable Product (MVP)](https://en.wikipedia.org/wiki/Minimum_viable_product). Which user stories are needed to give you a solid base to build off of? Which user stories can be left to later (stretch goals)? Think [skateboard instead of wheel](https://blog.crisp.se/2016/01/25/henrikkniberg/making-sense-of-mvp).

![mvp](https://blog.crisp.se/wp-content/uploads/2016/01/mvp.png)

_**You do not need to have your MVP figured out before your pitch.**_ We will help you scope your project idea before approving it. However, this is a very useful skill to begin building for the future.

**Get your data modeling approved by an instructor before moving on to the next step.**

#### Setup

Use `rails new` to set up a new project. As you work, be sure to create a flow of:

* creating a branch to work on a new feature,
* committing and pushing to your branch,
* and merging it to `master` when finished.
* Then delete your old branch after successfully merging to `master`.
* Rinse and repeat.

**Note:** There is no `spec` directory. Your goal is to use [Behavior Driven Development (BDD)](https://en.wikipedia.org/wiki/Behavior-driven_development) to confirm that your code is doing what it should. This means instead of running `rspec` or `learn`, you should frequently be opening up the `rails console` or running your server with `rails server` and confirming that your app works the way you want it to.

---

### Phase 2: Scaffolding & Execution

Be careful of which specific generators you use. Remember if you do a `rails generate` or `resources` in your routes, you might actually be overengineering a solution, and sometimes can break RESTful conventions. If you want to remove something you've generated, you can use `rails destroy` commands. Also, generally it's a better practice especially at this stage to use `get "/route"` or `post "/route"`, etc. instead of simply writing `resources`. If we see `resources`, we're gonna ask you if it's necessary and why!

Remember, [Rails Guides](https://guides.rubyonrails.org/) is your best friend! Learning to navigate and and get comfortable with documentation is one of the things we are assessing you on, so make sure to incorporate it into your workflow. It'll become second nature in no time!

#### Seeding the Database

At this point, we could continue adding items to our database through the console, but let's be real. There are hundreds of thousands of restaurants, if not more. Entering them individually would take forever!! There must be a better way...

Enter the seeds file. What is a seed file? It's a file (`seeds.rb`), located in the `db` folder, where you create new instances of your classes and save them to your database. There are several ways this could happen. You could iterate over a csv file, for example, pulling out relevant data, and creating a new row in your database for every row in the file.

For now, let's just use the [`faker` gem](https://github.com/stympy/faker). Faker is a great library for generating fake data. For example:

```ruby
Faker::Name.name # returns a random name
Faker::Address.city # returns a random city
Faker::IDNumber.valid # returns a random valid Social Security Number
```

If you look in your `Gemfile`, you'll notice that it has already been included as a dependency for you and was installed when you ran `bundle install`. We can use `faker` to manually create seed data that is both random and makes sense for our domain models. For example:

```ruby
User.create(name: Faker::Name.name)
Restaurant.create(name: Faker::Company.name)
Review.create(user_id: User.all.sample.id, restaurant_id: Restaurant.all.sample.id, content: Faker::Hacker.say_something_smart)
```

This is great for randomly data and randomly associating it once, but that's still very limiting and manual. Now think about how you might automate creating _lots_ of objects using `faker` in your seed file _and_ set up the relationships between them. 🤔

**Your goal** is to make sure you have enough data to play around with once you get your app up and running. Five to ten instances of each model, as well as the corresponding relationships should be enough. You can always add more later.

Once your file is ready, run `rails tasks` to see which rake task you can use to seed your database.


![celebration](https://media.giphy.com/media/Is1O1TWV0LEJi/giphy.gif)

---

### Phase 3: Teamwork and General Tips

#### Working with a Partner

You are going to have to learn how to work on the same codebase with someone else. This is a great opportunity to practice what is an unwritten rule of being a Software Developer: that communication and teamwork is key.

As you write code, make sure you are branching in git and doing work on your own branches. Whenever you've finished a self-contained chunk of work, merge it back into your master branch. If your work conflicts with something your partner has done, this is totally ok and normal! Just resolve your conflicts and keep on coding (we can help you with this process too).

**Note:** When you eventually do the review with us, you may be asked to describe code your partner wrote. Make sure you can understand everything that is in your app, especially if it relates to the requirements.

![thumbs_up](https://media.giphy.com/media/111ebonMs90YLu/giphy.gif)

#### Debugging While Coding & Understanding Flow of Information

`byebug` is your friend. Use it often, especially if you want to better understand why your app doesn't function as expected, or if you want to simply see how information flows throughout your code.

Generally, the way information flows in rails is: browser request -> route -> controller action -> render (view or redirect) -> browser response. Try putting `byebug`s all over your app to see this in action. It will definitely help you when talking about your app later.

### Phase 4: Project Review

When you are ready, schedule a project review with one of your instructors. The format of the review will roughly look like this:

* 3 minutes - Requirements Review
* 5 minutes - App Overview
* 6 minutes - Deep Dive
* 12 minutes - Pair Programming
* 4 minutes - Feedback

Once you pass the review, you will have free reign to take your rails app to new heights!

_We said this before but_

**Note:** When you eventually do the review with us, you may be asked to describe code your partner wrote. Make sure you can understand everything that is in your app, especially if it relates to the requirements.

---

**All the phases after this are OPTIONAL!**

---

### Phase 5: Freedom

How can we improve on our app to have a motorcycle version and eventually a cadillac convertible version? Lots of ways!

#### The Real World

One potential improvement would be to pull in data from the real world. So let's go back to our seed file and start seeding with real data!

You can either get data from a CSV file, an API, or a website by scraping. Use the power of the internet to search for where you can get this data. Some helpful starter resources:

* [Easy Access APIs](https://github.com/learn-co-curriculum/easy-access-apis)
* [Public APIs](https://github.com/toddmotto/public-apis)

Now that you've found your data, how could you seed a database with rows from a CSV file or with JSON data from an API?

#### Styling
Styling is a whole wide world of opportunities that also come with their own frustrations. Think about your layout and decide how you want to structure things at a high level. Here's your chance to learn about:
* [CSS Grid](https://cssgridgarden.com/) and [Flexbox](https://flexboxfroggy.com/)
* [normalize](https://github.com/necolas/normalize.css/) and other ways to reset your css
* Frameworks, which are fun to play with but can be confusing to use. Use these sparingly, but if you understand them go for it. These are in order of more complex to more lightweight:
  * [Semantic UI](https://semantic-ui.com/)
  * [Foundation](https://foundation.zurb.com/)
  * [Bootstrap](https://getbootstrap.com/)
  * [Materialize](https://materializecss.com/)
  * [Bulma](https://bulma.io/)

If you want to play with these, start with Bulma. It has no JS so you'll likely be able to understand all of what you're using.


#### Stretch Goals

A basic CRUD app is good, but if you haven't already, we can do better. Let's tackle other user stories. Don't have any others? Here are some suggestions:

* Make your app perform differently depending on who's using it! Potentially introduce auth.
* Add MORE CRUD functionality to more models.
* More interesting types of queries! Maybe some that aggregate and analyze data on an analytics page so users can dig deeper.
---

![party](https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif)



## Groups

* Mera && Sofia
* Jon && Quinn
* Joe && Abe
* Rylan && Doug
