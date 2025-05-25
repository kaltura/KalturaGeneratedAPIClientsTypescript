
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaLanguageCode } from './KalturaLanguageCode';
import { KalturaVendorTaskData, KalturaVendorTaskDataArgs } from './KalturaVendorTaskData';

export interface KalturaSentimentAnalysisVendorTaskDataArgs  extends KalturaVendorTaskDataArgs {
    language? : KalturaLanguageCode;
}


export class KalturaSentimentAnalysisVendorTaskData extends KalturaVendorTaskData {

    language : KalturaLanguageCode;

    constructor(data? : KalturaSentimentAnalysisVendorTaskDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSentimentAnalysisVendorTaskData' },
				language : { type : 'es', subTypeConstructor : KalturaLanguageCode, subType : 'KalturaLanguageCode' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSentimentAnalysisVendorTaskData',KalturaSentimentAnalysisVendorTaskData);
