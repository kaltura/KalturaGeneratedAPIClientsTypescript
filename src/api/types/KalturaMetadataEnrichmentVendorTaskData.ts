
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaMetadataEnrichmentApplyMode } from './KalturaMetadataEnrichmentApplyMode';
import { KalturaString } from './KalturaString';
import { KalturaLocalizedVendorTaskData, KalturaLocalizedVendorTaskDataArgs } from './KalturaLocalizedVendorTaskData';

export interface KalturaMetadataEnrichmentVendorTaskDataArgs  extends KalturaLocalizedVendorTaskDataArgs {
    detailLevel? : string;
	instruction? : string;
	shouldApply? : boolean;
	applyMode? : KalturaMetadataEnrichmentApplyMode;
	overrideFields? : KalturaString[];
}


export class KalturaMetadataEnrichmentVendorTaskData extends KalturaLocalizedVendorTaskData {

    detailLevel : string;
	instruction : string;
	shouldApply : boolean;
	applyMode : KalturaMetadataEnrichmentApplyMode;
	overrideFields : KalturaString[];

    constructor(data? : KalturaMetadataEnrichmentVendorTaskDataArgs)
    {
        super(data);
        if (typeof this.overrideFields === 'undefined') this.overrideFields = [];
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
				shouldApply : { type : 'b' },
				applyMode : { type : 'es', subTypeConstructor : KalturaMetadataEnrichmentApplyMode, subType : 'KalturaMetadataEnrichmentApplyMode' },
				overrideFields : { type : 'a', subTypeConstructor : KalturaString, subType : 'KalturaString' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMetadataEnrichmentVendorTaskData',KalturaMetadataEnrichmentVendorTaskData);
