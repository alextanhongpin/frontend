# Vue Best Practices

## Setting limits for chunking

Before:

```
entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.                                                            Entrypoints:                                                                                                                                                                                                  app (734 KiB)
      js/chunk-vendors~253ae210.73af95ad.js
      css/app~d0ae3f07.8239d7fc.css
      js/app~d0ae3f07.3b9f7038.js
                                                                                                                                                                                                              File                                      Size             Gzipped

  dist/js/chunk-vendors~253ae210.73af95a    620.36 KiB       191.40 KiB                                                                                                                                       d.js                                                                                                                                                                                                        dist/js/app~d0ae3f07.3b9f7038.js          86.33 KiB        19.12 KiB
  dist/service-worker.js                    0.95 KiB         0.54 KiB
  dist/precache-manifest.34eb9ad2e3a788a    0.65 KiB         0.31 KiB                                                                                                                                         7704b6362f6fb7146.js
  dist/js/about~2653ddd4.bafe5897.js        0.46 KiB         0.32 KiB
  dist/css/app~d0ae3f07.8239d7fc.css        27.05 KiB        4.38 KiB
```

Add this to `vue.config.js`:

```js
module.exports = {
  configureWebpack: {
    optimization: {
      splitChunks: {
        minSize: 100000,
        maxSize: 250000
      }
    }
  }
}
```

After:

```
dist/js/chunk-vendors~46fbf940.5fadfed    170.59 KiB       52.25 KiB
  6.js
  dist/js/chunk-vendors~399b027d.f2ba3a4    78.41 KiB        16.86 KiB
  b.js
  dist/js/chunk-vendors~fdc6512a.3ce3a5d    75.51 KiB        26.30 KiB
  5.js
  dist/js/chunk-vendors~e258e298.b34d39b    70.36 KiB        17.94 KiB
  4.js
  dist/js/chunk-vendors~9c5b28f6.964d6e0    65.11 KiB        21.14 KiB
  d.js
  dist/js/chunk-vendors~13aac730.90d9496    64.05 KiB        16.57 KiB
  0.js
  dist/js/chunk-vendors~253ae210.8dd8dd8    63.40 KiB        17.81 KiB
  1.js
  dist/js/app~d0ae3f07.2a4f56a0.js          47.70 KiB        10.30 KiB
  dist/js/app~5a11b65b.eabed007.js          42.50 KiB        10.06 KiB
  dist/js/chunk-vendors~1c3a2c3f.0b28e33    33.96 KiB        11.53 KiB
  6.js
  dist/precache-manifest.d902a3aeab0526c    1.52 KiB         0.53 KiB
  d551ec6232732ee88.js
  dist/service-worker.js                    0.95 KiB         0.54 KiB
  dist/js/about~2653ddd4.1bc25d4c.js        0.46 KiB         0.32 KiB
  dist/css/app~d0ae3f07.e0f4de32.css        26.35 KiB        4.31 KiB
  dist/css/app~5a11b65b.e7181647.css        0.70 KiB         0.28 KiB
  ```
  
  
## Deploying to gh-pages

Install the module:
```bash
$ yarn add gh-pages
```

Add the following to `package.json`:

```json
{
  "scripts": {
    "gh-pages": "node_modules/.bin/gh-pages -d dist"
  },
  "vue": {
    "publicPath": "/repository-name/"
  }
}
```

If the vue section in `package.json` interferes with your deployment, you can also set it in `vue.config.js`:

```bash
$ echo 'module.exports = { "publicPath": "/go-github-scraper-sg-ui/" }' > vue.config.js
```

## Lazy load components

```js
const LeaderboardLanguage = () => import('@/components/LeaderboardLanguage.vue')
const LeaderboardCompany = () => import('@/components/LeaderboardCompany.vue')
const LeaderboardUser = () => import('@/components/LeaderboardUser.vue')
```
