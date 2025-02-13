
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaEndpointValidationResponseArgs  extends KalturaObjectBaseArgs {
    plainToken? : string;
	encryptedToken? : string;
}


export class KalturaEndpointValidationResponse extends KalturaObjectBase {

    plainToken : string;
	encryptedToken : string;

    constructor(data? : KalturaEndpointValidationResponseArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEndpointValidationResponse' },
				plainToken : { type : 's' },
				encryptedToken : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEndpointValidationResponse',KalturaEndpointValidationResponse);
