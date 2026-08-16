
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaVendorTaskData, KalturaVendorTaskDataArgs } from './KalturaVendorTaskData';

export interface KalturaDubbingVendorTaskDataArgs  extends KalturaVendorTaskDataArgs {
    
}


export class KalturaDubbingVendorTaskData extends KalturaVendorTaskData {

    

    constructor(data? : KalturaDubbingVendorTaskDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDubbingVendorTaskData' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDubbingVendorTaskData',KalturaDubbingVendorTaskData);
