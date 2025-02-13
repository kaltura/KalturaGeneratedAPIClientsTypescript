
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaKafkaNotificationFormat } from './KalturaKafkaNotificationFormat';
import { KalturaEventNotificationTemplate, KalturaEventNotificationTemplateArgs } from './KalturaEventNotificationTemplate';

export interface KalturaKafkaNotificationTemplateArgs  extends KalturaEventNotificationTemplateArgs {
    topicName? : string;
	partitionKey? : string;
	messageFormat? : KalturaKafkaNotificationFormat;
	apiObjectType? : string;
	responseProfileSystemName? : string;
	requiresPermissions? : string;
}


export class KalturaKafkaNotificationTemplate extends KalturaEventNotificationTemplate {

    topicName : string;
	partitionKey : string;
	messageFormat : KalturaKafkaNotificationFormat;
	apiObjectType : string;
	responseProfileSystemName : string;
	requiresPermissions : string;

    constructor(data? : KalturaKafkaNotificationTemplateArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaKafkaNotificationTemplate' },
				topicName : { type : 's' },
				partitionKey : { type : 's' },
				messageFormat : { type : 'en', subTypeConstructor : KalturaKafkaNotificationFormat, subType : 'KalturaKafkaNotificationFormat' },
				apiObjectType : { type : 's' },
				responseProfileSystemName : { type : 's' },
				requiresPermissions : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaKafkaNotificationTemplate',KalturaKafkaNotificationTemplate);
