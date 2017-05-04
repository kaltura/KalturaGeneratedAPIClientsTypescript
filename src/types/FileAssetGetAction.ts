
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFileAsset } from './KalturaFileAsset';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface FileAssetGetActionArgs  extends KalturaRequestArgs {
    id : number;
}

/** 
* Get file asset by id
**/
export class FileAssetGetAction extends KalturaRequest<KalturaFileAsset> {

    id : number;

    constructor(data : FileAssetGetActionArgs)
    {
        super(data, 'o', 'KalturaFileAsset');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'fileasset' },
				action : { type : 'c' , default : 'get' },
				id : { type : 'n'  }
            }
        );
        return result;
    }
}

