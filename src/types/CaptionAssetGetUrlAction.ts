
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CaptionAssetGetUrlActionArgs  extends KalturaRequestArgs {
    id : string;
	storageId? : number;
}

/** 
* Get download URL for the asset
**/
export class CaptionAssetGetUrlAction extends KalturaRequest<string> {

    id : string;
	storageId : number;

    constructor(data : CaptionAssetGetUrlActionArgs)
    {
        super(data, {responseType : 's', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'caption_captionasset' },
				action : { type : 'c', default : 'getUrl' },
				id : { type : 's' },
				storageId : { type : 'n' }
            }
        );
        return result;
    }
}

