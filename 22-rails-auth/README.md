## SWBATs
- Understand, theoretically how authentication works
- Understand theoretically how authorization work
- Implement Sign in vs sign up
- Review sessions, cookies
- Implement log in, and log out

## Authentication && Authorization
1. What is authentication?
  - security protocol
  - special attribute that prevents/grants some privilidges
  - you are who you say you are.
2. What is authorization?
  - access to a resource
  - are you allowed to do this???
  - maybe even are you allowed to see this??
3. Encryption
  - to use system to obscure information
  - be able to selectively -> encryt, decrypt, key to safe?
## User Stories
1. As a registered teacher, I should be able to sign up by providing my username.
  - Model
    - Class
      - `teachers`
    - Migration
      - `creates teachers, with name`
    - Association
      - no assocations
    - Seeds
      - no seeds.
  - Route
    - new, create 
  - Controller Action
  - new, create 
  - View
    - new
2. As a registered teacher, I should be able to log in by providing my username.
  - Model
  - Route
  - Controller Action
  - View
3. As an un-authenticated teacher, I should not be able to see a list of students and information about an individual student.

4. As an authenticated teacher I should be able see a list of students and information about an individual student plus create a new student.

5. If an un-authenticated teacher tries to see the new student form, they should be redirected to the login page.

6. I should be able to add a password to my site and validate teacher.

## Resources
##### Password Authentication Guidelines

- install gem `bcrpyt`
- you don't store passwords as plain text
  - add a password_digest column.
  - add `has_secure_password` to the model with the password.
- at signin use the bcrypt authenticate method to confirm that the password matches
- password hashing is one-way encryption (we never decrypt it)

- [Digest](https://ruby-doc.org/stdlib-2.2.1/libdoc/digest/rdoc/Digest.html)
- [BCrypt](https://github.com/codahale/bcrypt-ruby)
"README.md" 41L, 1628C
