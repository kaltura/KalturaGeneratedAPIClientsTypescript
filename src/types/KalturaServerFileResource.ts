
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDataCenterContentResource, KalturaDataCenterContentResourceArgs } from './KalturaDataCenterContentResource';

export interface KalturaServerFileResourceArgs  extends KalturaDataCenterContentResourceArgs {
    localFilePath? : string;
}

/** 
* Used to ingest media file that is already accessible on the shared disc.
**/
export class KalturaServerFileResource extends KalturaDataCenterContentResource {

    localFilePath : string;

    constructor(data? : KalturaServerFileResourceArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaServerFileResource' },
				localFilePath : { type : 's'  }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaServerFileResource',KalturaServerFileResource);
