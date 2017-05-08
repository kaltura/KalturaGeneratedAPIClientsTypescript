
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ThumbParamsDeleteActionArgs  extends KalturaRequestArgs {
    id : number;
}

/** 
* Delete Thumb Params by ID
**/
export class ThumbParamsDeleteAction extends KalturaRequest<void> {

    id : number;

    constructor(data : ThumbParamsDeleteActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'thumbparams'  },
				action : { type : 'c' , default : 'delete'  },
				id : { type : 'n'   }
            }
        );
        return result;
    }
}

