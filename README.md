# README

This is the [Express](https://expressjs.com)-based server that the ARIA backend runs on, supported in large part by [Render](https://render.com).

The app in this repo is deployed [here](https://ariabackend.onrender.com).

## How this works

The main entrypoint is `app.ts`. Upon launch of the server, it does 3 main things:

- Sets up middleware i.e. CORS for the frontend origin deployed at [https://aria-delta.vercel.app](https://aria-delta.vercel.app)
- Sets up the routes that the server is reachable at for http requests
- Keeps the server listening at either port 3001 (by default) or the port stored in render's env file
