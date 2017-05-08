
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaEntry } from './KalturaMediaEntry';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MediaAddActionArgs  extends KalturaRequestArgs {
    entry : KalturaMediaEntry;
}

/** 
* Add entry
**/
export class MediaAddAction extends KalturaRequest<KalturaMediaEntry> {

    entry : KalturaMediaEntry;

    constructor(data : MediaAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaMediaEntry', responseConstructor : KalturaMediaEntry  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'media' },
				action : { type : 'c', default : 'add' },
				entry : { type : 'o', subTypeConstructor : KalturaMediaEntry, subType : 'KalturaMediaEntry' }
            }
        );
        return result;
    }
}

