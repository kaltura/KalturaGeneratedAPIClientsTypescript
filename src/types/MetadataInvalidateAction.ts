
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MetadataInvalidateActionArgs  extends KalturaRequestArgs {
    id : number;
	version? : number;
}

/** 
* Mark existing metadata as invalid   Used by batch metadata transform
**/
export class MetadataInvalidateAction extends KalturaRequest<void> {

    id : number;
	version : number;

    constructor(data : MetadataInvalidateActionArgs)
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
				action : { type : 'c' , default : 'invalidate' },
				id : { type : 'n'  },
				version : { type : 'n'  }
            }
        );
        return result;
    }
}

