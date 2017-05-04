
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaStorageProfile } from './KalturaStorageProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface StorageProfileUpdateActionArgs  extends KalturaRequestArgs {
    storageProfileId : number;
	storageProfile : KalturaStorageProfile;
}

/** 
* Update storage profile by id
**/
export class StorageProfileUpdateAction extends KalturaRequest<KalturaStorageProfile> {

    storageProfileId : number;
	storageProfile : KalturaStorageProfile;

    constructor(data : StorageProfileUpdateActionArgs)
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
				action : { type : 'c' , default : 'update' },
				storageProfileId : { type : 'n'  },
				storageProfile : { type : 'o'  , subType : 'KalturaStorageProfile'}
            }
        );
        return result;
    }
}

