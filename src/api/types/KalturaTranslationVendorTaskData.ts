
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaVendorTaskDataCaptionAsset, KalturaVendorTaskDataCaptionAssetArgs } from './KalturaVendorTaskDataCaptionAsset';

export interface KalturaTranslationVendorTaskDataArgs  extends KalturaVendorTaskDataCaptionAssetArgs {
    
}


export class KalturaTranslationVendorTaskData extends KalturaVendorTaskDataCaptionAsset {

    

    constructor(data? : KalturaTranslationVendorTaskDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTranslationVendorTaskData' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaTranslationVendorTaskData',KalturaTranslationVendorTaskData);
