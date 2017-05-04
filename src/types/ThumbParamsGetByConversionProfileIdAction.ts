
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaThumbParams } from './KalturaThumbParams';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ThumbParamsGetByConversionProfileIdActionArgs  extends KalturaRequestArgs {
    conversionProfileId : number;
}

/** 
* Get Thumb Params by Conversion Profile ID
**/
export class ThumbParamsGetByConversionProfileIdAction extends KalturaRequest<KalturaThumbParams[]> {

    conversionProfileId : number;

    constructor(data : ThumbParamsGetByConversionProfileIdActionArgs)
    {
        super(data, 'a', 'KalturaThumbParams');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'thumbparams' },
				action : { type : 'c' , default : 'getByConversionProfileId' },
				conversionProfileId : { type : 'n'  }
            }
        );
        return result;
    }
}

