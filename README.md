# Optimise-taskboard-client
React frontend application for the taskboard application. Uses optimise-taskboard-server as backend.

### Environment variables
- TASKBOARD_SERVER_URL - Base URL of running optimise-taskboard-server (defaults to localhost:4000)

### Running the client on local machine
1. start the optimise-taskboard-server (check instructions on the project's repo)
2. cd into root folder of optimise-task-list-client
3. install npm dependencies `npm i`
4. run the application via `npm run start`
    - if optimise-taskboard-server is running on different port, execute `export TASKBOARD_SERVER_URL="http://localhost:<SPECIFY_PORT_HERE>" && npm run start` instead
