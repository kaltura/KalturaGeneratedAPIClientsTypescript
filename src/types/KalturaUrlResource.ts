
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaContentResource, KalturaContentResourceArgs } from './KalturaContentResource';

export interface KalturaUrlResourceArgs  extends KalturaContentResourceArgs {
    url? : string;
	forceAsyncDownload? : boolean;
}

/** 
* Used to ingest media that is available on remote server and accessible using the
* supplied URL, media file will be downloaded using import job in order to make
* the asset ready.
**/
export class KalturaUrlResource extends KalturaContentResource {

    url : string;
	forceAsyncDownload : boolean;

    constructor(data? : KalturaUrlResourceArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaUrlResource'  },
				url : { type : 's'   },
				forceAsyncDownload : { type : 'b'   }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUrlResource',KalturaUrlResource);
