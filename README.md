# NEATFLIX

Neatflix is a place to stream all the shows and movies you love and perhaps find new content for your veiwing pleasure.

check it out here https://neatflix415.herokuapp.com/#/

Neatflix uses ruby on rails backend, postgreSQL managment system for the database,
a React/Redux front end, with extensive styling to create a friendly easy to use interface/user experience.


## features

1. user auth
  
  one of Neatflixs most predominent features is its front/backend user authentication.
  on the backend we use the Bcrypt hashing function to create a password digest.
  a password digest is essentially the result of the password being passed through the hashing function.
  when passed through or digested the output is a seemingly random string of characters, expect for any given imput 
  the output will remain the same. it is very dificult to reverse engineer the process to create the string thus this 
  provides a high level of security for our users passwords.
  
  like so: ` self.password_digest = BCrypt::Password.create(password)`
  
  this helps keep our users passwords safe from the malicious hackers plaguing the modern day web.
  another feature of or backend security is that we never store a users password in our database this
  helps keep the user safe if our extensive security ever were to fail.
  
  on the frontend side of authentication we use a neat little trick called bootstraping to get info on
  wether or not someone is logged in from our backend. this works by setting current user on the window to a js object with the 
  same values as our current user from the backend. having access to this from the window lets us give it to our react objects 
  as a prop where needed.
 
