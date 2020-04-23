
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaMediaServerNode, KalturaMediaServerNodeArgs } from './KalturaMediaServerNode';

export interface KalturaLiveClusterMediaServerNodeArgs  extends KalturaMediaServerNodeArgs {
    
}


export class KalturaLiveClusterMediaServerNode extends KalturaMediaServerNode {

    

    constructor(data? : KalturaLiveClusterMediaServerNodeArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveClusterMediaServerNode' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLiveClusterMediaServerNode',KalturaLiveClusterMediaServerNode);
