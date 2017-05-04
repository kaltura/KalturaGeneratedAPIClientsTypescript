
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCaptionParams } from './KalturaCaptionParams';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CaptionParamsAddActionArgs  extends KalturaRequestArgs {
    captionParams : KalturaCaptionParams;
}

/** 
* Add new Caption Params
**/
export class CaptionParamsAddAction extends KalturaRequest<KalturaCaptionParams> {

    captionParams : KalturaCaptionParams;

    constructor(data : CaptionParamsAddActionArgs)
    {
        super(data, 'o', 'KalturaCaptionParams');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'caption_captionparams' },
				action : { type : 'c' , default : 'add' },
				captionParams : { type : 'o'  , subType : 'KalturaCaptionParams'}
            }
        );
        return result;
    }
}

