
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaLiveFeature, KalturaLiveFeatureArgs } from './KalturaLiveFeature';

export interface KalturaLiveRestreamFeatureArgs  extends KalturaLiveFeatureArgs {
    primaryUrl? : string;
	secondaryUrl? : string;
	playbackUrl? : string;
	streamKey? : string;
}


export class KalturaLiveRestreamFeature extends KalturaLiveFeature {

    primaryUrl : string;
	secondaryUrl : string;
	playbackUrl : string;
	streamKey : string;

    constructor(data? : KalturaLiveRestreamFeatureArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveRestreamFeature' },
				primaryUrl : { type : 's' },
				secondaryUrl : { type : 's' },
				playbackUrl : { type : 's' },
				streamKey : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLiveRestreamFeature',KalturaLiveRestreamFeature);
