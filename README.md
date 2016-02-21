## Install
* clone this repository 
* npm install
* jspm install
* install http-server (standard http server) or live-server (server with live reload)

```js
git clone https://github.com/tmbtech/saywat-.git saywat 
cd saywat 
npm install
jspm install
npm install live-server -g
```

## Run
Run your server then browse to http://localhost:8080

```
live-server
```

## "flux" via context.
Using a simple flux based on https://github.com/tmbtech/Context-Flux

## FAQ
- Q: Why don't I see my changes?
- A: I usually forget to unbundle jspm before pushing to master. Run `npm run clean`



