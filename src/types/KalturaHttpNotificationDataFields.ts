
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaHttpNotificationData, KalturaHttpNotificationDataArgs } from './KalturaHttpNotificationData';

export interface KalturaHttpNotificationDataFieldsArgs  extends KalturaHttpNotificationDataArgs {
    
}

/** 
* If this class used as the template data, the fields will be taken from the
* content parameters
**/
export class KalturaHttpNotificationDataFields extends KalturaHttpNotificationData {

    

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
                objectType : { type : 'c' , default : 'KalturaHttpNotificationDataFields' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaHttpNotificationDataFields',KalturaHttpNotificationDataFields);
