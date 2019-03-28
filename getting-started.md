- source code lies in the `src/` folder, build output lies in `dist` (distribution) folder
- user lowercase and singular naming for all folders
- store reusable business logic in `model/`, avoid `helpers/` and/or `utils/` folders. e.g. for datetime manipulation, create a model called `datetime.js`
- store environment variables in `.env` files
- start with a main file to intialize your app
- import all pages and routing in your `main.js` (you can call it index.js or App.js, depending on your convention)
- lazy load pages components
- put routes in `model/` too, do not create redundant folders (routes, helper etc) that just contains one file
- place components in `component/`
- use atomic design to break components roles
- create `atom`, `molecule`, `organism`, `page` and `template` folders