
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseSyndicationFeed } from './KalturaBaseSyndicationFeed';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SyndicationFeedAddActionArgs  extends KalturaRequestArgs {
    syndicationFeed : KalturaBaseSyndicationFeed;
}

/** 
* Add new Syndication Feed
**/
export class SyndicationFeedAddAction extends KalturaRequest<KalturaBaseSyndicationFeed> {

    syndicationFeed : KalturaBaseSyndicationFeed;

    constructor(data : SyndicationFeedAddActionArgs)
    {
        super(data, 'o', 'KalturaBaseSyndicationFeed');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'syndicationfeed' },
				action : { type : 'c' , default : 'add' },
				syndicationFeed : { type : 'o'  , subType : 'KalturaBaseSyndicationFeed'}
            }
        );
        return result;
    }
}

