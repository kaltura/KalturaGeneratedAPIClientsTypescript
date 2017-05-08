
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPlaybackContextOptions } from './KalturaPlaybackContextOptions';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface BaseEntryGetPlaybackContextActionArgs  extends KalturaRequestArgs {
    entryId : string;
	contextDataParams : KalturaPlaybackContextOptions;
}

/** 
* This action delivers all data relevant for player
**/
export class BaseEntryGetPlaybackContextAction extends KalturaRequest<KalturaPlaybackContextOptions> {

    entryId : string;
	contextDataParams : KalturaPlaybackContextOptions;

    constructor(data : BaseEntryGetPlaybackContextActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaPlaybackContextOptions', responseConstructor : KalturaPlaybackContextOptions  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'baseentry' },
				action : { type : 'c', default : 'getPlaybackContext' },
				entryId : { type : 's' },
				contextDataParams : { type : 'o', subTypeConstructor : KalturaPlaybackContextOptions, subType : 'KalturaPlaybackContextOptions' }
            }
        );
        return result;
    }
}

