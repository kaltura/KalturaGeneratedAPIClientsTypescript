
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFileAsset } from './KalturaFileAsset';

import { KalturaContentResource } from './KalturaContentResource';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface FileAssetSetContentActionArgs  extends KalturaRequestArgs {
    id : string;
	contentResource : KalturaContentResource;
}

/** 
* Set content of file asset
**/
export class FileAssetSetContentAction extends KalturaRequest<KalturaFileAsset> {

    id : string;
	contentResource : KalturaContentResource;

    constructor(data : FileAssetSetContentActionArgs)
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
				action : { type : 'c', default : 'setContent' },
				id : { type : 's' },
				contentResource : { type : 'o', subTypeConstructor : KalturaContentResource, subType : 'KalturaContentResource' }
            }
        );
        return result;
    }
}

