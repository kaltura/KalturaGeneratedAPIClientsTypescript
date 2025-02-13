
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaTypeOfSummaryTaskData } from './KalturaTypeOfSummaryTaskData';
import { KalturaSummaryWritingStyleTaskData } from './KalturaSummaryWritingStyleTaskData';
import { KalturaLanguageCode } from './KalturaLanguageCode';
import { KalturaVendorTaskData, KalturaVendorTaskDataArgs } from './KalturaVendorTaskData';

export interface KalturaSummaryVendorTaskDataArgs  extends KalturaVendorTaskDataArgs {
    typeOfSummary? : KalturaTypeOfSummaryTaskData;
	writingStyle? : KalturaSummaryWritingStyleTaskData;
	language? : KalturaLanguageCode;
	summaryOutputJson? : string;
}


export class KalturaSummaryVendorTaskData extends KalturaVendorTaskData {

    typeOfSummary : KalturaTypeOfSummaryTaskData;
	writingStyle : KalturaSummaryWritingStyleTaskData;
	language : KalturaLanguageCode;
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
				language : { type : 'es', subTypeConstructor : KalturaLanguageCode, subType : 'KalturaLanguageCode' },
				summaryOutputJson : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSummaryVendorTaskData',KalturaSummaryVendorTaskData);
