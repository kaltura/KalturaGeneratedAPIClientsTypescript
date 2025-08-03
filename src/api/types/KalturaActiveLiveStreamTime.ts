
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaActiveLiveStreamTimeArgs  extends KalturaObjectBaseArgs {
    startTime? : number;
	endTime? : number;
}


export class KalturaActiveLiveStreamTime extends KalturaObjectBase {

    startTime : number;
	endTime : number;

    constructor(data? : KalturaActiveLiveStreamTimeArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaActiveLiveStreamTime' },
				startTime : { type : 'n' },
				endTime : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaActiveLiveStreamTime',KalturaActiveLiveStreamTime);
