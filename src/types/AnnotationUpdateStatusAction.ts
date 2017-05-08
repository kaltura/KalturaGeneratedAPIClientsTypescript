
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaCuePointStatus } from './KalturaCuePointStatus';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AnnotationUpdateStatusActionArgs  extends KalturaRequestArgs {
    id : string;
	status : KalturaCuePointStatus;
}

/** 
* Update cuePoint status by id
**/
export class AnnotationUpdateStatusAction extends KalturaRequest<void> {

    id : string;
	status : KalturaCuePointStatus;

    constructor(data : AnnotationUpdateStatusActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'annotation_annotation'  },
				action : { type : 'c' , default : 'updateStatus'  },
				id : { type : 's'   },
				status : { type : 'en'   , subType : 'KalturaCuePointStatus'}
            }
        );
        return result;
    }
}

