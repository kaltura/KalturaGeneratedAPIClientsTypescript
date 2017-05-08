
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDataCenterContentResource, KalturaDataCenterContentResourceArgs } from './KalturaDataCenterContentResource';

export interface KalturaWebcamTokenResourceArgs  extends KalturaDataCenterContentResourceArgs {
    token? : string;
}

/** 
* Used to ingest media that streamed to the system and represented by token that
* returned from media server such as FMS or red5.
**/
export class KalturaWebcamTokenResource extends KalturaDataCenterContentResource {

    token : string;

    constructor(data? : KalturaWebcamTokenResourceArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaWebcamTokenResource'  },
				token : { type : 's'   }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaWebcamTokenResource',KalturaWebcamTokenResource);
