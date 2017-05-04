
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseEntry } from './KalturaBaseEntry';

import { KalturaEntryType } from './KalturaEntryType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface BaseEntryAddFromUploadedFileActionArgs  extends KalturaRequestArgs {
    entry : KalturaBaseEntry;
	uploadTokenId : string;
	type? : KalturaEntryType;
}

/** 
* Generic add entry using an uploaded file, should be used when the uploaded entry
* type is not known.
**/
export class BaseEntryAddFromUploadedFileAction extends KalturaRequest<KalturaBaseEntry> {

    entry : KalturaBaseEntry;
	uploadTokenId : string;
	type : KalturaEntryType;

    constructor(data : BaseEntryAddFromUploadedFileActionArgs)
    {
        super(data, 'o', 'KalturaBaseEntry');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'baseentry' },
				action : { type : 'c' , default : 'addFromUploadedFile' },
				entry : { type : 'o'  , subType : 'KalturaBaseEntry'},
				uploadTokenId : { type : 's'  },
				type : { type : 'es'  , subType : 'KalturaEntryType'}
            }
        );
        return result;
    }
}

