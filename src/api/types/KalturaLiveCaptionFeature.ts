
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaLiveFeature, KalturaLiveFeatureArgs } from './KalturaLiveFeature';

export interface KalturaLiveCaptionFeatureArgs  extends KalturaLiveFeatureArgs {
    mediaUrl? : string;
	mediaKey? : string;
	captionUrl? : string;
	captionToken? : string;
	inputDelay? : number;
	captionFormat? : string;
	language? : string;
}


export class KalturaLiveCaptionFeature extends KalturaLiveFeature {

    mediaUrl : string;
	mediaKey : string;
	captionUrl : string;
	captionToken : string;
	inputDelay : number;
	captionFormat : string;
	language : string;

    constructor(data? : KalturaLiveCaptionFeatureArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveCaptionFeature' },
				mediaUrl : { type : 's' },
				mediaKey : { type : 's' },
				captionUrl : { type : 's' },
				captionToken : { type : 's' },
				inputDelay : { type : 'n' },
				captionFormat : { type : 's' },
				language : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLiveCaptionFeature',KalturaLiveCaptionFeature);
