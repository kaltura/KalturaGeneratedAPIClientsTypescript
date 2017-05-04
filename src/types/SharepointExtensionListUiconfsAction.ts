
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUiConfListResponse } from './KalturaUiConfListResponse';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SharepointExtensionListUiconfsActionArgs  extends KalturaRequestArgs {
    
}

/** 
* list uiconfs for sharepoint extension
**/
export class SharepointExtensionListUiconfsAction extends KalturaRequest<KalturaUiConfListResponse> {

    

    constructor(data? : SharepointExtensionListUiconfsActionArgs)
    {
        super(data, 'o', 'KalturaUiConfListResponse');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'kalturasharepointextension_sharepointextension' },
				action : { type : 'c' , default : 'listUiconfs' }
            }
        );
        return result;
    }
}

