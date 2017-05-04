
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MetadataProfileServeViewActionArgs  extends KalturaRequestArgs {
    id : number;
}

/** 
* Serves metadata profile view file
**/
export class MetadataProfileServeViewAction extends KalturaRequest<string> {

    id : number;

    constructor(data : MetadataProfileServeViewActionArgs)
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
				action : { type : 'c' , default : 'serveView' },
				id : { type : 'n'  }
            }
        );
        return result;
    }
}

