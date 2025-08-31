
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEntryObjectType } from './KalturaEntryObjectType';
import { KalturaRuleAction, KalturaRuleActionArgs } from './KalturaRuleAction';

export interface KalturaAddEntryVendorTaskActionArgs  extends KalturaRuleActionArgs {
    catalogItemIds? : string;
	entryObjectType? : KalturaEntryObjectType;
}


export class KalturaAddEntryVendorTaskAction extends KalturaRuleAction {

    catalogItemIds : string;
	entryObjectType : KalturaEntryObjectType;

    constructor(data? : KalturaAddEntryVendorTaskActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAddEntryVendorTaskAction' },
				catalogItemIds : { type : 's' },
				entryObjectType : { type : 'en', subTypeConstructor : KalturaEntryObjectType, subType : 'KalturaEntryObjectType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAddEntryVendorTaskAction',KalturaAddEntryVendorTaskAction);
