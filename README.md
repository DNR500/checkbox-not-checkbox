# Checkbox-not-checkbox

Simple project to show the use of a checkbox component.

To spin up the project and see a working copy - download and run the following
```
npm i
npm run build
npm run start:node
```
The project should now be viewable in a browser at http://localhost:3000

The components code can be found in 

src/public/bundles/app/components/checkbox.jsx

And is accompanied by styles and tests

Sample usage
```
import React from 'react';
import ReactDOM from 'react-dom';
import CheckBox from './components/checkbox';

const onCheckboxChanged = (e) => {
  console.log('check toggle', e); // eslint-disable-line no-console
};

export default function init() {
  ReactDOM.render(
    (
      <CheckBox label="First checkbox" value="some value" onChange={onCheckboxChanged} checked />
    ),
    document.getElementById('main'));
}
```
Props
* onChange - function that will be called with when the user clicks, an object with label, value and the components checked state is supplied as an argument.
* label - string label for the checkbox (optional)
* value - string associate value (optional)
* checked - boolean add this to set the checkbox in a check state (optional)

## Development
Entry points for code are as follows
* js - src/public/bundles/main.js
* css - src/public/bundles/main.scss
* html - src/public/index.marko (generated using index.html.js)

To bring in dependencies run the following in the root of the project..
```
npm i
```

### Task overview
See the scripts section of the package.json for a fuller outline..

* **npm run start:node** - runs the page in a server http://localhost:3000 (requires npm run build first!)
* **npm run lint** - runs js and json linting tasks
* **npm test** - runs javascript tests (tests currently exist on a branch)
* **npm run compile** - outputs static files for css, js, and other static assets
* **npm run build** - lints, tests, amd compiles the site
* **npm run watch** - sets up watch tasks to help speed up development
* **npm run release** - bump the version number and create a release on github

### To run project..

```
npm run build
npm run start:node
```
### For production build..

```
NODE_ENV=production npm run build
NODE_ENV=production npm run start:node

```
