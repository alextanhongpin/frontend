## Using Broadcast Channel to log user out from other tabs

```html
<style>
</style>


<button id='button'>Log out</button>
<script>
	// Open multiple tabs and click the button.
	const bc = new BroadcastChannel('logout')
	bc.onmessage = function (evt) {
		console.log(evt)
		// bc.close()
		logout()
	}

	const button = document.getElementById('button')
	button.addEventListener('click', (evt) => {
		bc.postMessage('logout')
		// Note that this only broadcast to other tabs/iframes,
		// excluding itself.
		logout()
	}, false)

	function logout () {
		// Go back to home page. Trigger other open tabs.
		// window.location.replace('/')
		alert('performing logout')
	}
</script>
```
