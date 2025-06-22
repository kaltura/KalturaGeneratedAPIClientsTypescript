
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaLocalizedVendorTaskData, KalturaLocalizedVendorTaskDataArgs } from './KalturaLocalizedVendorTaskData';

export interface KalturaMetadataEnrichmentVendorTaskDataArgs  extends KalturaLocalizedVendorTaskDataArgs {
    detailLevel? : string;
	instruction? : string;
}


export class KalturaMetadataEnrichmentVendorTaskData extends KalturaLocalizedVendorTaskData {

    detailLevel : string;
	instruction : string;

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
				instruction : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMetadataEnrichmentVendorTaskData',KalturaMetadataEnrichmentVendorTaskData);
