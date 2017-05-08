
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface FlavorAssetDeleteActionArgs  extends KalturaRequestArgs {
    id : string;
}

/** 
* Delete Flavor Asset by ID
**/
export class FlavorAssetDeleteAction extends KalturaRequest<void> {

    id : string;

    constructor(data : FlavorAssetDeleteActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'flavorasset' },
				action : { type : 'c', default : 'delete' },
				id : { type : 's' }
            }
        );
        return result;
    }
}

