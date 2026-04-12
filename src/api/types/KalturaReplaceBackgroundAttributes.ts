
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaContentResource } from './KalturaContentResource';
import { KalturaPosition } from './KalturaPosition';
import { KalturaAudioAttributes } from './KalturaAudioAttributes';
import { KalturaMediaCompositionAttributes, KalturaMediaCompositionAttributesArgs } from './KalturaMediaCompositionAttributes';

export interface KalturaReplaceBackgroundAttributesArgs  extends KalturaMediaCompositionAttributesArgs {
    resource? : KalturaContentResource;
	backgroundColorCode? : string;
	foregroundScalePercentage? : number;
	foregroundPositionPercentage? : KalturaPosition;
	audioAttributes? : KalturaAudioAttributes;
}


export class KalturaReplaceBackgroundAttributes extends KalturaMediaCompositionAttributes {

    resource : KalturaContentResource;
	backgroundColorCode : string;
	foregroundScalePercentage : number;
	foregroundPositionPercentage : KalturaPosition;
	audioAttributes : KalturaAudioAttributes;

    constructor(data? : KalturaReplaceBackgroundAttributesArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaReplaceBackgroundAttributes' },
				resource : { type : 'o', subTypeConstructor : KalturaContentResource, subType : 'KalturaContentResource' },
				backgroundColorCode : { type : 's' },
				foregroundScalePercentage : { type : 'n' },
				foregroundPositionPercentage : { type : 'o', subTypeConstructor : KalturaPosition, subType : 'KalturaPosition' },
				audioAttributes : { type : 'o', subTypeConstructor : KalturaAudioAttributes, subType : 'KalturaAudioAttributes' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaReplaceBackgroundAttributes',KalturaReplaceBackgroundAttributes);
