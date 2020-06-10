
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaVendorTaskData, KalturaVendorTaskDataArgs } from './KalturaVendorTaskData';

export interface KalturaVendorTaskDataCaptionAssetArgs  extends KalturaVendorTaskDataArgs {
    captionAssetId? : string;
}


export class KalturaVendorTaskDataCaptionAsset extends KalturaVendorTaskData {

    captionAssetId : string;

    constructor(data? : KalturaVendorTaskDataCaptionAssetArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVendorTaskDataCaptionAsset' },
				captionAssetId : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaVendorTaskDataCaptionAsset',KalturaVendorTaskDataCaptionAsset);
