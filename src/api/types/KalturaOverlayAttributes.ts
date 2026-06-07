
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaContentResource } from './KalturaContentResource';
import { KalturaDimensionsPercentage } from './KalturaDimensionsPercentage';
import { KalturaOverlayScaleAttribute } from './KalturaOverlayScaleAttribute';
import { KalturaMediaCompositionAlignment } from './KalturaMediaCompositionAlignment';
import { KalturaOverlayShape } from './KalturaOverlayShape';
import { KalturaAudioAttributes } from './KalturaAudioAttributes';
import { KalturaMediaCompositionAttributes, KalturaMediaCompositionAttributesArgs } from './KalturaMediaCompositionAttributes';

export interface KalturaOverlayAttributesArgs  extends KalturaMediaCompositionAttributesArgs {
    resource? : KalturaContentResource;
	resourceMediaCompositionAttributesArray? : KalturaMediaCompositionAttributes[];
	marginsPercentage? : KalturaDimensionsPercentage;
	overlayScaleAttribute? : KalturaOverlayScaleAttribute;
	overlayPlacement? : KalturaMediaCompositionAlignment;
	overlayShape? : KalturaOverlayShape;
	audioAttributes? : KalturaAudioAttributes;
}


export class KalturaOverlayAttributes extends KalturaMediaCompositionAttributes {

    resource : KalturaContentResource;
	resourceMediaCompositionAttributesArray : KalturaMediaCompositionAttributes[];
	marginsPercentage : KalturaDimensionsPercentage;
	overlayScaleAttribute : KalturaOverlayScaleAttribute;
	overlayPlacement : KalturaMediaCompositionAlignment;
	overlayShape : KalturaOverlayShape;
	audioAttributes : KalturaAudioAttributes;

    constructor(data? : KalturaOverlayAttributesArgs)
    {
        super(data);
        if (typeof this.resourceMediaCompositionAttributesArray === 'undefined') this.resourceMediaCompositionAttributesArray = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaOverlayAttributes' },
				resource : { type : 'o', subTypeConstructor : KalturaContentResource, subType : 'KalturaContentResource' },
				resourceMediaCompositionAttributesArray : { type : 'a', subTypeConstructor : KalturaMediaCompositionAttributes, subType : 'KalturaMediaCompositionAttributes' },
				marginsPercentage : { type : 'o', subTypeConstructor : KalturaDimensionsPercentage, subType : 'KalturaDimensionsPercentage' },
				overlayScaleAttribute : { type : 'o', subTypeConstructor : KalturaOverlayScaleAttribute, subType : 'KalturaOverlayScaleAttribute' },
				overlayPlacement : { type : 'en', subTypeConstructor : KalturaMediaCompositionAlignment, subType : 'KalturaMediaCompositionAlignment' },
				overlayShape : { type : 'en', subTypeConstructor : KalturaOverlayShape, subType : 'KalturaOverlayShape' },
				audioAttributes : { type : 'o', subTypeConstructor : KalturaAudioAttributes, subType : 'KalturaAudioAttributes' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaOverlayAttributes',KalturaOverlayAttributes);
