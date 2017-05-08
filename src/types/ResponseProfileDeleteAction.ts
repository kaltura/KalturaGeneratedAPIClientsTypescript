
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ResponseProfileDeleteActionArgs  extends KalturaRequestArgs {
    id : number;
}

/** 
* Delete response profile by id
**/
export class ResponseProfileDeleteAction extends KalturaRequest<void> {

    id : number;

    constructor(data : ResponseProfileDeleteActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'responseprofile'  },
				action : { type : 'c' , default : 'delete'  },
				id : { type : 'n'   }
            }
        );
        return result;
    }
}

