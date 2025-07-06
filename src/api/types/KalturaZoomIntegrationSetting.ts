
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaZoomUsersMatching } from './KalturaZoomUsersMatching';
import { KalturaZoomGroupParticipationType } from './KalturaZoomGroupParticipationType';
import { KalturaHandleParticipantsMode } from './KalturaHandleParticipantsMode';
import { KalturaZoomUsersSearchMethod } from './KalturaZoomUsersSearchMethod';
import { KalturaIntegrationSetting, KalturaIntegrationSettingArgs } from './KalturaIntegrationSetting';

export interface KalturaZoomIntegrationSettingArgs  extends KalturaIntegrationSettingArgs {
    zoomCategory? : string;
	enableRecordingUpload? : KalturaNullableBoolean;
	zoomUserMatchingMode? : KalturaZoomUsersMatching;
	zoomUserPostfix? : string;
	zoomWebinarCategory? : string;
	enableWebinarUploads? : KalturaNullableBoolean;
	enableZoomTranscription? : KalturaNullableBoolean;
	zoomAccountDescription? : string;
	optOutGroupNames? : string;
	optInGroupNames? : string;
	groupParticipationType? : KalturaZoomGroupParticipationType;
	handleCohostsMode? : KalturaHandleParticipantsMode;
	handleAlternativeHostsMode? : KalturaHandleParticipantsMode;
	userSearchMethod? : KalturaZoomUsersSearchMethod;
}


export class KalturaZoomIntegrationSetting extends KalturaIntegrationSetting {

    zoomCategory : string;
	enableRecordingUpload : KalturaNullableBoolean;
	zoomUserMatchingMode : KalturaZoomUsersMatching;
	zoomUserPostfix : string;
	zoomWebinarCategory : string;
	enableWebinarUploads : KalturaNullableBoolean;
	enableZoomTranscription : KalturaNullableBoolean;
	zoomAccountDescription : string;
	optOutGroupNames : string;
	optInGroupNames : string;
	groupParticipationType : KalturaZoomGroupParticipationType;
	handleCohostsMode : KalturaHandleParticipantsMode;
	handleAlternativeHostsMode : KalturaHandleParticipantsMode;
	userSearchMethod : KalturaZoomUsersSearchMethod;

    constructor(data? : KalturaZoomIntegrationSettingArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaZoomIntegrationSetting' },
				zoomCategory : { type : 's' },
				enableRecordingUpload : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				zoomUserMatchingMode : { type : 'en', subTypeConstructor : KalturaZoomUsersMatching, subType : 'KalturaZoomUsersMatching' },
				zoomUserPostfix : { type : 's' },
				zoomWebinarCategory : { type : 's' },
				enableWebinarUploads : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				enableZoomTranscription : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				zoomAccountDescription : { type : 's' },
				optOutGroupNames : { type : 's' },
				optInGroupNames : { type : 's' },
				groupParticipationType : { type : 'en', subTypeConstructor : KalturaZoomGroupParticipationType, subType : 'KalturaZoomGroupParticipationType' },
				handleCohostsMode : { type : 'en', subTypeConstructor : KalturaHandleParticipantsMode, subType : 'KalturaHandleParticipantsMode' },
				handleAlternativeHostsMode : { type : 'en', subTypeConstructor : KalturaHandleParticipantsMode, subType : 'KalturaHandleParticipantsMode' },
				userSearchMethod : { type : 'en', subTypeConstructor : KalturaZoomUsersSearchMethod, subType : 'KalturaZoomUsersSearchMethod' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaZoomIntegrationSetting',KalturaZoomIntegrationSetting);
