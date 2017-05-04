
import { KalturaObjectMetadata } from './kaltura-object-base';
import { KalturaBaseResponseProfile } from './types/KalturaBaseResponseProfile';
import { KalturaObjectBase, KalturaObjectBaseArgs } from './kaltura-object-base';

export interface KalturaRequestBaseArgs  extends KalturaObjectBaseArgs {
    partnerId? : number;
	ks? : string;
	responseProfile? : KalturaBaseResponseProfile;
}


export class KalturaRequestBase extends KalturaObjectBase {

    readonly apiVersion : string;
	partnerId : number;
	ks : string;
	responseProfile : KalturaBaseResponseProfile;

    constructor(data : KalturaRequestBaseArgs)
    {
        super(data);
        if (typeof this.apiVersion === 'undefined') this.apiVersion = "3.3.0";
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                apiVersion : { type : 's'  , readOnly : true},
				partnerId : { type : 'n'  },
				ks : { type : 's'  },
				responseProfile : { type : 'o'  , subType : 'KalturaBaseResponseProfile'}
            }
        );
        return result;
    }
}

