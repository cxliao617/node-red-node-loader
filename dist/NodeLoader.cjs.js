'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var functionNode = require('node_modules/@node-red/nodes/core/function/10-function');
var switchNode = require('node_modules/@node-red/core/function/10-switch');
var changeNode = require('node_modules/@node-red/core/function/15-change');
var rangeNode = require('node_modules/@node-red/core/function/16-range');
var templateNode = require('node_modules/@node-red/core/function/80-template');
var delayNode = require('node_modules/@node-red/core/function/89-delay');
var triggerNode = require('node_modules/@node-red/nodes/core/function/89-trigger');
var execNode = require('node_modules/@node-red/nodes/core/function/90-exec');
var rbeNode = require('node_modules/@node-red/nodes/core/function/rbe');
var injectNode = require('node_modules/@node-red/nodes/core/common/20-inject');
var debugNode = require('node_modules/@node-red/nodes/core/common/21-debug');
var completeNode = require('node_modules/@node-red/nodes/core/common/24-complete');
var catchNode = require('node_modules/@node-red/nodes/core/common/25-catch');
var statusNode = require('node_modules/@node-red/nodes/core/common/25-status');
var linkNode = require('node_modules/@node-red/nodes/core/common/60-link');
var commentNode = require('node_modules/@node-red/nodes/core/common/90-comment');
var unknownNode = require('node_modules/@node-red/nodes/core/common/98-unknown');
var tlsNode = require('node_modules/@node-red/nodes/core/network/05-tls');
var httpproxyNode = require('node_modules/@node-red/nodes/core/network/06-httpproxy');
var mqttNode = require('node_modules/@node-red/nodes/core/network/10-mqtt');
var httpinNode = require('node_modules/@node-red/nodes/core/network/21-httpin');
var httprequestNode = require('node_modules/@node-red/nodes/core/network/21-httprequest');
var websocketNode = require('node_modules/@node-red/nodes/core/network/22-websocket');
var tcpinNode = require('node_modules/@node-red/nodes/core/network/31-tcpin');
var udpNode = require('node_modules/@node-red/nodes/core/network/32-udp');
var csvNode = require('node_modules/@node-red/nodes/core/parsers/70-CSV');
var htmlNode = require('node_modules/@node-red/nodes/core/parsers/70-HTML');
var jsonNode = require('node_modules/@node-red/nodes/core/parsers/70-JSON');
var xmlNode = require('node_modules/@node-red/nodes/core/parsers/70-XML');
var yamlNode = require('node_modules/@node-red/nodes/core/parsers/70-YAML');
var splitNode = require('node_modules/@node-red/nodes/core/sequence/17-split');
var sortNode = require('node_modules/@node-red/nodes/core/sequence/18-sort');
var batchNode = require('node_modules/@node-red/nodes/core/sequence/19-batch');
var fileNode = require('@node-red/nodes/core/storage/10-file');
var watchNode = require('@node-red/nodes/core/storage/23-watch');
var _ = require('lodash');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var functionNode__default = /*#__PURE__*/_interopDefaultLegacy(functionNode);
var switchNode__default = /*#__PURE__*/_interopDefaultLegacy(switchNode);
var changeNode__default = /*#__PURE__*/_interopDefaultLegacy(changeNode);
var rangeNode__default = /*#__PURE__*/_interopDefaultLegacy(rangeNode);
var templateNode__default = /*#__PURE__*/_interopDefaultLegacy(templateNode);
var delayNode__default = /*#__PURE__*/_interopDefaultLegacy(delayNode);
var triggerNode__default = /*#__PURE__*/_interopDefaultLegacy(triggerNode);
var execNode__default = /*#__PURE__*/_interopDefaultLegacy(execNode);
var rbeNode__default = /*#__PURE__*/_interopDefaultLegacy(rbeNode);
var injectNode__default = /*#__PURE__*/_interopDefaultLegacy(injectNode);
var debugNode__default = /*#__PURE__*/_interopDefaultLegacy(debugNode);
var completeNode__default = /*#__PURE__*/_interopDefaultLegacy(completeNode);
var catchNode__default = /*#__PURE__*/_interopDefaultLegacy(catchNode);
var statusNode__default = /*#__PURE__*/_interopDefaultLegacy(statusNode);
var linkNode__default = /*#__PURE__*/_interopDefaultLegacy(linkNode);
var commentNode__default = /*#__PURE__*/_interopDefaultLegacy(commentNode);
var unknownNode__default = /*#__PURE__*/_interopDefaultLegacy(unknownNode);
var tlsNode__default = /*#__PURE__*/_interopDefaultLegacy(tlsNode);
var httpproxyNode__default = /*#__PURE__*/_interopDefaultLegacy(httpproxyNode);
var mqttNode__default = /*#__PURE__*/_interopDefaultLegacy(mqttNode);
var httpinNode__default = /*#__PURE__*/_interopDefaultLegacy(httpinNode);
var httprequestNode__default = /*#__PURE__*/_interopDefaultLegacy(httprequestNode);
var websocketNode__default = /*#__PURE__*/_interopDefaultLegacy(websocketNode);
var tcpinNode__default = /*#__PURE__*/_interopDefaultLegacy(tcpinNode);
var udpNode__default = /*#__PURE__*/_interopDefaultLegacy(udpNode);
var csvNode__default = /*#__PURE__*/_interopDefaultLegacy(csvNode);
var htmlNode__default = /*#__PURE__*/_interopDefaultLegacy(htmlNode);
var jsonNode__default = /*#__PURE__*/_interopDefaultLegacy(jsonNode);
var xmlNode__default = /*#__PURE__*/_interopDefaultLegacy(xmlNode);
var yamlNode__default = /*#__PURE__*/_interopDefaultLegacy(yamlNode);
var splitNode__default = /*#__PURE__*/_interopDefaultLegacy(splitNode);
var sortNode__default = /*#__PURE__*/_interopDefaultLegacy(sortNode);
var batchNode__default = /*#__PURE__*/_interopDefaultLegacy(batchNode);
var fileNode__default = /*#__PURE__*/_interopDefaultLegacy(fileNode);
var watchNode__default = /*#__PURE__*/_interopDefaultLegacy(watchNode);
var ___default = /*#__PURE__*/_interopDefaultLegacy(_);

//function node




class NodeLoader{
    nodeDict = {}
    constructor(){
        this.nodeDict = {
            function: functionNode__default["default"],
            switch: switchNode__default["default"],
            change: changeNode__default["default"],
            range: rangeNode__default["default"],
            template: templateNode__default["default"],
            delay: delayNode__default["default"],
            trigger: triggerNode__default["default"],
            exec: execNode__default["default"],
            rbe: rbeNode__default["default"],
            inject: injectNode__default["default"],
            debug: debugNode__default["default"],
            complete: completeNode__default["default"],
            catch: catchNode__default["default"],
            status: statusNode__default["default"],
            "link in": linkNode__default["default"],
            "link out": linkNode__default["default"],
            "link call": linkNode__default["default"],
            comment: commentNode__default["default"],
            unknown: unknownNode__default["default"],
            "tls-config": tlsNode__default["default"],
            "http proxy": httpproxyNode__default["default"],
            "mqtt-broker": mqttNode__default["default"],
            "mqtt in": mqttNode__default["default"],
            "mqtt out": mqttNode__default["default"],
            "http request": httprequestNode__default["default"],
            "http response": httpinNode__default["default"],
            "http in": httpinNode__default["default"],
            "websocket-listener": websocketNode__default["default"],
            "websocket-client": websocketNode__default["default"],
            "websocket out": websocketNode__default["default"],
            "websocket in": websocketNode__default["default"],
            "tcp in": tcpinNode__default["default"],
            "tcp out": tcpinNode__default["default"],
            "tcp request": tcpinNode__default["default"],
            "udp in": udpNode__default["default"],
            "udp out": udpNode__default["default"],
            csv: csvNode__default["default"],
            html: htmlNode__default["default"],
            json: jsonNode__default["default"],
            xml: xmlNode__default["default"],
            yaml: yamlNode__default["default"],
            split: splitNode__default["default"],
            join: splitNode__default["default"],
            sort: sortNode__default["default"],
            batch: batchNode__default["default"],
            file: fileNode__default["default"],
            "file in": fileNode__default["default"],
            watch: watchNode__default["default"],
        };
    }
    
    getNodeArray(fileString)
    {
        const flowData = JSON.parse(fileString);
        const condFunc = ___default["default"].cond([
            [
                (a) => ___default["default"].gt(a.length, 0),
                (a) => console.info(`[Node Loader] Missing custom node: ${a}`),
            ],
        ]);

        const checkInDict = (node) => (node in this.nodeDict);
        const nodeArray = ___default["default"].chain(flowData)
            .map((node) => node.type)
            .uniq()
            .filter(checkInDict)
            .uniq()
            .value()
            .map((node) => (this.nodeDict[node]));

        // console.log(nodeArray)

        const missingNode = ___default["default"].chain(flowData)
            .map((node) => node.type)
            .uniq()
            .filter(___default["default"].negate(checkInDict))
            .uniq()
            .value();

        condFunc(missingNode);
        return ___default["default"].uniq(nodeArray);
    }
    
    
    
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

    // return [...new Set(nodeArray)]
}
// module.exports = NodeLoader

exports.NodeLoader = NodeLoader;
