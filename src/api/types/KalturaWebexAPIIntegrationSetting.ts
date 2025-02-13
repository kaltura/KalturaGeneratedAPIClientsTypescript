
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaWebexAPIUsersMatching } from './KalturaWebexAPIUsersMatching';
import { KalturaWebexAPIGroupParticipationType } from './KalturaWebexAPIGroupParticipationType';
import { KalturaIntegrationSetting, KalturaIntegrationSettingArgs } from './KalturaIntegrationSetting';

export interface KalturaWebexAPIIntegrationSettingArgs  extends KalturaIntegrationSettingArgs {
    webexCategory? : string;
	enableRecordingUpload? : KalturaNullableBoolean;
	enableTranscription? : KalturaNullableBoolean;
	userMatchingMode? : KalturaWebexAPIUsersMatching;
	userPostfix? : string;
	webexAccountDescription? : string;
	groupParticipationType? : KalturaWebexAPIGroupParticipationType;
	optOutGroupNames? : string;
	optInGroupNames? : string;
	siteUrl? : string;
}


export class KalturaWebexAPIIntegrationSetting extends KalturaIntegrationSetting {

    webexCategory : string;
	enableRecordingUpload : KalturaNullableBoolean;
	enableTranscription : KalturaNullableBoolean;
	userMatchingMode : KalturaWebexAPIUsersMatching;
	userPostfix : string;
	webexAccountDescription : string;
	groupParticipationType : KalturaWebexAPIGroupParticipationType;
	optOutGroupNames : string;
	optInGroupNames : string;
	siteUrl : string;

    constructor(data? : KalturaWebexAPIIntegrationSettingArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaWebexAPIIntegrationSetting' },
				webexCategory : { type : 's' },
				enableRecordingUpload : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				enableTranscription : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				userMatchingMode : { type : 'en', subTypeConstructor : KalturaWebexAPIUsersMatching, subType : 'KalturaWebexAPIUsersMatching' },
				userPostfix : { type : 's' },
				webexAccountDescription : { type : 's' },
				groupParticipationType : { type : 'en', subTypeConstructor : KalturaWebexAPIGroupParticipationType, subType : 'KalturaWebexAPIGroupParticipationType' },
				optOutGroupNames : { type : 's' },
				optInGroupNames : { type : 's' },
				siteUrl : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaWebexAPIIntegrationSetting',KalturaWebexAPIIntegrationSetting);
