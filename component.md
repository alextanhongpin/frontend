## Guideline

It is usually good to refer to existing pattern libraries or design system. Use the bare components if possible before attempting to create a custom one.

Pattern libraries:
- [semantic ui](https://react.semantic-ui.com/elements/button/
- [antd](https://ant.design/)


Design System:
- [lexicon](https://lexicondesign.io/)
- [ibm carbon](https://www.carbondesignsystem.com/)

A more comprehensive list here:
- https://github.com/alexpate/awesome-design-systems


## Designing with text

Remove any UI aspect from the page first - start with text. If you can represent your page as a text-based and still be able to convey the information, it would be good enough. Some visuals can be a distraction - keep it to the bare minimum. Also, remove unnecessary visuals, not the data representation. Often times designer tends to remove the useful information just because "it doesn't fit the UI".


## Layouts

Layout matters a lot - how the overall screen (page) will look like depends on how you place your components. Components are designed individually, but what really matters is the symbiosis between different components.

- https://www.uxpin.com/studio/blog/web-layout-best-practices-12-timeless-ui-patterns-explained/

## Aggregation

Aggregation is common in components. Most of the time we will have a list of items to display, and when the list gets huge, the design gets messy.

There are several ways to deal with large lists:
- paginate them 
- sort them
- filter only relevant content
- break them into different pages/tabs

## Relationships between components

Components can have different responsibility:
- as a trigger (button, filter, sort action, etc)
- as a read-only static view (title, paragraph, no interaction required)
- as a read-only dynamic view (counters, time display etc)
- as a list (feeds etc)


## Best Advices for Designing Components
Designing components are never easy. Sometimes you will have to learn it the hard way of what not to do when designing components. The following advices will help you prevent from reaching that stage, as you will learn all the best practices for designing a successful component.

- Reusability - How reusable is your component? Components should not be designed to be too specific for a particular use case. Use the Factory, Adapter or Decorator pattern to enhance reusability of your components or adding extra feature for a different use case. 
- Data Models - Data models in this context refers to the data input and output of the components. The naming of the data model should not be too specific, instead it should be generic and reusable for different use case. Always provide a setter and getter for users to set or access the data models. In absence of the data models, always provide a default values.
- Validations - The data models should be validated to ensure the components only works on the correct data structure. Prepare a checking mechanism to ensure the data structures are always correct. Throw alerts or errors when the data structure is invalid.
- Naming Conventions - Probably the hardest thing in programming, giving the right name. Avoid using specific names in your component. instead use a more general one like id (against categoryIid, userId), or label (instead of itemName, category, food). A list of standard naming patterns will avoid confusion among collaborating developers. name, username, imagePath, imageList, id, timestamp, dateCreated, dateModified, width, height
- Class Name & Id - Use a base class name for components to share a particular traits (styling or logic). Use ids for specificity. See generating specific id for components. When dealing with JavaScript logics, never target the global className, instead, target an id or give the component a new className. (Why are globals bad)
- Component Lifecycles - Use Observer patterns to handle components lifecycle. Some lifecycle includes onComponentMount, onComponentRender, onComponentDestroy, onClick, onStart, onComponentIsLoading, onDataIsLoading, onDataLoadingCompleted, isEventCompleted (what does this means? some events would be completed upon initialisation, such as selecting something.)
- onBlur Lifecycle. Some components (like dropdowns) should be hidden upon blur. What happens to incomplete events (did not select a dropdown item)? Select a default, or closest results to that, or maybe alert the users that the field is required).
- Documented - Documented usage will provide a better understanding on how each components works.
- Placeholders - Always handle empty data. In case where data are missing, or an Ajax request fails to parse, enter a default or placeholder message to notify users. Always set timeout to prevent users for guessing when the data will come.
- Animation - Animation provides user a clue on what is happening. Use fade ins for components entering and fade outs for removing data from the page. Handle transitions gracefully.
- Asynchronous components - When building an asynchronous component, always handle the data request properly. Prevent users from firing multiple request at the same time by using a dirty flag to see if the request has been received. This might results in weird behaviours like negative follows and likes (the result of toggling the states too fast).
- dirty checking. should always check to see if one components will affect the other one.
- Binding handlers. when re-rendering new template, remember to always unbind old handlers before binding new handlers. this may prevent duplicated handlers that will fire multiple time.
- Delegate events - Binding handlers all the time after re-rendering a view can be painful. You can alway delegate events to check for the particular class and bind the data to them.
use pure functions (see more) to handle the input and output of the values. Always store the default values by creating a cache copy and enable users to reset it. only work with the ghost copy. use pure functions to modify the existing data 
- Rate-limit or Threshold - On-Off components from higher-level - All events for a component can be turned on and off from a higher level. This is to prevent multiple events firing (for example) or event sending countless requests through AJAX. Rate-Limit…adding disabled properties eg. for buttons.**
- Responsive - The ui of the component should be able to change according to the screen size. The display on mobile should be touch intuitive, in contrast to the click intuitive and keyboard navigable components on the desktop.
Usage - provide use cases and examples using .help() methods. This will help developers that does not have knowledge on how to use your library a better insight and less time searching for documents.
Stateless - ensure components don’t share the same state. For e.g. toggling one dropdown should not toggle all dropdown nearby it.

## how are components rendered?
- static directly constructed from html dom. with js applied  to it to hide it. what if js is not working? Always hide using css.
difficulty: hard to pass in data to the component. (setter), but easy getter
- dynamic: pass on defaults to the component and render dynamically through js. problem. must receive input data in json format. cannot grab data from view.
- hybrid, construct the component partially in the view, pass in the data through attributes and initialise the component through js. will solve the setter getter issues. in the attributes pass in data-list
- class name checking. give the component a specific class name and apply js to it. can be one time initialization ( replace the html dom directly) or multiple time (dom refresh to display latest context)
add device queries for components, eg. dropdown-mobile, -dropdown-desktop, dropdown-tablet

don't target classname in js, use it for styling. target data attributes instead.


How would you start designing components?
Identify the components
Identify the input/output
Draw the UML for the operation
Visualize the output
List down the events/interactions
Display the UI on different devices
