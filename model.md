
# Frontend Models

Move business logic to models

Typical models includes
- Route or urlBuilder: don’t hardcode urls in the views/routing, place it all in the model
- DateTime: Extending default date time for ranges etc, or time.Second, time.Minute enums for easier date time manipulation
- Strings: Additional strings manipulation, capitalizing string etc, truncating text
- Authentication: Login routing etc
- Router: Any logic to parse the router params should best be placed here if they are consistently being reused.


Any logic that is repeated more than twice requires it to be modularised.

Note: singularization and pluralization should best be handled using an internationalisation library

