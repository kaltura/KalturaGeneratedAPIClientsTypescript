
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface BaseEntryAnonymousRankActionArgs  extends KalturaRequestArgs {
    entryId : string;
	rank : number;
}

/** 
* Anonymously rank an entry, no validation is done on duplicate rankings.
**/
export class BaseEntryAnonymousRankAction extends KalturaRequest<void> {

    entryId : string;
	rank : number;

    constructor(data : BaseEntryAnonymousRankActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'baseentry' },
				action : { type : 'c', default : 'anonymousRank' },
				entryId : { type : 's' },
				rank : { type : 'n' }
            }
        );
        return result;
    }
}

