
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaServerNode } from './KalturaServerNode';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ServerNodeAddActionArgs  extends KalturaRequestArgs {
    serverNode : KalturaServerNode;
}

/** 
* Adds a server node to the Kaltura DB.
**/
export class ServerNodeAddAction extends KalturaRequest<KalturaServerNode> {

    serverNode : KalturaServerNode;

    constructor(data : ServerNodeAddActionArgs)
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
				action : { type : 'c' , default : 'add' },
				serverNode : { type : 'o'  , subType : 'KalturaServerNode'}
            }
        );
        return result;
    }
}

