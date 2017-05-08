
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LiveStreamRegenerateStreamTokenActionArgs  extends KalturaRequestArgs {
    entryId : string;
}

/** 
* Regenerate new secure token for liveStream
**/
export class LiveStreamRegenerateStreamTokenAction extends KalturaRequest<void> {

    entryId : string;

    constructor(data : LiveStreamRegenerateStreamTokenActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'livestream' },
				action : { type : 'c', default : 'regenerateStreamToken' },
				entryId : { type : 's' }
            }
        );
        return result;
    }
}

