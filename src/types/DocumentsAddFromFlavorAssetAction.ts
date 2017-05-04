
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDocumentEntry } from './KalturaDocumentEntry';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DocumentsAddFromFlavorAssetActionArgs  extends KalturaRequestArgs {
    sourceFlavorAssetId : string;
	documentEntry? : KalturaDocumentEntry;
}

/** 
* Copy flavor asset into new entry
**/
export class DocumentsAddFromFlavorAssetAction extends KalturaRequest<KalturaDocumentEntry> {

    sourceFlavorAssetId : string;
	documentEntry : KalturaDocumentEntry;

    constructor(data : DocumentsAddFromFlavorAssetActionArgs)
    {
        super(data, 'o', 'KalturaDocumentEntry');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'document_documents' },
				action : { type : 'c' , default : 'addFromFlavorAsset' },
				sourceFlavorAssetId : { type : 's'  },
				documentEntry : { type : 'o'  , subType : 'KalturaDocumentEntry'}
            }
        );
        return result;
    }
}

