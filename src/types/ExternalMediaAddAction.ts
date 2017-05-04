
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaExternalMediaEntry } from './KalturaExternalMediaEntry';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ExternalMediaAddActionArgs  extends KalturaRequestArgs {
    entry : KalturaExternalMediaEntry;
}

/** 
* Add external media entry
**/
export class ExternalMediaAddAction extends KalturaRequest<KalturaExternalMediaEntry> {

    entry : KalturaExternalMediaEntry;

    constructor(data : ExternalMediaAddActionArgs)
    {
        super(data, 'o', 'KalturaExternalMediaEntry');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'externalmedia_externalmedia' },
				action : { type : 'c' , default : 'add' },
				entry : { type : 'o'  , subType : 'KalturaExternalMediaEntry'}
            }
        );
        return result;
    }
}

