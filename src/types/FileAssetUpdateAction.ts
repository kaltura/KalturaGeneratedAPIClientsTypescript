
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFileAsset } from './KalturaFileAsset';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface FileAssetUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	fileAsset : KalturaFileAsset;
}

/** 
* Update file asset by id
**/
export class FileAssetUpdateAction extends KalturaRequest<KalturaFileAsset> {

    id : number;
	fileAsset : KalturaFileAsset;

    constructor(data : FileAssetUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaFileAsset', responseConstructor : KalturaFileAsset  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'fileasset'  },
				action : { type : 'c' , default : 'update'  },
				id : { type : 'n'   },
				fileAsset : { type : 'o'   , fallbackConstructor :  KalturaFileAsset, subType : 'KalturaFileAsset'}
            }
        );
        return result;
    }
}

