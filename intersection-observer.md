## Intersection Observer

Useful to detect elements entering the viewport and applying animation to them (or lazy preloading of images).

```html
<style>
.img {
	width: 640px;
	height: 480px;
	margin: 20px auto;
	background: #EEE;
}
.is-active {
	animation: anim1 forwards 1s ease-out;
}

@keyframes anim1 {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}
</style>

<div class='img'></div>
<div class='img'></div>
<div class='img'></div>
<div class='img'></div>
<div class='img'></div>
<div class='img'></div>

<script>

	const imgs = document.querySelectorAll('.img')
	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (entry.intersectionRatio > 0) {
				console.log('in the view')
				entry.target.classList.add('is-active')
				// Animate it once only before the image enter
				// the intersection frame.
				observer.unobserve(entry.target)
			} else {
				entry.target.classList.remove('is-active')
				console.log('out of view')
			}
		})
	})
	imgs.forEach(img => observer.observe(img))
	
</script>
```


Note
- how to handle anchor link, with click and highlighting and scrolling
