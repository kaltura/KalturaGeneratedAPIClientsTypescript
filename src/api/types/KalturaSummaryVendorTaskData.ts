
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaTypeOfSummaryTaskData } from './KalturaTypeOfSummaryTaskData';
import { KalturaSummaryWritingStyleTaskData } from './KalturaSummaryWritingStyleTaskData';
import { KalturaLocalizedVendorTaskData, KalturaLocalizedVendorTaskDataArgs } from './KalturaLocalizedVendorTaskData';

export interface KalturaSummaryVendorTaskDataArgs  extends KalturaLocalizedVendorTaskDataArgs {
    typeOfSummary? : KalturaTypeOfSummaryTaskData;
	writingStyle? : KalturaSummaryWritingStyleTaskData;
	summaryOutputJson? : string;
}


export class KalturaSummaryVendorTaskData extends KalturaLocalizedVendorTaskData {

    typeOfSummary : KalturaTypeOfSummaryTaskData;
	writingStyle : KalturaSummaryWritingStyleTaskData;
	summaryOutputJson : string;

    constructor(data? : KalturaSummaryVendorTaskDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSummaryVendorTaskData' },
				typeOfSummary : { type : 'es', subTypeConstructor : KalturaTypeOfSummaryTaskData, subType : 'KalturaTypeOfSummaryTaskData' },
				writingStyle : { type : 'es', subTypeConstructor : KalturaSummaryWritingStyleTaskData, subType : 'KalturaSummaryWritingStyleTaskData' },
				summaryOutputJson : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSummaryVendorTaskData',KalturaSummaryVendorTaskData);
