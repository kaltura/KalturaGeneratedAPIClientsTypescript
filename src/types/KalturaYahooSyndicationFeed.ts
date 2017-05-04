
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaYahooSyndicationFeedCategories } from './KalturaYahooSyndicationFeedCategories';
import { KalturaYahooSyndicationFeedAdultValues } from './KalturaYahooSyndicationFeedAdultValues';
import { KalturaBaseSyndicationFeed, KalturaBaseSyndicationFeedArgs } from './KalturaBaseSyndicationFeed';

export interface KalturaYahooSyndicationFeedArgs  extends KalturaBaseSyndicationFeedArgs {
    adultContent? : KalturaYahooSyndicationFeedAdultValues;
	feedDescription? : string;
	feedLandingPage? : string;
}


export class KalturaYahooSyndicationFeed extends KalturaBaseSyndicationFeed {

    readonly category : KalturaYahooSyndicationFeedCategories;
	adultContent : KalturaYahooSyndicationFeedAdultValues;
	feedDescription : string;
	feedLandingPage : string;

    constructor(data? : KalturaYahooSyndicationFeedArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaYahooSyndicationFeed' },
				category : { type : 'es'  , readOnly : true, subType : 'KalturaYahooSyndicationFeedCategories'},
				adultContent : { type : 'es'  , subType : 'KalturaYahooSyndicationFeedAdultValues'},
				feedDescription : { type : 's'  },
				feedLandingPage : { type : 's'  }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaYahooSyndicationFeed',KalturaYahooSyndicationFeed);
