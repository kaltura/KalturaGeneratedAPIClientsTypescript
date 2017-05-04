
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DocumentsDeleteActionArgs  extends KalturaRequestArgs {
    entryId : string;
}

/** 
* Delete a document entry.
**/
export class DocumentsDeleteAction extends KalturaRequest<void> {

    entryId : string;

    constructor(data : DocumentsDeleteActionArgs)
    {
        super(data, 'v', '');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'document_documents' },
				action : { type : 'c' , default : 'delete' },
				entryId : { type : 's'  }
            }
        );
        return result;
    }
}

