
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaIntegrationJobData } from './KalturaIntegrationJobData';
import { KalturaBatchJobObjectType } from './KalturaBatchJobObjectType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface IntegrationDispatchActionArgs  extends KalturaRequestArgs {
    data : KalturaIntegrationJobData;
	objectType : KalturaBatchJobObjectType;
	objectId : string;
}

/** 
* Dispatch integration task
**/
export class IntegrationDispatchAction extends KalturaRequest<number> {

    data : KalturaIntegrationJobData;
	objectType : KalturaBatchJobObjectType;
	objectId : string;

    constructor(data : IntegrationDispatchActionArgs)
    {
        super(data, 'n', '');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'integration_integration' },
				action : { type : 'c' , default : 'dispatch' },
				data : { type : 'o'  , subType : 'KalturaIntegrationJobData'},
				objectType : { type : 'es'  , subType : 'KalturaBatchJobObjectType'},
				objectId : { type : 's'  }
            }
        );
        return result;
    }
}

