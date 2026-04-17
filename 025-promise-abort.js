function createAbortablePromise(signal) {
  return new Promise((resolve, reject) => {
    // 1. Check if already aborted before starting
    if (signal.aborted) {
      return reject(signal.reason);
    }

    let progress = 0;
    const steps = ["Analyzing", "Upscaling", "Refining"];
    const intervalId = setInterval(function animate() {
      progress++;
      const step = Math.floor((progress / 100) * steps.length);
      onProgress?.(progress, steps[step]);
    }, 600);

    // 3. Listen for the abort event to perform cleanup
    signal.addEventListener(
      "abort",
      () => {
        intervalId && clearInterval(intervalId); // Stop the underlying process
        onProgress?.(100, "");
        resolve(signal.reason); // Reject the promise immediately
      },
      { once: true },
    );
  });
}

// Usage
const controller = new AbortController();
const promise = createAbortablePromise(controller.signal);

setTimeout(() => {
  // Trigger the abort
  controller.abort(new Error("User cancelled the operation"));
}, 5000);
