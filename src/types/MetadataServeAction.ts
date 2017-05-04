
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MetadataServeActionArgs  extends KalturaRequestArgs {
    id : number;
}

/** 
* Serves metadata XML file
**/
export class MetadataServeAction extends KalturaRequest<string> {

    id : number;

    constructor(data : MetadataServeActionArgs)
    {
        super(data, 'f', '');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'metadata_metadata' },
				action : { type : 'c' , default : 'serve' },
				id : { type : 'n'  }
            }
        );
        return result;
    }
}

