
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SystemGetTimeActionArgs  extends KalturaRequestArgs {
    
}


export class SystemGetTimeAction extends KalturaRequest<number> {

    

    constructor(data? : SystemGetTimeActionArgs)
    {
        super(data, 'n', '');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'system' },
				action : { type : 'c' , default : 'getTime' }
            }
        );
        return result;
    }
}

