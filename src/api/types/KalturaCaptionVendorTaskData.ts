
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaVendorTaskData, KalturaVendorTaskDataArgs } from './KalturaVendorTaskData';

export interface KalturaCaptionVendorTaskDataArgs  extends KalturaVendorTaskDataArgs {
    
}


export class KalturaCaptionVendorTaskData extends KalturaVendorTaskData {

    

    constructor(data? : KalturaCaptionVendorTaskDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCaptionVendorTaskData' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCaptionVendorTaskData',KalturaCaptionVendorTaskData);
