
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface TagDeletePendingActionArgs  extends KalturaRequestArgs {
    
}

/** 
* Action goes over all tags with instanceCount==0 and checks whether they need to
* be removed from the DB. Returns number of removed tags.
**/
export class TagDeletePendingAction extends KalturaRequest<number> {

    

    constructor(data? : TagDeletePendingActionArgs)
    {
        super(data, {responseType : 'n', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'tagsearch_tag' },
				action : { type : 'c', default : 'deletePending' }
            }
        );
        return result;
    }
}

