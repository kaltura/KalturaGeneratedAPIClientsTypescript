
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaCropAspectRatioArgs  extends KalturaObjectBaseArgs {
    crop? : boolean;
	aspectRatio? : number;
}


export class KalturaCropAspectRatio extends KalturaObjectBase {

    crop : boolean;
	aspectRatio : number;

    constructor(data? : KalturaCropAspectRatioArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCropAspectRatio' },
				crop : { type : 'b' },
				aspectRatio : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCropAspectRatio',KalturaCropAspectRatio);
