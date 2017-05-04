
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaEntry } from './KalturaMediaEntry';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EmailIngestionProfileAddMediaEntryActionArgs  extends KalturaRequestArgs {
    mediaEntry : KalturaMediaEntry;
	uploadTokenId : string;
	emailProfId : number;
	fromAddress : string;
	emailMsgId : string;
}

/** 
* add KalturaMediaEntry from email ingestion
**/
export class EmailIngestionProfileAddMediaEntryAction extends KalturaRequest<KalturaMediaEntry> {

    mediaEntry : KalturaMediaEntry;
	uploadTokenId : string;
	emailProfId : number;
	fromAddress : string;
	emailMsgId : string;

    constructor(data : EmailIngestionProfileAddMediaEntryActionArgs)
    {
        super(data, 'o', 'KalturaMediaEntry');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'emailingestionprofile' },
				action : { type : 'c' , default : 'addMediaEntry' },
				mediaEntry : { type : 'o'  , subType : 'KalturaMediaEntry'},
				uploadTokenId : { type : 's'  },
				emailProfId : { type : 'n'  },
				fromAddress : { type : 's'  },
				emailMsgId : { type : 's'  }
            }
        );
        return result;
    }
}

