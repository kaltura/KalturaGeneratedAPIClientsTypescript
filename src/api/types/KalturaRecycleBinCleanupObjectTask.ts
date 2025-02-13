
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectTask, KalturaObjectTaskArgs } from './KalturaObjectTask';

export interface KalturaRecycleBinCleanupObjectTaskArgs  extends KalturaObjectTaskArgs {
    
}


export class KalturaRecycleBinCleanupObjectTask extends KalturaObjectTask {

    

    constructor(data? : KalturaRecycleBinCleanupObjectTaskArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRecycleBinCleanupObjectTask' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaRecycleBinCleanupObjectTask',KalturaRecycleBinCleanupObjectTask);
