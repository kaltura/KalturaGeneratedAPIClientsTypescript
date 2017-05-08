
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ConversionProfileDeleteActionArgs  extends KalturaRequestArgs {
    id : number;
}

/** 
* Delete Conversion Profile by ID
**/
export class ConversionProfileDeleteAction extends KalturaRequest<void> {

    id : number;

    constructor(data : ConversionProfileDeleteActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'conversionprofile'  },
				action : { type : 'c' , default : 'delete'  },
				id : { type : 'n'   }
            }
        );
        return result;
    }
}

