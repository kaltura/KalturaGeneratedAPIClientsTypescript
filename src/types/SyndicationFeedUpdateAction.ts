
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseSyndicationFeed } from './KalturaBaseSyndicationFeed';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SyndicationFeedUpdateActionArgs  extends KalturaRequestArgs {
    id : string;
	syndicationFeed : KalturaBaseSyndicationFeed;
}

/** 
* Update Syndication Feed by ID
**/
export class SyndicationFeedUpdateAction extends KalturaRequest<KalturaBaseSyndicationFeed> {

    id : string;
	syndicationFeed : KalturaBaseSyndicationFeed;

    constructor(data : SyndicationFeedUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaBaseSyndicationFeed', responseConstructor : KalturaBaseSyndicationFeed  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'syndicationfeed' },
				action : { type : 'c', default : 'update' },
				id : { type : 's' },
				syndicationFeed : { type : 'o', subTypeConstructor : KalturaBaseSyndicationFeed, subType : 'KalturaBaseSyndicationFeed' }
            }
        );
        return result;
    }
}

