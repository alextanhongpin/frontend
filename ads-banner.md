# React ads/banner in between lists/collection

Use `React.isValidElement` to check if the object is a `component` or just a normal object. Render the component as it is, or render the data that is passed in.

```js
const ListItem = ({ name }) => 
  <div>{name}</div>

const List = ({ data }) => 
  data.map(item => React.isValidElement(item) ? item : <ListItem {...item}/>)
  
// Somewhere else...

const Page = () => {
  const data = [
    {name: 'john'},
    <Banner/>,
    {name: 'doe'}
  ]
  
  return (
    <List data={data}/>
  )
}
```

e.g. to slot in the second position:
```js
const arr = [1,2,3,4,5]

const output = [
	...arr.slice(0, 2),
	banner,
  ...arr.slice(2)
]
```
