
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaLiveClusterMediaServerNodeBaseFilter, KalturaLiveClusterMediaServerNodeBaseFilterArgs } from './KalturaLiveClusterMediaServerNodeBaseFilter';

export interface KalturaLiveClusterMediaServerNodeFilterArgs  extends KalturaLiveClusterMediaServerNodeBaseFilterArgs {
    
}


export class KalturaLiveClusterMediaServerNodeFilter extends KalturaLiveClusterMediaServerNodeBaseFilter {

    

    constructor(data? : KalturaLiveClusterMediaServerNodeFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveClusterMediaServerNodeFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLiveClusterMediaServerNodeFilter',KalturaLiveClusterMediaServerNodeFilter);
