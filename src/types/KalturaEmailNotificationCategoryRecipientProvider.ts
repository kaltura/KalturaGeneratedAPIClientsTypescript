
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaCategoryUserProviderFilter } from './KalturaCategoryUserProviderFilter';
import { KalturaEmailNotificationRecipientProvider, KalturaEmailNotificationRecipientProviderArgs } from './KalturaEmailNotificationRecipientProvider';

export interface KalturaEmailNotificationCategoryRecipientProviderArgs  extends KalturaEmailNotificationRecipientProviderArgs {
    categoryId? : KalturaStringValue;
	categoryUserFilter? : KalturaCategoryUserProviderFilter;
}

/** 
* API object which provides the recipients of category related notifications.
**/
export class KalturaEmailNotificationCategoryRecipientProvider extends KalturaEmailNotificationRecipientProvider {

    categoryId : KalturaStringValue;
	categoryUserFilter : KalturaCategoryUserProviderFilter;

    constructor(data? : KalturaEmailNotificationCategoryRecipientProviderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaEmailNotificationCategoryRecipientProvider'  },
				categoryId : { type : 'o'   , fallbackConstructor :  KalturaStringValue, subType : 'KalturaStringValue'},
				categoryUserFilter : { type : 'o'   , fallbackConstructor :  KalturaCategoryUserProviderFilter, subType : 'KalturaCategoryUserProviderFilter'}
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEmailNotificationCategoryRecipientProvider',KalturaEmailNotificationCategoryRecipientProvider);
