
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaContentResource } from './KalturaContentResource';
import { KalturaPosition } from './KalturaPosition';
import { KalturaMediaCompositionAttributes, KalturaMediaCompositionAttributesArgs } from './KalturaMediaCompositionAttributes';

export interface KalturaReplaceBackgroundAttributesArgs  extends KalturaMediaCompositionAttributesArgs {
    resource? : KalturaContentResource;
	backgroundColorCode? : string;
	foregroundScalePercentage? : number;
	foregroundPositionPercentage? : KalturaPosition;
}


export class KalturaReplaceBackgroundAttributes extends KalturaMediaCompositionAttributes {

    resource : KalturaContentResource;
	backgroundColorCode : string;
	foregroundScalePercentage : number;
	foregroundPositionPercentage : KalturaPosition;

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
				foregroundPositionPercentage : { type : 'o', subTypeConstructor : KalturaPosition, subType : 'KalturaPosition' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaReplaceBackgroundAttributes',KalturaReplaceBackgroundAttributes);
