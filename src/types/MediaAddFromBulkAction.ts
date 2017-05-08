
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaEntry } from './KalturaMediaEntry';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MediaAddFromBulkActionArgs  extends KalturaRequestArgs {
    mediaEntry : KalturaMediaEntry;
	url : string;
	bulkUploadId : number;
}

/** 
* Adds new media entry by importing an HTTP or FTP URL.   The entry will be queued
* for import and then for conversion.   This action should be exposed only to the
* batches
**/
export class MediaAddFromBulkAction extends KalturaRequest<KalturaMediaEntry> {

    mediaEntry : KalturaMediaEntry;
	url : string;
	bulkUploadId : number;

    constructor(data : MediaAddFromBulkActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaMediaEntry', responseConstructor : KalturaMediaEntry  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'media'  },
				action : { type : 'c' , default : 'addFromBulk'  },
				mediaEntry : { type : 'o'   , fallbackConstructor :  KalturaMediaEntry, subType : 'KalturaMediaEntry'},
				url : { type : 's'   },
				bulkUploadId : { type : 'n'   }
            }
        );
        return result;
    }
}

