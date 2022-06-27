
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaLiveFeatureArgs  extends KalturaObjectBaseArgs {
    systemName? : string;
	preStartTime? : number;
	postEndTime? : number;
}


export class KalturaLiveFeature extends KalturaObjectBase {

    systemName : string;
	preStartTime : number;
	postEndTime : number;

    constructor(data? : KalturaLiveFeatureArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveFeature' },
				systemName : { type : 's' },
				preStartTime : { type : 'n' },
				postEndTime : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLiveFeature',KalturaLiveFeature);
