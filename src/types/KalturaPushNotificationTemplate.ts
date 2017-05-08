
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaResponseType } from './KalturaResponseType';
import { KalturaEventNotificationTemplate, KalturaEventNotificationTemplateArgs } from './KalturaEventNotificationTemplate';

export interface KalturaPushNotificationTemplateArgs  extends KalturaEventNotificationTemplateArgs {
    apiObjectType? : string;
	objectFormat? : KalturaResponseType;
	responseProfileId? : number;
}


export class KalturaPushNotificationTemplate extends KalturaEventNotificationTemplate {

    apiObjectType : string;
	objectFormat : KalturaResponseType;
	responseProfileId : number;

    constructor(data? : KalturaPushNotificationTemplateArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPushNotificationTemplate' },
				apiObjectType : { type : 's' },
				objectFormat : { type : 'en', subTypeConstructor : KalturaResponseType, subType : 'KalturaResponseType' },
				responseProfileId : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPushNotificationTemplate',KalturaPushNotificationTemplate);
