
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaDimensionsPercentageArgs  extends KalturaObjectBaseArgs {
    heightPercentage? : number;
	widthPercentage? : number;
}


export class KalturaDimensionsPercentage extends KalturaObjectBase {

    heightPercentage : number;
	widthPercentage : number;

    constructor(data? : KalturaDimensionsPercentageArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDimensionsPercentage' },
				heightPercentage : { type : 'n' },
				widthPercentage : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDimensionsPercentage',KalturaDimensionsPercentage);
