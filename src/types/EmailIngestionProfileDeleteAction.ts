
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EmailIngestionProfileDeleteActionArgs  extends KalturaRequestArgs {
    id : number;
}

/** 
* Delete an existing EmailIngestionProfile
**/
export class EmailIngestionProfileDeleteAction extends KalturaRequest<void> {

    id : number;

    constructor(data : EmailIngestionProfileDeleteActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'emailingestionprofile'  },
				action : { type : 'c' , default : 'delete'  },
				id : { type : 'n'   }
            }
        );
        return result;
    }
}

