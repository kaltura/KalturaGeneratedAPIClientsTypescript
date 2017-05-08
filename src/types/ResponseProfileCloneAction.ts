
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaResponseProfile } from './KalturaResponseProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ResponseProfileCloneActionArgs  extends KalturaRequestArgs {
    id : number;
	profile : KalturaResponseProfile;
}

/** 
* Clone an existing response profile
**/
export class ResponseProfileCloneAction extends KalturaRequest<KalturaResponseProfile> {

    id : number;
	profile : KalturaResponseProfile;

    constructor(data : ResponseProfileCloneActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaResponseProfile', responseConstructor : KalturaResponseProfile  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'responseprofile'  },
				action : { type : 'c' , default : 'clone'  },
				id : { type : 'n'   },
				profile : { type : 'o'   , fallbackConstructor :  KalturaResponseProfile, subType : 'KalturaResponseProfile'}
            }
        );
        return result;
    }
}

