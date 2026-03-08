
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaContentResource } from './KalturaContentResource';
import { KalturaMediaCompositionAttributes, KalturaMediaCompositionAttributesArgs } from './KalturaMediaCompositionAttributes';

export interface KalturaReplaceBackgroundAttributesArgs  extends KalturaMediaCompositionAttributesArgs {
    resource? : KalturaContentResource;
}


export class KalturaReplaceBackgroundAttributes extends KalturaMediaCompositionAttributes {

    resource : KalturaContentResource;

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
				resource : { type : 'o', subTypeConstructor : KalturaContentResource, subType : 'KalturaContentResource' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaReplaceBackgroundAttributes',KalturaReplaceBackgroundAttributes);
