This is a very simple React frontend to demonstrate using the circular-platform headless CMS. For more information and credentials for testing purposes, contact joel.himanen@aalto.fi

To run the whole application locally with Docker Compose, follow these steps:

1) Copy this repo (frontend) and the backend repo (https://github.com/jHimanen/circular-platform) into your local file system as their own respective directories. They have to be located in the same directory, though.

2) Create an .env file into the frontend root.

3) Ask the author for the contents of .env and copy them into that file.

4) Run docker-compose up in the frontend root, and the application should start (backend on port 1337 and fronted on 3000).