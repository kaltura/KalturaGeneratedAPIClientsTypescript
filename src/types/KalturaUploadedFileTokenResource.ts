
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDataCenterContentResource, KalturaDataCenterContentResourceArgs } from './KalturaDataCenterContentResource';

export interface KalturaUploadedFileTokenResourceArgs  extends KalturaDataCenterContentResourceArgs {
    token? : string;
}

/** 
* Used to ingest media that uploaded to the system and represented by token that
* returned from upload.upload action or uploadToken.add action.
**/
export class KalturaUploadedFileTokenResource extends KalturaDataCenterContentResource {

    token : string;

    constructor(data? : KalturaUploadedFileTokenResourceArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaUploadedFileTokenResource' },
				token : { type : 's'  }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUploadedFileTokenResource',KalturaUploadedFileTokenResource);
