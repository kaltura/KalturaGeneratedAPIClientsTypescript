
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaEventNotificationEventObjectType } from './KalturaEventNotificationEventObjectType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface BusinessProcessCaseAbortActionArgs  extends KalturaRequestArgs {
    objectType : KalturaEventNotificationEventObjectType;
	objectId : string;
	businessProcessStartNotificationTemplateId : number;
}

/** 
* Abort business-process case
**/
export class BusinessProcessCaseAbortAction extends KalturaRequest<void> {

    objectType : KalturaEventNotificationEventObjectType;
	objectId : string;
	businessProcessStartNotificationTemplateId : number;

    constructor(data : BusinessProcessCaseAbortActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'businessprocessnotification_businessprocesscase'  },
				action : { type : 'c' , default : 'abort'  },
				objectType : { type : 'es'   , subType : 'KalturaEventNotificationEventObjectType'},
				objectId : { type : 's'   },
				businessProcessStartNotificationTemplateId : { type : 'n'   }
            }
        );
        return result;
    }
}

