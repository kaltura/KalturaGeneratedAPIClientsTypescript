
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCuePoint, KalturaCuePointArgs } from './KalturaCuePoint';

export interface KalturaSessionCuePointArgs  extends KalturaCuePointArgs {
    name? : string;
	endTime? : number;
	sessionOwner? : string;
}


export class KalturaSessionCuePoint extends KalturaCuePoint {

    name : string;
	endTime : number;
	readonly duration : number;
	sessionOwner : string;

    constructor(data? : KalturaSessionCuePointArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSessionCuePoint' },
				name : { type : 's' },
				endTime : { type : 'n' },
				duration : { type : 'n', readOnly : true },
				sessionOwner : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSessionCuePoint',KalturaSessionCuePoint);
