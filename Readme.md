## [Strapi V4](https://strapi.io) and [ra-strapi-rest](https://github.com/nazirov91/ra-strapi-rest) DEMO

### Start the Strapi backend server

1. Navigate into server = `cd server`
2. Run `yarn` or `npm install`
3. Once the dependencies are installed, run `yarn build` and then `yarn develop`
4. Login using the sample credentials `admin@email.com`, `Admin123`
5. Navigate to `Settings -> API Tokens` and generatea a full access API Token. Save it somewhere, we will use it in the front end next

### Start the React-admin project with [VITE](https://vitejs.dev/)

1. Navigate into server = `cd admin_ui`
2. Run `yarn` or `npm install`
3. Once the dependencies are installed, run `yarn build` and then `yarn dev`
4. Create an `.env` file in the main admin_ui directory, and add an entry for the API token `VITE_STRAPI_API_TOKEN=[YOUR STRAPI API TOKEN HERE]`

Next open `localhost:5173` and you should see a react-admin page.
