
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaShortLink } from './KalturaShortLink';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ShortLinkAddActionArgs  extends KalturaRequestArgs {
    shortLink : KalturaShortLink;
}

/** 
* Allows you to add a short link object
**/
export class ShortLinkAddAction extends KalturaRequest<KalturaShortLink> {

    shortLink : KalturaShortLink;

    constructor(data : ShortLinkAddActionArgs)
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
				action : { type : 'c' , default : 'add' },
				shortLink : { type : 'o'  , subType : 'KalturaShortLink'}
            }
        );
        return result;
    }
}

