
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ThumbAssetServeByEntryIdActionArgs  extends KalturaRequestArgs {
    entryId : string;
	thumbParamId? : number;
}

/** 
* Serves thumbnail by entry id and thumnail params id
**/
export class ThumbAssetServeByEntryIdAction extends KalturaRequest<string> {

    entryId : string;
	thumbParamId : number;

    constructor(data : ThumbAssetServeByEntryIdActionArgs)
    {
        super(data, {responseType : 'f', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'thumbasset' },
				action : { type : 'c', default : 'serveByEntryId' },
				entryId : { type : 's' },
				thumbParamId : { type : 'n' }
            }
        );
        return result;
    }
}

