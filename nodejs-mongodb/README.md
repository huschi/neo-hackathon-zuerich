Ru Application instructions:

- you need nodejs & npm

- in your terminal:
    - run 'npm install -g nodemon' using your terminal
    - run 'npm install' in the project directory (nodejs-mongodb)
    - run 'nodemon ./app.js' in the project directory (nodejs-mongodb)
    - ther server is now running under 'localhost:8080'
- requests:
    - assets
        - getAll:       (get):          localhost:8080/assets
        - create:       (post):         localhost:8080/assets/create
        - getSingle:    (get):          localhost:8080/assets/<ASSET_ID>
        - update:       (put):          localhost:8080/assets/<ASSET_ID>/update
        - delete:       (delete):       localhost:8080/assets/<ASSET_ID>/delete
    - users
        - getAll:        (get):         localhost:8080/users
        - register:      (post):        localhost:8080/users/register
        - getLSPs:       (post):        localhost:8080/users/lsps
        - getDrivers:    (post):        localhost:8080/users/drivers
        - getReceivers:  (post):        localhost:8080/users/recievers
        - login:         (post):        localhost:8080/login
        - getUserById:   (get):         localhost:8080/users/<USER_ID>
        - update:        (put):         localhost:8080/users/<USER_ID>/update
        - delete:        (delete):      localhost:8080/users/<USER_ID>/delete
        - logout:        (get):         localhost:8080/logout