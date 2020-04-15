# Forms And Basic Associations Rails Lab

## Objectives

1.  Practice defining associations
2.  Practice building forms in ERB when working with nested models

## A `Song` Library

In this lab, we're going to make a song library that helps record thoughts
about various `Song`s. Our data model looks like this:

- `Artist`
  - has a `name` attribute (`String`)
  - has many `Song`s
- `Song`
  - has a `title` attribute (`String`)
  - belongs to an `Artist`
  - belongs to a `Genre`
  - has many `Note`s
- `Genre`
  - has a `name` attribute (`String`)
  - has many `songs`
- `Note`
  - has `content` attribute (`String`)
  - belongs to a `Song`

## Instructions

1. The base models, controllers, and seed data have been provided for you.
2. You should create and migrate the database before starting to develop your
   solution.
3. Seeding the database provides many `Genre`s. You will add data about
   `Artist`s, `Note`s, and `Song`s during the development of this application.
   The `ArtistsController` and `SongsController` have been built out so that you
   can do this.

First, connect the models by using the `ActiveRecord` association commands.

Next, update the minimal `app/views/songs/new.html.erb`.

This view should have a form that provides:
  - A text input box that sets the `Song`'s title.
  - A text input box for the `Artist`.
  - A selection box for `Genre`. Users should be able to pick amongst existing genres only.
  - Several text input boxes to add notes to the song.

This is a challenging lab because we want you to use Rails' powerful nested
form builder view helpers. Here are some hints:

- You might need to reference information on passing an `Array` using `strong_params`
- It's easy to get confused between getting an `Artist` _instance_ from a
  `Song` and an `Artist`'s name. To help make your form work easier, solve the
  `spec/models/song_spec.rb` _first_. You can run a single spec by invoking it
  with e.g. `rspec spec/models/song_spec.rb`
- Make use of the references below!
- While we direct you to update `new.html.erb`, you're going to need to make
  changes in multiple models and the `SongsController`.

## References

* [`has_many` association reference](https://guides.rubyonrails.org/association_basics.html#has-many-association-reference)
* [`belongs_to` association reference](https://guides.rubyonrails.org/association_basics.html#belongs-to-association-reference)
* [`accepts_nested_attributes_for`](https://apidock.com/rails/v5.2.3/ActiveRecord/NestedAttributes/ClassMethods/accepts_nested_attributes_for)
* [Specifying which parameters are accepted in Rails Controllers](https://apidock.com/rails/ActionController/Parameters/permit)
* [`fields_for` form helper](https://api.rubyonrails.org/v5.2.3/classes/ActionView/Helpers/FormHelper.html#method-i-fields_for)

<p data-visibility='hidden'>View <a href='https://learn.co/lessons/forms-and-basic-associations-rails-lab' title='Forms And Basic Associations Rails Lab'>Forms And Basic Associations Rails Lab</a> on Learn.co and start learning to code for free.</p>

