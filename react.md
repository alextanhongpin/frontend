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


## Dealing with prop drilling

Given the component hierachy:
```
Grandparent -> parent -> child
```

If we need to handle the child events, we need to pass the handler from `grandparent` to `child` component, polluting the `parent` component with unnecessary props. Still, there are several advantages of passing down the props than handling it on the child:

- the parent could be a list of child, and parent needs to have the knowledge of the child, e.g. mutation (create/delete) will add/remove and item from the child
- by passing down props, we achieve full stateless components, and it makes testing easier
- child components are pure dumb components/the opposite holds true - the parent now contains a huge chunk of logic


Ideally, the child component should dispatch an event to the parent component. We can do this by passing down a `dispatch` event bus and register the event handler at the `grandparent` component.


## Useful tips

- use next js sparingly (based on the documentation and github issues, when the route requires authentication, it will no longer get the benefits of nextjs SSR or SEO, since you need to fetch customized user data which should not be cached, hence defeating the purpose of SSR. Their suggestion is to use client-side fetching instead). I have been wondering why our SSR is not as fast as they promoted, turns out due to the limitation mentioned above, it's not optimized)
- remove redux saga (use hooks). It complicates the code, and actually it is no longer necessary in modern stack)
- remove redux. not all application need global states. The current nextjs + redux implementation seems to have some issue too (user states will mix up!). For global client state, use context api or recoiljs. The use case is usually limited for global states, like global theme or auth user data.
- explore graphql. it's fast.
