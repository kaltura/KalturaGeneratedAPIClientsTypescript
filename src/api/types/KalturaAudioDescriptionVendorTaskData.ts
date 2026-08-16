
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaVendorTaskData, KalturaVendorTaskDataArgs } from './KalturaVendorTaskData';

export interface KalturaAudioDescriptionVendorTaskDataArgs  extends KalturaVendorTaskDataArgs {
    
}


export class KalturaAudioDescriptionVendorTaskData extends KalturaVendorTaskData {

    

    constructor(data? : KalturaAudioDescriptionVendorTaskDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAudioDescriptionVendorTaskData' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAudioDescriptionVendorTaskData',KalturaAudioDescriptionVendorTaskData);
