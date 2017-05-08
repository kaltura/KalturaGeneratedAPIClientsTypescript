
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMetadataProfile } from './KalturaMetadataProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MetadataProfileGetActionArgs  extends KalturaRequestArgs {
    id : number;
}

/** 
* Retrieve a metadata profile object by id
**/
export class MetadataProfileGetAction extends KalturaRequest<KalturaMetadataProfile> {

    id : number;

    constructor(data : MetadataProfileGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaMetadataProfile', responseConstructor : KalturaMetadataProfile  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'metadata_metadataprofile' },
				action : { type : 'c', default : 'get' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

