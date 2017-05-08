
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUiConfTypeInfo } from './KalturaUiConfTypeInfo';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UiConfGetAvailableTypesActionArgs  extends KalturaRequestArgs {
    
}

/** 
* Retrieve a list of all available versions by object type
**/
export class UiConfGetAvailableTypesAction extends KalturaRequest<KalturaUiConfTypeInfo[]> {

    

    constructor(data? : UiConfGetAvailableTypesActionArgs)
    {
        super(data, {responseType : 'a', responseSubType : 'KalturaUiConfTypeInfo', responseConstructor : KalturaUiConfTypeInfo  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'uiconf'  },
				action : { type : 'c' , default : 'getAvailableTypes'  }
            }
        );
        return result;
    }
}

