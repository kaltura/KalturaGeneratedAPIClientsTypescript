
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ShortLinkGotoActionArgs  extends KalturaRequestArgs {
    id : string;
	proxy? : boolean;
}

/** 
* Serves short link
**/
export class ShortLinkGotoAction extends KalturaRequest<string> {

    id : string;
	proxy : boolean;

    constructor(data : ShortLinkGotoActionArgs)
    {
        super(data, 'f', '');
        if (typeof this.proxy === 'undefined') this.proxy = false;
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'shortlink_shortlink' },
				action : { type : 'c' , default : 'goto' },
				id : { type : 's'  },
				proxy : { type : 'b'  }
            }
        );
        return result;
    }
}

