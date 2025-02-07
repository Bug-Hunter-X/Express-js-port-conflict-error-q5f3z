# Express.js Port Conflict
This repository demonstrates a common error in Express.js applications: port conflicts.  When an Express.js server attempts to bind to a port already in use by another application, it will fail to start.

## Bug
The `bug.js` file contains a simple Express.js server that listens on port 3000.  If another application (e.g., another Node.js server, a different web server) is already using port 3000, the Express.js server will fail to start and an error will be thrown.

## Solution
The `bugSolution.js` file demonstrates a solution for handling port conflicts. The code attempts to start the server on the specified port and handles the `EADDRINUSE` error, which typically occurs when a port is already in use. It retries with a slightly different port. This is a simple solution, but in a production environment you may want more advanced handling of such errors.