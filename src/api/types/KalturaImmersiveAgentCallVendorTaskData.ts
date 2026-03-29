
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaVendorTaskData, KalturaVendorTaskDataArgs } from './KalturaVendorTaskData';

export interface KalturaImmersiveAgentCallVendorTaskDataArgs  extends KalturaVendorTaskDataArgs {
    callId? : string;
}


export class KalturaImmersiveAgentCallVendorTaskData extends KalturaVendorTaskData {

    callId : string;

    constructor(data? : KalturaImmersiveAgentCallVendorTaskDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaImmersiveAgentCallVendorTaskData' },
				callId : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaImmersiveAgentCallVendorTaskData',KalturaImmersiveAgentCallVendorTaskData);
