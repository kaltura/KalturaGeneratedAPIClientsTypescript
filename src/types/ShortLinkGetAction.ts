
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaShortLink } from './KalturaShortLink';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ShortLinkGetActionArgs  extends KalturaRequestArgs {
    id : string;
}

/** 
* Retrieve an short link object by id
**/
export class ShortLinkGetAction extends KalturaRequest<KalturaShortLink> {

    id : string;

    constructor(data : ShortLinkGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaShortLink', responseConstructor : KalturaShortLink  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'shortlink_shortlink'  },
				action : { type : 'c' , default : 'get'  },
				id : { type : 's'   }
            }
        );
        return result;
    }
}

