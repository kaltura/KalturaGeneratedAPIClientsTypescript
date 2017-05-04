
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaResponseProfile } from './KalturaResponseProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ResponseProfileAddActionArgs  extends KalturaRequestArgs {
    addResponseProfile : KalturaResponseProfile;
}

/** 
* Add new response profile
**/
export class ResponseProfileAddAction extends KalturaRequest<KalturaResponseProfile> {

    addResponseProfile : KalturaResponseProfile;

    constructor(data : ResponseProfileAddActionArgs)
    {
        super(data, 'o', 'KalturaResponseProfile');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'responseprofile' },
				action : { type : 'c' , default : 'add' },
				addResponseProfile : { type : 'o'  , subType : 'KalturaResponseProfile'}
            }
        );
        return result;
    }
}

