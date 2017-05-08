
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaResource, KalturaResourceArgs } from './KalturaResource';

export interface KalturaContentResourceArgs  extends KalturaResourceArgs {
    
}

/** 
* Is a unified way to add content to Kaltura whether it's an uploaded file, webcam
* recording, imported URL or existing file sync.
**/
export class KalturaContentResource extends KalturaResource {

    

    constructor(data? : KalturaContentResourceArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaContentResource'  }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaContentResource',KalturaContentResource);
