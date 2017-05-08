
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UiConfDeleteActionArgs  extends KalturaRequestArgs {
    id : number;
}

/** 
* Delete an existing UIConf
**/
export class UiConfDeleteAction extends KalturaRequest<void> {

    id : number;

    constructor(data : UiConfDeleteActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'uiconf'  },
				action : { type : 'c' , default : 'delete'  },
				id : { type : 'n'   }
            }
        );
        return result;
    }
}

