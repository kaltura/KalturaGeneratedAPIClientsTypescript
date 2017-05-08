
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDocumentEntry } from './KalturaDocumentEntry';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DocumentsApproveReplaceActionArgs  extends KalturaRequestArgs {
    entryId : string;
}

/** 
* Approves document replacement
**/
export class DocumentsApproveReplaceAction extends KalturaRequest<KalturaDocumentEntry> {

    entryId : string;

    constructor(data : DocumentsApproveReplaceActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaDocumentEntry', responseConstructor : KalturaDocumentEntry  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'document_documents' },
				action : { type : 'c', default : 'approveReplace' },
				entryId : { type : 's' }
            }
        );
        return result;
    }
}

