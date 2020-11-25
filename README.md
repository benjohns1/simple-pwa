# Simple PWA
Simple PWA app from [this tutorial](https://medium.com/james-johnson/a-simple-progressive-web-app-tutorial-f9708e5f2605).

## Install
`npm ci`

## Run
`npm start`

[http://localhost:9090](http://localhost:9090)

## Local SSL Setup
Necessary to complete all PWA requirements locally

1. Install [openssl](https://www.openssl.org/)
1. `openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem -config localhost.cnf`
1. Install `cert.pem` in Chrome as a Trusted Root Certification Authority

## PWA Lighthouse Audit
`npm run lighthouse` or `npm run lighthouse:ssl` (after following Local SSL steps above, ports `80` and `443` must be available)

Ctrl-C to halt dev server

View `./lighthouse/report.html` for report output.
