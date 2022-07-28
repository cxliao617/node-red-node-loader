module.exports = class NodeLoader {
    //function node
    functionNode = require('@node-red/nodes/core/function/10-function')
    switchNode = require('@node-red/nodes/core/function/10-switch')
    changeNode = require('@node-red/nodes/core/function/15-change')
    rangeNode = require('@node-red/nodes/core/function/16-range')
    templateNode = require('@node-red/nodes/core/function/80-template')
    delayNode = require('@node-red/nodes/core/function/89-delay')
    triggerNode = require('@node-red/nodes/core/function/89-trigger')
    execNode = require('@node-red/nodes/core/function/90-exec')
    rbeNode = require('@node-red/nodes/core/function/rbe')

    //common node
    injectNode = require('@node-red/nodes/core/common/20-inject')
    debugNode = require('@node-red/nodes/core/common/21-debug')
    completeNode = require('@node-red/nodes/core/common/24-complete')
    catchNode = require('@node-red/nodes/core/common/25-catch')
    statusNode = require('@node-red/nodes/core/common/25-status')
    linkNode = require('@node-red/nodes/core/common/60-link')
    commentNode = require('@node-red/nodes/core/common/90-comment')
    unknownNode = require('@node-red/nodes/core/common/98-unknown')

    //network node
    tlsNode = require('@node-red/nodes/core/network/05-tls')
    httpproxyNode = require('@node-red/nodes/core/network/06-httpproxy')
    mqttNode = require('@node-red/nodes/core/network/10-mqtt')
    httpinNode = require('@node-red/nodes/core/network/21-httpin')
    httprequestNode = require('@node-red/nodes/core/network/21-httprequest')
    websocketNode = require('@node-red/nodes/core/network/22-websocket')
    tcpinNode = require('@node-red/nodes/core/network/31-tcpin')
    udpNode = require('@node-red/nodes/core/network/32-udp')

    //parser node
    csvNode = require('@node-red/nodes/core/parsers/70-CSV')
    htmlNode = require('@node-red/nodes/core/parsers/70-HTML')
    jsonNode = require('@node-red/nodes/core/parsers/70-JSON')
    xmlNode = require('@node-red/nodes/core/parsers/70-XML')
    yamlNode = require('@node-red/nodes/core/parsers/70-YAML')

    //sequence node
    splitNode = require('@node-red/nodes/nodes/core/sequence/17-split')
    sortNode = require('@node-red/nodes/nodes/core/sequence/18-sort')
    batchNode = require('@node-red/nodes/nodes/core/sequence/19-batch')

    //storage node
    fileNode = require('@node-red/nodes/nodes/core/storage/10-file')
    watchNode = require('@node-red/nodes/nodes/core/storage/23-watch')
    nodeDict = {}
    constructor() {
        this.nodeDict = {
            "function": functionNode,
            "switch": switchNode,
            "change": changeNode,
            "range": rangeNode,
            "template": templateNode,
            "delay": delayNode,
            "trigger": triggerNode,
            "exec": execNode,
            "rbe": rbeNode,
            "inject": injectNode,
            "debug": debugNode,
            "complete": completeNode,
            "catch": catchNode,
            "status": statusNode,
            "link in": linkNode,
            "link out": linkNode,
            "link call": linkNode,
            "comment": commentNode,
            "unknown": unknownNode,
            "tls-config": tlsNode,
            "http proxy": httpproxyNode,
            "mqtt-broker": mqttNode,
            "mqtt in": mqttNode,
            "mqtt out": mqttNode,
            "http request": httprequestNode,
            "http response": httpinNode,
            "http in": httpinNode,
            "websocket-listener": websocketNode,
            "websocket-client": websocketNode,
            "websocket out": websocketNode,
            "websocket in": websocketNode,
            "tcp in": tcpinNode,
            "tcp out": tcpinNode,
            "tcp request": tcpinNode,
            "udp in": udpNode,
            "udp out": udpNode,
            "csv": csvNode,
            "html": htmlNode,
            "json": jsonNode,
            "xml": xmlNode,
            "yaml": yamlNode,
            "split": splitNode,
            "join": splitNode,
            "sort": sortNode,
            "batch": batchNode,
            "file": fileNode,
            "file in": fileNode,
            "watch": watchNode
        }
    }
    getNodeArray(fileString) {
        const flowData = JSON.parse(fileString)
        const originalNodeTypeArray = flowData.map((node) => (node.type))
        const uniqleNodeTypeArray = [...new Set(originalNodeTypeArray)]
        let nodeArray = []
        uniqleNodeTypeArray.forEach((node) => {
            if (this.nodeDict[node] !== undefined) {
                nodeArray.push(this.nodeDict[node])
            }
            else {
                console.info(`[Node Loader WARNING] ${node} cannot find!!`)
            }
        }
        )
        const uniqleNodeArray = [...new Set(nodeArray)]
        return uniqleNodeArray
    }
}
