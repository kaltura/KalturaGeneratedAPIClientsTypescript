
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserScorePropertiesResponse } from './KalturaUserScorePropertiesResponse';

import { KalturaGameObjectType } from './KalturaGameObjectType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserScoreUpdateActionArgs  extends KalturaRequestArgs {
    gameObjectId : string;
	gameObjectType : KalturaGameObjectType;
	userId : string;
	score : number;
}

/**
 * Build request payload for service 'userScore' action 'update'.
 *
 * 
 *
 * Server response type:         KalturaUserScorePropertiesResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class UserScoreUpdateAction extends KalturaRequest<KalturaUserScorePropertiesResponse> {

    gameObjectId : string;
	gameObjectType : KalturaGameObjectType;
	userId : string;
	score : number;

    constructor(data : UserScoreUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				gameObjectId : { type : 's' },
				gameObjectType : { type : 'es', subTypeConstructor : KalturaGameObjectType, subType : 'KalturaGameObjectType' },
				userId : { type : 's' },
				score : { type : 'n' }
            }
        );
        return result;
    }
}

