
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaIntegrationSetting, KalturaIntegrationSettingArgs } from './KalturaIntegrationSetting';

export interface KalturaMicrosoftTeamsIntegrationSettingArgs  extends KalturaIntegrationSettingArgs {
    clientSecret? : string;
	clientId? : string;
	userMetadataProfileId? : number;
	scopes? : string;
}


export class KalturaMicrosoftTeamsIntegrationSetting extends KalturaIntegrationSetting {

    clientSecret : string;
	clientId : string;
	userMetadataProfileId : number;
	scopes : string;
	readonly encryptionKey : string;

    constructor(data? : KalturaMicrosoftTeamsIntegrationSettingArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMicrosoftTeamsIntegrationSetting' },
				clientSecret : { type : 's' },
				clientId : { type : 's' },
				userMetadataProfileId : { type : 'n' },
				scopes : { type : 's' },
				encryptionKey : { type : 's', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMicrosoftTeamsIntegrationSetting',KalturaMicrosoftTeamsIntegrationSetting);
