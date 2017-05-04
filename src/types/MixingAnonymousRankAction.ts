
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MixingAnonymousRankActionArgs  extends KalturaRequestArgs {
    entryId : string;
	rank : number;
}

/** 
* Anonymously rank a mix entry, no validation is done on duplicate rankings
**/
export class MixingAnonymousRankAction extends KalturaRequest<void> {

    entryId : string;
	rank : number;

    constructor(data : MixingAnonymousRankActionArgs)
    {
        super(data, 'v', '');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'mixing' },
				action : { type : 'c' , default : 'anonymousRank' },
				entryId : { type : 's'  },
				rank : { type : 'n'  }
            }
        );
        return result;
    }
}

