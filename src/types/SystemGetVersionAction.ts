
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SystemGetVersionActionArgs  extends KalturaRequestArgs {
    
}


export class SystemGetVersionAction extends KalturaRequest<string> {

    

    constructor(data? : SystemGetVersionActionArgs)
    {
        super(data, 's', '');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'system' },
				action : { type : 'c' , default : 'getVersion' }
            }
        );
        return result;
    }
}

