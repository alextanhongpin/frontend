## Maximum text length
- limit the length when it is possible (80 chars)
- when not possible and the text must be in a single line (e.g. header), then use ellipsis `...` or `Show more/Show less` button


# DateTime

- ensure the date time sent to the server is UTC, if there's a need to preserve the timezone information, make sure the server supports it
- use relative datetime
- use consistent formatting DD/MM/YYYY
- show partial date, but full date as the tooltip for curious users
- use labels to give date context
  - if the item is new (created at less than 1 minute), show a new label
  - else
  - if the item is created today, show a created label
  - if the item is edited, show an edited label


## Placeholders

- ensure the Null scenario is handle
- show default placeholders with a call to action (Oops. you don't have xxx, Create one?)

## Input

- ensure the focused input has a clear indication (outline) that it is being focused now
- user can submit empty spaces
- user can submit float when the input expect number only
- user can submit emoji etc
- pasting values will cause error
- no limit on text length/min max number
- sql injection values
- values provided is not one of the enum
- user can submit empty string (no declaration of required/optional field)
- user can submit negative value for forms

## Double-submit

- use a mutex to ensure the action happens only once
- when you have an increment counter, pressing -tive multiple times will cause the counter to be negative
- purchase buttons (or any other buttons) can be submitted twice
- pressing enter twice will trigger double submit on the forms

## Api

- submitting -tive pagination in limit/offset
- submitting float values in pagination
- submitting invalid type for query string
- super long query string that can break the application
- super large payload
- unlimited pagination value

## Debounce

- avoid sending too many requests to the server side


## Loading indicator

## Logout
- ensure if the user is logged in multiple tabs, logging out from one will kick them out from all of them

## Window timeout
- if the page has sensitive, expiring information (checkout page), ensure the user is kicked out after certain time period (5 minutes etc) to avoid having stale data or abuse by triggering it in the future)


## Search
- highlight the search keyword
- show the last responses (last interacted item, last search keywords and recent results)
- handle empty scenario

## Inline editing
- useful to allow inline real-time editing, when the component is blurred, check the state - if there are changes, update it
- show an edited label next to the item

## Back button

- Perform logout, then press back button. 
- Open multiple tabs, logout from one, the rest is not logged out.
- Open multiple tabs for a form, edit one. Then submit the unedited one.
- There are plenty of scenario with multiple tabs

## Time Issue

- an event will expire in 10 seconds. User leave the form for purchasing the ticket events on and submit it the next day. If the server did not validate, then the submission can go through
- setting timeout for forms (must process within 10 minutes or expired, idle state)
- we can set timeout for react at the componentDidMount, and unregister it at the componentWillUnmount

## Online/offline

User goes to the site/mobile when they are connected. When they turn off the wifi, the state is broken/action cannot be submitted.

