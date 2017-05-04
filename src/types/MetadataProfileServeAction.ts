
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MetadataProfileServeActionArgs  extends KalturaRequestArgs {
    id : number;
}

/** 
* Serves metadata profile XSD file
**/
export class MetadataProfileServeAction extends KalturaRequest<string> {

    id : number;

    constructor(data : MetadataProfileServeActionArgs)
    {
        super(data, 'f', '');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'metadata_metadataprofile' },
				action : { type : 'c' , default : 'serve' },
				id : { type : 'n'  }
            }
        );
        return result;
    }
}

