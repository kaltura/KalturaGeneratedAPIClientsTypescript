
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaStorageProfile } from './KalturaStorageProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface StorageProfileAddActionArgs  extends KalturaRequestArgs {
    storageProfile : KalturaStorageProfile;
}

/** 
* Adds a storage profile to the Kaltura DB.
**/
export class StorageProfileAddAction extends KalturaRequest<KalturaStorageProfile> {

    storageProfile : KalturaStorageProfile;

    constructor(data : StorageProfileAddActionArgs)
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
				action : { type : 'c' , default : 'add' },
				storageProfile : { type : 'o'  , subType : 'KalturaStorageProfile'}
            }
        );
        return result;
    }
}

