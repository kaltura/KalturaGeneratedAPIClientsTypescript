
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaResourceArgs  extends KalturaObjectBaseArgs {
    
}

/** 
* Used to ingest entry object, as single resource or list of resources accompanied
* by asset params ids.
**/
export class KalturaResource extends KalturaObjectBase {

    

    constructor(data? : KalturaResourceArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaResource' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaResource',KalturaResource);
