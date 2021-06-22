
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaVendorTaskData, KalturaVendorTaskDataArgs } from './KalturaVendorTaskData';

export interface KalturaIntelligentTaggingVendorTaskDataArgs  extends KalturaVendorTaskDataArgs {
    assetId? : string;
}


export class KalturaIntelligentTaggingVendorTaskData extends KalturaVendorTaskData {

    assetId : string;

    constructor(data? : KalturaIntelligentTaggingVendorTaskDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaIntelligentTaggingVendorTaskData' },
				assetId : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaIntelligentTaggingVendorTaskData',KalturaIntelligentTaggingVendorTaskData);
