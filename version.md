## Version

Adding version in your react app helps you to keep track on which version your app is running.

In `.env`
```
REACT_APP_GIT_SHA=`git rev-parse --short HEAD`
```
In `package.json`:
```
"start": "REACT_APP_GIT_SHA=`git rev-parse --short HEAD` react-scripts start"
```

In `index.html`
```html
<meta name="ui-version" content="%REACT_APP_GIT_SHA%">
```
