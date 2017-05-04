
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaThumbParams } from './KalturaThumbParams';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ThumbAssetGetUrlActionArgs  extends KalturaRequestArgs {
    id : string;
	storageId? : number;
	thumbParams? : KalturaThumbParams;
}

/** 
* Get download URL for the asset
**/
export class ThumbAssetGetUrlAction extends KalturaRequest<string> {

    id : string;
	storageId : number;
	thumbParams : KalturaThumbParams;

    constructor(data : ThumbAssetGetUrlActionArgs)
    {
        super(data, 's', '');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'thumbasset' },
				action : { type : 'c' , default : 'getUrl' },
				id : { type : 's'  },
				storageId : { type : 'n'  },
				thumbParams : { type : 'o'  , subType : 'KalturaThumbParams'}
            }
        );
        return result;
    }
}

