
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface BulkUploadServeLogActionArgs  extends KalturaRequestArgs {
    id : number;
}

/** 
* serveLog action returan the original file.
**/
export class BulkUploadServeLogAction extends KalturaRequest<string> {

    id : number;

    constructor(data : BulkUploadServeLogActionArgs)
    {
        super(data, 'f', '');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'bulkupload' },
				action : { type : 'c' , default : 'serveLog' },
				id : { type : 'n'  }
            }
        );
        return result;
    }
}

