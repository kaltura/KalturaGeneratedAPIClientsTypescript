
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRemoteStorageResource } from './KalturaRemoteStorageResource';
import { KalturaContentResource, KalturaContentResourceArgs } from './KalturaContentResource';

export interface KalturaRemoteStorageResourcesArgs  extends KalturaContentResourceArgs {
    resources? : KalturaRemoteStorageResource[];
}

/** 
* Used to ingest media that is available on remote server and accessible using the
* supplied URL, the media file won't be downloaded but a file sync object of URL
* type will point to the media URL.
**/
export class KalturaRemoteStorageResources extends KalturaContentResource {

    resources : KalturaRemoteStorageResource[];

    constructor(data? : KalturaRemoteStorageResourcesArgs)
    {
        super(data);
        if (typeof this.resources === 'undefined') this.resources = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaRemoteStorageResources'  },
				resources : { type : 'a'   , fallbackConstructor :  KalturaRemoteStorageResource, subType : 'KalturaRemoteStorageResource'}
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaRemoteStorageResources',KalturaRemoteStorageResources);
