
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConversionProfile } from './KalturaConversionProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ConversionProfileAddActionArgs  extends KalturaRequestArgs {
    conversionProfile : KalturaConversionProfile;
}

/** 
* Add new Conversion Profile
**/
export class ConversionProfileAddAction extends KalturaRequest<KalturaConversionProfile> {

    conversionProfile : KalturaConversionProfile;

    constructor(data : ConversionProfileAddActionArgs)
    {
        super(data, 'o', 'KalturaConversionProfile');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'conversionprofile' },
				action : { type : 'c' , default : 'add' },
				conversionProfile : { type : 'o'  , subType : 'KalturaConversionProfile'}
            }
        );
        return result;
    }
}

