
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaHttpNotificationData, KalturaHttpNotificationDataArgs } from './KalturaHttpNotificationData';

export interface KalturaHttpNotificationDataFieldsArgs  extends KalturaHttpNotificationDataArgs {
    contentType? : string;
}


export class KalturaHttpNotificationDataFields extends KalturaHttpNotificationData {

    contentType : string;

    constructor(data? : KalturaHttpNotificationDataFieldsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaHttpNotificationDataFields' },
				contentType : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaHttpNotificationDataFields',KalturaHttpNotificationDataFields);
