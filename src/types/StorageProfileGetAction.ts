
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaStorageProfile } from './KalturaStorageProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface StorageProfileGetActionArgs  extends KalturaRequestArgs {
    storageProfileId : number;
}

/** 
* Get storage profile by id
**/
export class StorageProfileGetAction extends KalturaRequest<KalturaStorageProfile> {

    storageProfileId : number;

    constructor(data : StorageProfileGetActionArgs)
    {
        super(data, 'o', 'KalturaStorageProfile');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'storageprofile' },
				action : { type : 'c' , default : 'get' },
				storageProfileId : { type : 'n'  }
            }
        );
        return result;
    }
}

