
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaEntry } from './KalturaMediaEntry';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MediaAddFromFlavorAssetActionArgs  extends KalturaRequestArgs {
    sourceFlavorAssetId : string;
	mediaEntry? : KalturaMediaEntry;
}

/** 
* Copy flavor asset into new entry
**/
export class MediaAddFromFlavorAssetAction extends KalturaRequest<KalturaMediaEntry> {

    sourceFlavorAssetId : string;
	mediaEntry : KalturaMediaEntry;

    constructor(data : MediaAddFromFlavorAssetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaMediaEntry', responseConstructor : KalturaMediaEntry  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'media' },
				action : { type : 'c', default : 'addFromFlavorAsset' },
				sourceFlavorAssetId : { type : 's' },
				mediaEntry : { type : 'o', subTypeConstructor : KalturaMediaEntry, subType : 'KalturaMediaEntry' }
            }
        );
        return result;
    }
}

