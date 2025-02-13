
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserScorePropertiesResponse } from './KalturaUserScorePropertiesResponse';

import { KalturaUserScorePropertiesFilter } from './KalturaUserScorePropertiesFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserScoreListActionArgs  extends KalturaRequestArgs {
    filter : KalturaUserScorePropertiesFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'userScore' action 'list'.
 *
 * 
 *
 * Server response type:         KalturaUserScorePropertiesResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class UserScoreListAction extends KalturaRequest<KalturaUserScorePropertiesResponse> {

    filter : KalturaUserScorePropertiesFilter;
	pager : KalturaFilterPager;

    constructor(data : UserScoreListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaUserScorePropertiesResponse', responseConstructor : KalturaUserScorePropertiesResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'game_userscore' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaUserScorePropertiesFilter, subType : 'KalturaUserScorePropertiesFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

