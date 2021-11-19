# origin-demo
Example for origin.js.

## setup
1. clone [origin.js](https://github.com/originjs/origin.js) and run build (recommend to use yarn)
```
# clone
git clone https://github.com/originjs/origin.js.git

# build
yarn
yarn build

# create cli link
cd packages/cli
npm link
```

2. clone demo
```
git clone https://github.com/konpeki622/origin-demo.git
```

3. launch and build
```
cd origin-demo
npm install
npm link @originjs/cli
ori dev    #npm run dev
ori build  #npm run build
```
