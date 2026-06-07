
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDimensionsPercentage } from './KalturaDimensionsPercentage';
import { KalturaOverlayScaleBehavior } from './KalturaOverlayScaleBehavior';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaOverlayScaleAttributeArgs  extends KalturaObjectBaseArgs {
    scalePercentage? : KalturaDimensionsPercentage;
	scaleBehavior? : KalturaOverlayScaleBehavior;
}


export class KalturaOverlayScaleAttribute extends KalturaObjectBase {

    scalePercentage : KalturaDimensionsPercentage;
	scaleBehavior : KalturaOverlayScaleBehavior;

    constructor(data? : KalturaOverlayScaleAttributeArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaOverlayScaleAttribute' },
				scalePercentage : { type : 'o', subTypeConstructor : KalturaDimensionsPercentage, subType : 'KalturaDimensionsPercentage' },
				scaleBehavior : { type : 'en', subTypeConstructor : KalturaOverlayScaleBehavior, subType : 'KalturaOverlayScaleBehavior' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaOverlayScaleAttribute',KalturaOverlayScaleAttribute);
