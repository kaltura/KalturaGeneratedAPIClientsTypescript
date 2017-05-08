
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUrlResource, KalturaUrlResourceArgs } from './KalturaUrlResource';

export interface KalturaRemoteStorageResourceArgs  extends KalturaUrlResourceArgs {
    storageProfileId? : number;
}

/** 
* Used to ingest media that is available on remote server and accessible using the
* supplied URL, the media file won't be downloaded but a file sync object of URL
* type will point to the media URL.
**/
export class KalturaRemoteStorageResource extends KalturaUrlResource {

    storageProfileId : number;

    constructor(data? : KalturaRemoteStorageResourceArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRemoteStorageResource' },
				storageProfileId : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaRemoteStorageResource',KalturaRemoteStorageResource);
