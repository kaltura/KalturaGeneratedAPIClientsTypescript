
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaGeoCoderType } from './KalturaGeoCoderType';
import { KalturaStringField, KalturaStringFieldArgs } from './KalturaStringField';

export interface KalturaCountryContextFieldArgs  extends KalturaStringFieldArgs {
    geoCoderType? : KalturaGeoCoderType;
}

/** 
* Represents the current request country context as calculated based on the IP
* address
**/
export class KalturaCountryContextField extends KalturaStringField {

    geoCoderType : KalturaGeoCoderType;

    constructor(data? : KalturaCountryContextFieldArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaCountryContextField'  },
				geoCoderType : { type : 'es'   , subType : 'KalturaGeoCoderType'}
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCountryContextField',KalturaCountryContextField);
