
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaContentResource } from './KalturaContentResource';
import { KalturaMediaCompositionAttributes, KalturaMediaCompositionAttributesArgs } from './KalturaMediaCompositionAttributes';

export interface KalturaOverlayAttributesArgs  extends KalturaMediaCompositionAttributesArgs {
    resource? : KalturaContentResource;
	resourceMediaCompositionAttributesArray? : KalturaMediaCompositionAttributes[];
}


export class KalturaOverlayAttributes extends KalturaMediaCompositionAttributes {

    resource : KalturaContentResource;
	resourceMediaCompositionAttributesArray : KalturaMediaCompositionAttributes[];

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
				resourceMediaCompositionAttributesArray : { type : 'a', subTypeConstructor : KalturaMediaCompositionAttributes, subType : 'KalturaMediaCompositionAttributes' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaOverlayAttributes',KalturaOverlayAttributes);
