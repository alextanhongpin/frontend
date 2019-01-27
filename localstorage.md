## Using storage event to notify other tabs for logout event

```html
<style>
</style>


<button id='button'>Log out</button>
<script>
	// This only works on another page, not itself.
	window.addEventListener('storage', (evt) => {
		console.log('got event', evt)
		// .key, oldValue, newValue, url, storageArea
		event.key === LOGOUT_EVENT && logout()
	})
	const LOGOUT_EVENT = 'logout_event'
	const button = document.getElementById('button')
	button.addEventListener('click', () => {
		localStorage.logout_event = !(localStorage.logout_event === 'true')
		console.log(localStorage.logout_event)
		// localStorage.setItem(LOGOUT_EVENT, true)
		logout()
	}, false)

	function logout() {
		alert('performing logout')
	}
</script>
```
