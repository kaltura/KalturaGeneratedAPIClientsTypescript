
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaVendorTaskData, KalturaVendorTaskDataArgs } from './KalturaVendorTaskData';

export interface KalturaImmersiveAgentChatVendorTaskDataArgs  extends KalturaVendorTaskDataArgs {
    
}


export class KalturaImmersiveAgentChatVendorTaskData extends KalturaVendorTaskData {

    

    constructor(data? : KalturaImmersiveAgentChatVendorTaskDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaImmersiveAgentChatVendorTaskData' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaImmersiveAgentChatVendorTaskData',KalturaImmersiveAgentChatVendorTaskData);
