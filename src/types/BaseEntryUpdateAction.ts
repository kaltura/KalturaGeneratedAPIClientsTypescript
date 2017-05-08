
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseEntry } from './KalturaBaseEntry';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface BaseEntryUpdateActionArgs  extends KalturaRequestArgs {
    entryId : string;
	baseEntry : KalturaBaseEntry;
}

/** 
* Update base entry. Only the properties that were set will be updated.
**/
export class BaseEntryUpdateAction extends KalturaRequest<KalturaBaseEntry> {

    entryId : string;
	baseEntry : KalturaBaseEntry;

    constructor(data : BaseEntryUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaBaseEntry', responseConstructor : KalturaBaseEntry  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'baseentry' },
				action : { type : 'c', default : 'update' },
				entryId : { type : 's' },
				baseEntry : { type : 'o', subTypeConstructor : KalturaBaseEntry, subType : 'KalturaBaseEntry' }
            }
        );
        return result;
    }
}

