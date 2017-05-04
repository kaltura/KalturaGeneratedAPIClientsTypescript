
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaServerNode } from './KalturaServerNode';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ServerNodeUpdateActionArgs  extends KalturaRequestArgs {
    serverNodeId : number;
	serverNode : KalturaServerNode;
}

/** 
* Update server node by id
**/
export class ServerNodeUpdateAction extends KalturaRequest<KalturaServerNode> {

    serverNodeId : number;
	serverNode : KalturaServerNode;

    constructor(data : ServerNodeUpdateActionArgs)
    {
        super(data, 'o', 'KalturaServerNode');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'servernode' },
				action : { type : 'c' , default : 'update' },
				serverNodeId : { type : 'n'  },
				serverNode : { type : 'o'  , subType : 'KalturaServerNode'}
            }
        );
        return result;
    }
}

