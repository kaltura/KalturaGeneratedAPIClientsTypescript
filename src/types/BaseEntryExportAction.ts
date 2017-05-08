
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseEntry } from './KalturaBaseEntry';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface BaseEntryExportActionArgs  extends KalturaRequestArgs {
    entryId : string;
	storageProfileId : number;
}


export class BaseEntryExportAction extends KalturaRequest<KalturaBaseEntry> {

    entryId : string;
	storageProfileId : number;

    constructor(data : BaseEntryExportActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaBaseEntry', responseConstructor : KalturaBaseEntry  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'baseentry'  },
				action : { type : 'c' , default : 'export'  },
				entryId : { type : 's'   },
				storageProfileId : { type : 'n'   }
            }
        );
        return result;
    }
}

