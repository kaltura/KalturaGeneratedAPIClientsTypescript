
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaShortLink } from './KalturaShortLink';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ShortLinkUpdateActionArgs  extends KalturaRequestArgs {
    id : string;
	shortLink : KalturaShortLink;
}

/** 
* Update exisitng short link
**/
export class ShortLinkUpdateAction extends KalturaRequest<KalturaShortLink> {

    id : string;
	shortLink : KalturaShortLink;

    constructor(data : ShortLinkUpdateActionArgs)
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
				action : { type : 'c' , default : 'update' },
				id : { type : 's'  },
				shortLink : { type : 'o'  , subType : 'KalturaShortLink'}
            }
        );
        return result;
    }
}

