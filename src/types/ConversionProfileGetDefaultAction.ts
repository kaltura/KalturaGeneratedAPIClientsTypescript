
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConversionProfile } from './KalturaConversionProfile';

import { KalturaConversionProfileType } from './KalturaConversionProfileType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ConversionProfileGetDefaultActionArgs  extends KalturaRequestArgs {
    type? : KalturaConversionProfileType;
}

/** 
* Get the partner's default conversion profile
**/
export class ConversionProfileGetDefaultAction extends KalturaRequest<KalturaConversionProfile> {

    type : KalturaConversionProfileType;

    constructor(data? : ConversionProfileGetDefaultActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaConversionProfile', responseConstructor : KalturaConversionProfile  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'conversionprofile'  },
				action : { type : 'c' , default : 'getDefault'  },
				type : { type : 'es'   , subType : 'KalturaConversionProfileType'}
            }
        );
        return result;
    }
}

