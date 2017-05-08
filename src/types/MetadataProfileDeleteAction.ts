
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MetadataProfileDeleteActionArgs  extends KalturaRequestArgs {
    id : number;
}

/** 
* Delete an existing metadata profile
**/
export class MetadataProfileDeleteAction extends KalturaRequest<void> {

    id : number;

    constructor(data : MetadataProfileDeleteActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'metadata_metadataprofile'  },
				action : { type : 'c' , default : 'delete'  },
				id : { type : 'n'   }
            }
        );
        return result;
    }
}

