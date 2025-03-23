
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaVendorTaskData, KalturaVendorTaskDataArgs } from './KalturaVendorTaskData';

export interface KalturaMetadataEnrichmentVendorTaskDataArgs  extends KalturaVendorTaskDataArgs {
    detailLevel? : string;
	instruction? : string;
	outputJson? : string;
}


export class KalturaMetadataEnrichmentVendorTaskData extends KalturaVendorTaskData {

    detailLevel : string;
	instruction : string;
	outputJson : string;

    constructor(data? : KalturaMetadataEnrichmentVendorTaskDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMetadataEnrichmentVendorTaskData' },
				detailLevel : { type : 's' },
				instruction : { type : 's' },
				outputJson : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMetadataEnrichmentVendorTaskData',KalturaMetadataEnrichmentVendorTaskData);
