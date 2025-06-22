
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaLanguage } from './KalturaLanguage';
import { KalturaVendorTaskData, KalturaVendorTaskDataArgs } from './KalturaVendorTaskData';

export interface KalturaLocalizedVendorTaskDataArgs  extends KalturaVendorTaskDataArgs {
    outputLanguage? : KalturaLanguage;
	outputJson? : string;
}


export class KalturaLocalizedVendorTaskData extends KalturaVendorTaskData {

    outputLanguage : KalturaLanguage;
	outputJson : string;

    constructor(data? : KalturaLocalizedVendorTaskDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLocalizedVendorTaskData' },
				outputLanguage : { type : 'es', subTypeConstructor : KalturaLanguage, subType : 'KalturaLanguage' },
				outputJson : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLocalizedVendorTaskData',KalturaLocalizedVendorTaskData);
