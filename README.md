# SDI Blended Capstone

## Group B

# Please ensure that you follow along with the .envExample in creating your .env file with the appropriate connection to your local DB. The .env is conveniently inside the .gitignore file already.

## Start the databse

1. Create an .env in the root folder with the following variables

```environment
DATABASEUSER=postgres
DATABASEPASSWORD=docker
DATABASENAME=capstone

CONNECTION_STRING=$(postgres://${DATABASEUSER}:${DATABASEPASSWORD}@localhost/${DATABASENAME})
```

1. Change the database variable to match the user, password and database that you want to use. default are postgres, docker, and capstone.
1. Run docker compose up -D
