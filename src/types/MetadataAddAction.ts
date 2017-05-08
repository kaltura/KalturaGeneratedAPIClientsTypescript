
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMetadata } from './KalturaMetadata';

import { KalturaMetadataObjectType } from './KalturaMetadataObjectType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MetadataAddActionArgs  extends KalturaRequestArgs {
    metadataProfileId : number;
	objectType : KalturaMetadataObjectType;
	objectId : string;
	xmlData : string;
}

/** 
* Allows you to add a metadata object and metadata content associated with Kaltura
* object
**/
export class MetadataAddAction extends KalturaRequest<KalturaMetadata> {

    metadataProfileId : number;
	objectType : KalturaMetadataObjectType;
	objectId : string;
	xmlData : string;

    constructor(data : MetadataAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaMetadata', responseConstructor : KalturaMetadata  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'metadata_metadata'  },
				action : { type : 'c' , default : 'add'  },
				metadataProfileId : { type : 'n'   },
				objectType : { type : 'es'   , subType : 'KalturaMetadataObjectType'},
				objectId : { type : 's'   },
				xmlData : { type : 's'   }
            }
        );
        return result;
    }
}

