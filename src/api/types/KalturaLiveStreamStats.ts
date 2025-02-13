
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaLiveStreamStatsArgs  extends KalturaObjectBaseArgs {
    liveViewers? : number;
}


export class KalturaLiveStreamStats extends KalturaObjectBase {

    liveViewers : number;

    constructor(data? : KalturaLiveStreamStatsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveStreamStats' },
				liveViewers : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLiveStreamStats',KalturaLiveStreamStats);
