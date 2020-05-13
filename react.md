## Custom Error Handling

```js
import React from "react";
import ReactDOM from "react-dom";
import request from "superagent";

import "./styles.css";

/* ---------- Custom Error Handler! ---------- */
const ErrorHandler = ({ error, children }) => {
  if (error) {
    if (error.status === 404) {
      throw error;
    }
  }
  return children;
};

/* ---------- Custom Request Component! ---------- */
class MyRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  componentDidMount() {
    const { url } = this.props;
    request
      .get(url)
      .then(res => {
        console.log("MyRequest recieved", JSON.stringify(res.body));
        this.setState({
          loading: false,
          data: res.body
        });
      })
      .catch(e => {
        console.log("MyRequest caught error:", e);
        this.setState({
          loading: false,
          error: e
        });
      });
  }

  render() {
    const { children } = this.props;
    const { error } = this.state;
    return <ErrorHandler error={error}>{children(this.state)}</ErrorHandler>;
  }
}

/* ---------- Custom Error Boundry ! ---------- */
class MyBoundry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false
    };
  }

  componentDidCatch(e) {
    console.log("MyBoundry caught:", e);
    this.setState({
      error: e
    });
  }

  render() {
    const { children } = this.props;
    console.log(this.state.error);
    if (this.state.error) {
      return (
        <React.Fragment>
          <h1>Error Boundry</h1>
          <h5>{JSON.stringify(this.state.error)}</h5>
        </React.Fragment>
      );
    }
    return children;
  }
}

/* ---------- Custom Component That uses our request component! ---------- */
const MyComp = () => (
  <MyRequest url="https://jsonplaceholder.typicode.com/todos/1">
    {({ loading, error, data }) => (
      <React.Fragment>
        <h5>Data: {JSON.stringify(data)}</h5>
        <h5>Error: {JSON.stringify(error)}</h5>
        <h5>Loading: {JSON.stringify(loading)}</h5>
      </React.Fragment>
    )}
  </MyRequest>
);

function App() {
  return (
    <div className="App">
      <MyBoundry>
        <MyComp />
      </MyBoundry>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

## Absolute path imports

`NODE_PATH=/src` is deprecated. 
`jsconfig.json`:
```json
{
    "compilerOptions": {
        "baseUrl": "src"
    },
    "include": ["src"]
}
```


## Lint-staged

Typical mistake

```
  "husky": {
    "hooks": {
      "pre-commit": "npm run lint",
      "pre-push": "npm test"
    }
  }
```

This will trigger linting on all files, not specific files. Do this instead:

```diff
-     "pre-commit": "npm run lint",
+     "pre-commit": "prettier --fix",
```
