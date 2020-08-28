# NEATFLIX

Neatflix is a place to stream all the shows and movies you love and perhaps find new content for your veiwing pleasure.

check it out here https://neatflix415.herokuapp.com/#/

Neatflix uses ruby on rails backend, postgreSQL managment system for the database,
a React/Redux front end, with extensive styling to create a friendly easy to use interface/user experience.


## features

1. user auth
  
  one of Neatflixs most predominent features is its front/backend user authentication.
  on the backend we use the Bcrypt hashing function to create a password digest
  
  like so: ` self.password_digest = BCrypt::Password.create(password)`
  
  this helps keep our users passwords safe from the malicious hackers plaguing the modern day web.
  another feature of or backend security is that we never store a users password in our database this
  helps keep the user safe if our extensive security ever were to fail.
  
