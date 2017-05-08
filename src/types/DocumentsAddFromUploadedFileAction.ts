
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDocumentEntry } from './KalturaDocumentEntry';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DocumentsAddFromUploadedFileActionArgs  extends KalturaRequestArgs {
    documentEntry : KalturaDocumentEntry;
	uploadTokenId : string;
}

/** 
* Add new document entry after the specific document file was uploaded and the
* upload token id exists
**/
export class DocumentsAddFromUploadedFileAction extends KalturaRequest<KalturaDocumentEntry> {

    documentEntry : KalturaDocumentEntry;
	uploadTokenId : string;

    constructor(data : DocumentsAddFromUploadedFileActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaDocumentEntry', responseConstructor : KalturaDocumentEntry  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'document_documents'  },
				action : { type : 'c' , default : 'addFromUploadedFile'  },
				documentEntry : { type : 'o'   , fallbackConstructor :  KalturaDocumentEntry, subType : 'KalturaDocumentEntry'},
				uploadTokenId : { type : 's'   }
            }
        );
        return result;
    }
}

