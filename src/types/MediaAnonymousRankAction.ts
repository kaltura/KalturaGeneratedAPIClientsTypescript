
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MediaAnonymousRankActionArgs  extends KalturaRequestArgs {
    entryId : string;
	rank : number;
}

/** 
* Anonymously rank a media entry, no validation is done on duplicate rankings
**/
export class MediaAnonymousRankAction extends KalturaRequest<void> {

    entryId : string;
	rank : number;

    constructor(data : MediaAnonymousRankActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'media' },
				action : { type : 'c', default : 'anonymousRank' },
				entryId : { type : 's' },
				rank : { type : 'n' }
            }
        );
        return result;
    }
}

