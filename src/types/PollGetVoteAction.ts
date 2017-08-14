
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PollGetVoteActionArgs  extends KalturaRequestArgs {
    pollId : string;
	userId : string;
}

/** 
* Vote Action
**/
export class PollGetVoteAction extends KalturaRequest<string> {

    pollId : string;
	userId : string;

    constructor(data : PollGetVoteActionArgs)
    {
        super(data, {responseType : 's', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'poll_poll' },
				action : { type : 'c', default : 'getVote' },
				pollId : { type : 's' },
				userId : { type : 's' }
            }
        );
        return result;
    }
}

