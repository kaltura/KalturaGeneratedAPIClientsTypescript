
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCategoryUserFilter } from './KalturaCategoryUserFilter';
import { KalturaEmailNotificationRecipientJobData, KalturaEmailNotificationRecipientJobDataArgs } from './KalturaEmailNotificationRecipientJobData';

export interface KalturaEmailNotificationCategoryRecipientJobDataArgs  extends KalturaEmailNotificationRecipientJobDataArgs {
    categoryUserFilter? : KalturaCategoryUserFilter;
}

/** 
* Job Data representing the provider of recipients for a single categoryId
**/
export class KalturaEmailNotificationCategoryRecipientJobData extends KalturaEmailNotificationRecipientJobData {

    categoryUserFilter : KalturaCategoryUserFilter;

    constructor(data? : KalturaEmailNotificationCategoryRecipientJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaEmailNotificationCategoryRecipientJobData' },
				categoryUserFilter : { type : 'o'  , subType : 'KalturaCategoryUserFilter'}
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEmailNotificationCategoryRecipientJobData',KalturaEmailNotificationCategoryRecipientJobData);
