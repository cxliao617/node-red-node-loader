//function node
import functionNode from 'node-red-nodes/core/function/10-function'
import switchNode from 'node-red-nodes/core/function/10-switch'
import changeNode from 'node-red-nodes/core/function/15-change'
import rangeNode from 'node-red-nodes/core/function/16-range'
import templateNode from 'node-red-nodes/core/function/80-template'
import delayNode from 'node-red-nodes/core/function/89-delay'
import triggerNode from 'node-red-nodes/core/function/89-trigger'
import execNode from 'node-red-nodes/core/function/90-exec'
import rbeNode from 'node-red-nodes/core/function/rbe'

//common node
import injectNode from 'node-red-nodes/core/common/20-inject'
import debugNode from 'node-red-nodes/core/common/21-debug'
import completeNode from 'node-red-nodes/core/common/24-complete'
import catchNode from 'node-red-nodes/core/common/25-catch'
import statusNode from 'node-red-nodes/core/common/25-status'
import linkNode from 'node-red-nodes/core/common/60-link'
import commentNode from 'node-red-nodes/core/common/90-comment'
import unknownNode from 'node-red-nodes/core/common/98-unknown'

//network node
import tlsNode from 'node-red-nodes/core/network/05-tls'
import httpproxyNode from 'node-red-nodes/core/network/06-httpproxy'
import mqttNode from 'node-red-nodes/core/network/10-mqtt'
import httpinNode from 'node-red-nodes/core/network/21-httpin'
import httprequestNode from 'node-red-nodes/core/network/21-httprequest'
import websocketNode from 'node-red-nodess/core/network/22-websocket'
import tcpinNode from 'node-red-nodes/core/network/31-tcpin'
import udpNode from 'node-red-nodes/core/network/32-udp'

//parser node
import csvNode from 'node-red-nodes/core/parsers/70-CSV'
import htmlNode from 'node-red-nodes/core/parsers/70-HTML'
import jsonNode from 'node-red-nodes/core/parsers/70-JSON'
import xmlNode from 'node-red-nodes/core/parsers/70-XML'
import yamlNode from 'node-red-nodes/core/parsers/70-YAML'

//sequence node
import splitNode from 'node-red-nodes/nodes/core/sequence/17-split'
import sortNode from 'node-red-nodes/nodes/core/sequence/18-sort'
import batchNode from 'node-red-nodes/nodes/core/sequence/19-batch'

//storage node
import fileNode from 'node-red-nodes/nodes/core/storage/10-file'
import watchNode from 'node-red-nodes/nodes/core/storage/23-watch'

class NodeLoader {
    nodeDict = {}
    constructor() {
        this.nodeDict = {
            "function": functionNode,
            "switch": switchNode,
            "change": changeNode,
            "range": rangeNode,
            "template": templateNode,
            "delay":delayNode,
            "trigger":triggerNode,
            "exec":execNode,
            "rbe":rbeNode,
            "inject":injectNode,
            "debug":debugNode,
            "complete":completeNode,
            "catch":catchNode,
            "status":statusNode,
            "link in":linkNode,
            "link out":linkNode,
            "link call":linkNode,
            "comment":commentNode,
            "unknown":unknownNode,
            "tls-config":tlsNode,
            "http proxy":httpproxyNode,
            "mqtt-broker": mqttNode,
            "mqtt in":mqttNode,
            "mqtt out":mqttNode,
            "http request":httprequestNode,
            "http response":httpinNode,
            "http in":httpinNode,
            "websocket-listener":websocketNode,
            "websocket-client":websocketNode,
            "websocket out":websocketNode,
            "websocket in":websocketNode,
            "tcp in":tcpinNode,
            "tcp out":tcpinNode,
            "tcp request": tcpinNode,
            "udp in":udpNode,
            "udp out":udpNode,
            "csv":csvNode,
            "html":htmlNode,
            "json":jsonNode,
            "xml":xmlNode,
            "yaml":yamlNode,
            "split":splitNode,
            "join":splitNode,
            "sort":sortNode,
            "batch":batchNode,
            "file":fileNode,
            "file in":fileNode,
            "watch": watchNode
        }
    }
    getNodeArray(fileString)
    {
        const flowData = JSON.parse(fileString)
        const originalNodeTypeArray = flowData.map((node)=>(node.type))
        const uniqleNodeTypeArray = [...new Set(originalNodeTypeArray)]
        let nodeArray = []
        uniqleNodeTypeArray.forEach((node)=>
        {
            if(this.nodeDict[node]!==undefined)
            {
                nodeArray.push(this.nodeDict[node])
            }
            else
            {
                console.info(`[Node Loader WARNING] ${node} cannot find!!`)
            }
        }
        )
        const uniqleNodeArray = [...new Set(nodeArray)]
        return uniqleNodeArray
    }
}

module.exports = NodeLoader