
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaVendorTaskData, KalturaVendorTaskDataArgs } from './KalturaVendorTaskData';

export interface KalturaModerationVendorTaskDataArgs  extends KalturaVendorTaskDataArgs {
    ruleIds? : string;
	policyIds? : string;
	moderationOutputJson? : string;
}


export class KalturaModerationVendorTaskData extends KalturaVendorTaskData {

    ruleIds : string;
	policyIds : string;
	moderationOutputJson : string;

    constructor(data? : KalturaModerationVendorTaskDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaModerationVendorTaskData' },
				ruleIds : { type : 's' },
				policyIds : { type : 's' },
				moderationOutputJson : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaModerationVendorTaskData',KalturaModerationVendorTaskData);
