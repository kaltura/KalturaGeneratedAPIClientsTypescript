
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFileAsset } from './KalturaFileAsset';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface FileAssetAddActionArgs  extends KalturaRequestArgs {
    fileAsset : KalturaFileAsset;
}

/** 
* Add new file asset
**/
export class FileAssetAddAction extends KalturaRequest<KalturaFileAsset> {

    fileAsset : KalturaFileAsset;

    constructor(data : FileAssetAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaFileAsset', responseConstructor : KalturaFileAsset  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'fileasset' },
				action : { type : 'c', default : 'add' },
				fileAsset : { type : 'o', subTypeConstructor : KalturaFileAsset, subType : 'KalturaFileAsset' }
            }
        );
        return result;
    }
}

