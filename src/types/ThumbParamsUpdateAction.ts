
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaThumbParams } from './KalturaThumbParams';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ThumbParamsUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	thumbParams : KalturaThumbParams;
}

/** 
* Update Thumb Params by ID
**/
export class ThumbParamsUpdateAction extends KalturaRequest<KalturaThumbParams> {

    id : number;
	thumbParams : KalturaThumbParams;

    constructor(data : ThumbParamsUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaThumbParams', responseConstructor : KalturaThumbParams  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'thumbparams'  },
				action : { type : 'c' , default : 'update'  },
				id : { type : 'n'   },
				thumbParams : { type : 'o'   , fallbackConstructor :  KalturaThumbParams, subType : 'KalturaThumbParams'}
            }
        );
        return result;
    }
}

