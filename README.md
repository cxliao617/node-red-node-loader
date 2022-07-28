# node-red-node-loader
Help loading node for Node Test Helper

## Install
```terminal=
$ npm i node-red-node-loader
```

## Usage
```javascript=
const nodeArray = NodeLoader(fileString)
```

## Example
```javascript=
import NodeLoader from 'node-red-node-loader'
import helper from 'node-red-node-test-helper'
import fs from 'fs/promises'
helper.init(require.resolve('node-red'))

describe("test node red flow",()=>{
    const FILENAME = __dirname+"/flows/flow.json"
    beforeAll((done)=>{
        helper.startServer(done)
    })
    afterAll((done)=>{
        helper.stopServer(done)
    })
    afterEach(()=>{
        helper.unload()
    })
    it("test node loader",(done)=>{
        fs.readFile(FILENAME,'utf-8').then((res)=>{
            console.log(res)
            const flow = JSON.parse(res)
            const nodeArr = NodeLoader(res)
    
            helper.load(nodeArr,flow,()=>{
                done()
            })
        })
    })
} )
```
[Example repo](https://github.com/cxliao617/node-red-node-loader-example/tree/dev)
