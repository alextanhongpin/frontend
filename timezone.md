# Displaying timezone in Browser

Date inputs usually does not show the timezone. This may be confusing when your application is global, but you need to follow the date of another region.

```js
Intl.DateTimeFormat().resolvedOptions()
```

Output:
```js
{
    "locale": "en-GB",
    "calendar": "gregory",
    "numberingSystem": "latn",
    "timeZone": "Asia/Singapore",
    "year": "numeric",
    "month": "2-digit",
    "day": "2-digit"
}
```

## Display date in another time zone

```js
new Date().toLocaleString('en-us', { timeZone: 'Asia/Jakarta'})
```
