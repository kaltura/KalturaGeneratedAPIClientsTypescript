
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConversionProfile } from './KalturaConversionProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ConversionProfileUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	conversionProfile : KalturaConversionProfile;
}

/** 
* Update Conversion Profile by ID
**/
export class ConversionProfileUpdateAction extends KalturaRequest<KalturaConversionProfile> {

    id : number;
	conversionProfile : KalturaConversionProfile;

    constructor(data : ConversionProfileUpdateActionArgs)
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
				action : { type : 'c' , default : 'update' },
				id : { type : 'n'  },
				conversionProfile : { type : 'o'  , subType : 'KalturaConversionProfile'}
            }
        );
        return result;
    }
}

