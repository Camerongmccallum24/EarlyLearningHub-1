## Running the Project with Docker

This project provides Dockerfiles for both the client and server applications, and a Docker Compose configuration to orchestrate them. Below are the project-specific instructions and requirements for running the project using Docker.

### Project-Specific Requirements
- **Node.js Version:** Both client and server Dockerfiles use `node:22.13.1-slim`. This version is required for building and running the containers.
- **Build Tools:** The server Dockerfile installs `python3` and `build-essential` for native dependencies during build.

### Environment Variables
- No required environment variables are specified in the Dockerfiles or the provided compose file. If you need to use environment variables, uncomment the `env_file` lines in the `docker-compose.yml` and provide the appropriate `.env` files in `./client` and/or `./server`.

### Build and Run Instructions
1. **Ensure Docker and Docker Compose are installed on your system.**
2. **Build and start the services:**
   \```sh
   docker compose up --build
   \```
   This will build and start both the client and server containers.

### Special Configuration
- **Dockerfile Locations:**
  - The client and server Dockerfiles are referenced as `../clientDockerfile` and `../serverDockerfile` in the compose file. Make sure these Dockerfiles are present at the correct relative paths from the build contexts (`./client` and `./server`).
- **User Permissions:** Both containers run as non-root users for improved security.
- **Dependencies:** The server build installs additional build tools for native dependencies, which may increase build time.

### Exposed Ports
- **Client (`typescript-client`):**
  - Exposes port `4173` inside the container, mapped to `5173` on the host. Access the client at [http://localhost:5173](http://localhost:5173).
- **Server (`typescript-server`):**
  - Exposes port `5000` inside the container, mapped to `5000` on the host. Access the server at [http://localhost:5000](http://localhost:5000).

### Service Dependencies
- The client service depends on the server service and will wait for it to be available before starting.

---

For any additional configuration (such as environment variables or external services), update the `docker-compose.yml` and provide the necessary `.env` files as needed.
