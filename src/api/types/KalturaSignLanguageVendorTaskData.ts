
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaVendorTaskData, KalturaVendorTaskDataArgs } from './KalturaVendorTaskData';

export interface KalturaSignLanguageVendorTaskDataArgs  extends KalturaVendorTaskDataArgs {
    assetId? : string;
}


export class KalturaSignLanguageVendorTaskData extends KalturaVendorTaskData {

    assetId : string;

    constructor(data? : KalturaSignLanguageVendorTaskDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSignLanguageVendorTaskData' },
				assetId : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSignLanguageVendorTaskData',KalturaSignLanguageVendorTaskData);
