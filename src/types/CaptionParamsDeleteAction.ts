
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CaptionParamsDeleteActionArgs  extends KalturaRequestArgs {
    id : number;
}

/** 
* Delete Caption Params by ID
**/
export class CaptionParamsDeleteAction extends KalturaRequest<void> {

    id : number;

    constructor(data : CaptionParamsDeleteActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'caption_captionparams'  },
				action : { type : 'c' , default : 'delete'  },
				id : { type : 'n'   }
            }
        );
        return result;
    }
}

