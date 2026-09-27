
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaConfigurableDistributionProfile, KalturaConfigurableDistributionProfileArgs } from './KalturaConfigurableDistributionProfile';

export interface KalturaRainFocusDistributionProfileArgs  extends KalturaConfigurableDistributionProfileArgs {
    oauthTokenUrl? : string;
	videoPublishEndpointUrl? : string;
	oauthScope? : string;
	clientId? : string;
	clientSecretPrimary? : string;
	clientSecretSecondary? : string;
	activeSecret? : string;
	mediaType? : number;
	playerId? : string;
	metadataProfileId? : string;
	metadataFieldNames? : string;
}


export class KalturaRainFocusDistributionProfile extends KalturaConfigurableDistributionProfile {

    oauthTokenUrl : string;
	videoPublishEndpointUrl : string;
	oauthScope : string;
	clientId : string;
	clientSecretPrimary : string;
	clientSecretSecondary : string;
	activeSecret : string;
	mediaType : number;
	playerId : string;
	metadataProfileId : string;
	metadataFieldNames : string;

    constructor(data? : KalturaRainFocusDistributionProfileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRainFocusDistributionProfile' },
				oauthTokenUrl : { type : 's' },
				videoPublishEndpointUrl : { type : 's' },
				oauthScope : { type : 's' },
				clientId : { type : 's' },
				clientSecretPrimary : { type : 's' },
				clientSecretSecondary : { type : 's' },
				activeSecret : { type : 's' },
				mediaType : { type : 'n' },
				playerId : { type : 's' },
				metadataProfileId : { type : 's' },
				metadataFieldNames : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaRainFocusDistributionProfile',KalturaRainFocusDistributionProfile);
