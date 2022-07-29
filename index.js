

module.exports = function NodeLoader(fileString) {
    const lodash = require('lodash')

    //function node
    const functionNode = require("@node-red/nodes/core/function/10-function");
    const switchNode = require("@node-red/nodes/core/function/10-switch");
    const changeNode = require("@node-red/nodes/core/function/15-change");
    const rangeNode = require("@node-red/nodes/core/function/16-range");
    const templateNode = require("@node-red/nodes/core/function/80-template");
    const delayNode = require("@node-red/nodes/core/function/89-delay");
    const triggerNode = require("@node-red/nodes/core/function/89-trigger");
    const execNode = require("@node-red/nodes/core/function/90-exec");
    const rbeNode = require("@node-red/nodes/core/function/rbe");

    //common node
    const injectNode = require("@node-red/nodes/core/common/20-inject");
    const debugNode = require("@node-red/nodes/core/common/21-debug");
    const completeNode = require("@node-red/nodes/core/common/24-complete");
    const catchNode = require("@node-red/nodes/core/common/25-catch");
    const statusNode = require("@node-red/nodes/core/common/25-status");
    const linkNode = require("@node-red/nodes/core/common/60-link");
    const commentNode = require("@node-red/nodes/core/common/90-comment");
    const unknownNode = require("@node-red/nodes/core/common/98-unknown");

    //network node
    const tlsNode = require("@node-red/nodes/core/network/05-tls");
    const httpproxyNode = require("@node-red/nodes/core/network/06-httpproxy");
    const mqttNode = require("@node-red/nodes/core/network/10-mqtt");
    const httpinNode = require("@node-red/nodes/core/network/21-httpin");
    const httprequestNode = require("@node-red/nodes/core/network/21-httprequest");
    const websocketNode = require("@node-red/nodes/core/network/22-websocket");
    const tcpinNode = require("@node-red/nodes/core/network/31-tcpin");
    const udpNode = require("@node-red/nodes/core/network/32-udp");

    //parser node
    const csvNode = require("@node-red/nodes/core/parsers/70-CSV");
    const htmlNode = require("@node-red/nodes/core/parsers/70-HTML");
    const jsonNode = require("@node-red/nodes/core/parsers/70-JSON");
    const xmlNode = require("@node-red/nodes/core/parsers/70-XML");
    const yamlNode = require("@node-red/nodes/core/parsers/70-YAML");

    //sequence node
    const splitNode = require("@node-red/nodes/core/sequence/17-split");
    const sortNode = require("@node-red/nodes/core/sequence/18-sort");
    const batchNode = require("@node-red/nodes/core/sequence/19-batch");

    //storage node
    const fileNode = require("@node-red/nodes/core/storage/10-file");
    const watchNode = require("@node-red/nodes/core/storage/23-watch");

    const nodeDict = {
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
    };

    const flowData = JSON.parse(fileString);
    const condFunc = lodash.cond([
        [
            (a) => (lodash.gt(a.length, 0)),
            (a) => (console.info(`[Node Loader] Missing custom node: ${a}`)),
        ],
    ]);

    const checkInDict = (node) => (node in nodeDict)
    const nodeArray = lodash.chain(flowData)
        .map((node) => (node.type))
        .uniq()
        .filter(checkInDict)
        .uniq()
        .value()
        .map((node) => nodeDict[node])
        
        console.log(nodeArray)

    const missingNode = lodash.chain(flowData)
        .map((node) => (node.type))
        .uniq()
        .filter(lodash.negate(checkInDict))
        .uniq()
        .value();

    condFunc(missingNode)
    // if (missingNode.length > 0) {
    //     console.info(`[Node Loader] Missing custom node: ${missingNode}`)
    // }

    // const originalNodeTypeArray = flowData.map((node) => (node.type))
    // const uniqleNodeTypeArray = [...new Set(originalNodeTypeArray)]
    // // console.log('uni node',uniqleNodeArray)
    // let nodeArray = []
    // uniqleNodeTypeArray.forEach((node) => {
    //     if (nodeDict.hasOwnProperty(node)) {
    //         nodeArray.push(nodeDict[node])
    //         // console.log('node type: ',node,nodeDict[node])
    //     }
    //     else {
    //         console.info(`[Node Loader WARNING] ${node} cannot find!!`)
    //     }
    // }
    // )
    // console.log(originalNodeTypeArray,uniqleNodeTypeArray)
    // const uniqleNodeArray = [...new Set(nodeArray)]
    // return uniqleNodeArray
    // console.log(nodeArray,uniqleNodeArray)
    return lodash.uniq(nodeArray)
    // return [...new Set(nodeArray)]
};
