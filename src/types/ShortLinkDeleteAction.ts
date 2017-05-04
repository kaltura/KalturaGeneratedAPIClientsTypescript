
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaShortLink } from './KalturaShortLink';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ShortLinkDeleteActionArgs  extends KalturaRequestArgs {
    id : string;
}

/** 
* Mark the short link as deleted
**/
export class ShortLinkDeleteAction extends KalturaRequest<KalturaShortLink> {

    id : string;

    constructor(data : ShortLinkDeleteActionArgs)
    {
        super(data, 'o', 'KalturaShortLink');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'shortlink_shortlink' },
				action : { type : 'c' , default : 'delete' },
				id : { type : 's'  }
            }
        );
        return result;
    }
}

