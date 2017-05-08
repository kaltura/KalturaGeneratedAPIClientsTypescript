
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBaseSyndicationFeed, KalturaBaseSyndicationFeedArgs } from './KalturaBaseSyndicationFeed';

export interface KalturaGenericSyndicationFeedArgs  extends KalturaBaseSyndicationFeedArgs {
    feedDescription? : string;
	feedLandingPage? : string;
}


export class KalturaGenericSyndicationFeed extends KalturaBaseSyndicationFeed {

    feedDescription : string;
	feedLandingPage : string;

    constructor(data? : KalturaGenericSyndicationFeedArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaGenericSyndicationFeed'  },
				feedDescription : { type : 's'   },
				feedLandingPage : { type : 's'   }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaGenericSyndicationFeed',KalturaGenericSyndicationFeed);
