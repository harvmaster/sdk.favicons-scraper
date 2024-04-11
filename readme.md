# Favicons-scraper
A fully-typed wrapper for the favicons scraper API<br>
The API returns a list of the favicons from any domain you give it.

### Demo
[www.FaviconScraper](https://www.faviconscraper.mc.hzuccon.com/#/)

### Usage
```ts
import { getLogos } from 'favicons-scraper'

const url = 'https://facebook.com/user'
const urlLogos = await getLogos(url)

const domain = 'facebook.com'
const domainLogos = await getLogos(domain)
console.log(urlLogos)
console.log(domainLogos)
/*
[
  {
    size: { width: 120, height: 120 },
    type: 'png',
    mime: 'image/png',
    src: 'https://z-m-static.xx.fbcdn.net/rsrc.php/v3/yO/r/_GHbZfYGSj-.png'
  }
]
*/
```