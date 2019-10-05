# Running webworker

```js
// worker.js
export default function WebWorker (args) {
  let onmessage = e => {
    console.log('sending data', e.data)
    postMessage(e.data)
  }
}

import workercode from './worker.js'

class WebWorkerEnabler {
  constructor (worker) {
    let code = worker.toString()
    code = code.substring(code.indexOf('{') + 1, code.lastIndexOf('}'))
    const blob = new Blob([code], { type: 'application/javascript' })
    return new Worker(URL.createObjectURL(blob))
  }
}
const worker = new WebWorkerEnabler(workercode)
  useEffect(() => {
    const process = function (e) {
      console.log('worker:', e.data)
    }
    worker.addEventListener('message', process)
    return () => window.removeEventListener('message', process)
  }, [])

  useEffect(() => {
    worker.postMessage(testExpenses)
  }, [testExpenses])
```
