import NodeCache from "node-cache";


let cacheClient = null;
export default function () {
    if(!cacheClient) {
        cacheClient = new NodeCache()
    }

    return cacheClient
}


