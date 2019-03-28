## Maximum text length
- limit the length when it is possible (80 chars)
- when not possible and the text must be in a single line (e.g. header), then use ellipsis `...` or `Show more/Show less` button


# DateTime

- ensure the date time sent to the server is UTC, if there's a need to preserve the timezone information, make sure the server supports it
- use relative datetime
- use consistent formatting DD/MM/YYYY
- show partial date, but full date as the tooltip for curious users


## Placeholders

- ensure the Null scenario is handle
- show default placeholders with a call to action (Oops. you don't have xxx, Create one?)

## Input

- ensure the focused input has a clear indication (outline) that it is being focused now

## Double-submit

- use a mutex to ensure the action happens only once

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
