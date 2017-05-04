
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MetadataDeleteActionArgs  extends KalturaRequestArgs {
    id : number;
}

/** 
* Delete an existing metadata
**/
export class MetadataDeleteAction extends KalturaRequest<void> {

    id : number;

    constructor(data : MetadataDeleteActionArgs)
    {
        super(data, 'v', '');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'metadata_metadata' },
				action : { type : 'c' , default : 'delete' },
				id : { type : 'n'  }
            }
        );
        return result;
    }
}

