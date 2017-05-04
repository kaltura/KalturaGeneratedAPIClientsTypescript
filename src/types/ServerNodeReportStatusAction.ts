
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaServerNode } from './KalturaServerNode';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ServerNodeReportStatusActionArgs  extends KalturaRequestArgs {
    hostName : string;
	serverNode? : KalturaServerNode;
}

/** 
* Update server node status
**/
export class ServerNodeReportStatusAction extends KalturaRequest<KalturaServerNode> {

    hostName : string;
	serverNode : KalturaServerNode;

    constructor(data : ServerNodeReportStatusActionArgs)
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
				action : { type : 'c' , default : 'reportStatus' },
				hostName : { type : 's'  },
				serverNode : { type : 'o'  , subType : 'KalturaServerNode'}
            }
        );
        return result;
    }
}

