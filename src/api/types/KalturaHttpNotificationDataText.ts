
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaHttpNotificationData, KalturaHttpNotificationDataArgs } from './KalturaHttpNotificationData';

export interface KalturaHttpNotificationDataTextArgs  extends KalturaHttpNotificationDataArgs {
    content? : KalturaStringValue;
	contentType? : string;
}


export class KalturaHttpNotificationDataText extends KalturaHttpNotificationData {

    content : KalturaStringValue;
	contentType : string;

    constructor(data? : KalturaHttpNotificationDataTextArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaHttpNotificationDataText' },
				content : { type : 'o', subTypeConstructor : KalturaStringValue, subType : 'KalturaStringValue' },
				contentType : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaHttpNotificationDataText',KalturaHttpNotificationDataText);
