
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaThumbParams } from './KalturaThumbParams';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ThumbParamsAddActionArgs  extends KalturaRequestArgs {
    thumbParams : KalturaThumbParams;
}

/** 
* Add new Thumb Params
**/
export class ThumbParamsAddAction extends KalturaRequest<KalturaThumbParams> {

    thumbParams : KalturaThumbParams;

    constructor(data : ThumbParamsAddActionArgs)
    {
        super(data, 'o', 'KalturaThumbParams');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'thumbparams' },
				action : { type : 'c' , default : 'add' },
				thumbParams : { type : 'o'  , subType : 'KalturaThumbParams'}
            }
        );
        return result;
    }
}

