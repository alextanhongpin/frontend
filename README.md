# Useful tips

## Pair fonts 

Pair different fonts together to get better impact

References:
- https://fontpair.co/
- https://www.smashingmagazine.com/2010/11/best-practices-of-combining-typefaces/

## Date Context

- The `updated_at` hints the last edited time of an item, and can be displayed in the ui as `(edited)`.
- The `created_at` hints the creation of the item, can be useful to display a label `New` next to the item to indicate that it is newly created today.


## Undo

- Add options to undo the operation.

## Tables

- Try to keep at max 4 columns - more than that is too messy.
- show filters by fields with counts next to it
- simplify actions without submit button (direct update). To delete, just select a none.
- if there are many columns with different statuses (pending, reject payment), roles (admin, owner etc), consider breaking your tables so that the table only shows one status. Note that if you have an operation that modifies the user's status, it might move the data to another table. Dependending on your use case, this might not be something you want.

## Icons 

- Display icons next to words. `(!) Action Required`. This is particularly useful other than given the text a different color, since some people might not be able to distinguish the color clearly.

## Colors

- prepare color palletes and give each color a name.
- standardize opacity ratio (40% etc)
- colored text could be cleaner than text with background filled
- try to keep the usage of colors to the minimum (red, black and white will normally suffice)

## Notifications
- Instead of generic notification, why not add a personalised recommendation one, by a specific person?

## Search/ history
- show recent stuff
- show the last interacted items

## Forms
- show the last selected options (e.g. category, address)
- use auto-fill
