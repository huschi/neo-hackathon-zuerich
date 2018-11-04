Ru Application instructions:

- you need nodejs & npm

- in your terminal:
    - run 'npm install -g nodemon' using your terminal
    - run 'npm install' in the project directory (nodejs-mongodb)
    - run 'nodemon ./app.js' in the project directory (nodejs-mongodb)
    - ther server is now running under 'localhost:8080'
- requests:
    - containers
        - getAll:       localhost:8080/containers
        - create:       localhost:8080/containers/create
        - getSingle:    localhost:8080/containers/<CONTAINER_ID>
        - update:       localhost:8080/containers/<CONTAINER_ID>/update
        - delete:       localhost:8080/containers/<CONTAINER_ID>/delete
    - users
        - getAll:       localhost:8080/users
        - create:       localhost:8080/users/create
        - getSingle:    localhost:8080/users/<USER_ID>
        - update:       localhost:8080/users/<USER_ID>/update
        - delete:       localhost:8080/users/<USER_ID>/delete