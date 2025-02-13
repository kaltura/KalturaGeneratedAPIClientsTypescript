
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserScorePropertiesResponse } from './KalturaUserScorePropertiesResponse';

import { KalturaGameObjectType } from './KalturaGameObjectType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserScoreDeleteActionArgs  extends KalturaRequestArgs {
    gameObjectId : string;
	gameObjectType : KalturaGameObjectType;
	userId : string;
}

/**
 * Build request payload for service 'userScore' action 'delete'.
 *
 * 
 *
 * Server response type:         KalturaUserScorePropertiesResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class UserScoreDeleteAction extends KalturaRequest<KalturaUserScorePropertiesResponse> {

    gameObjectId : string;
	gameObjectType : KalturaGameObjectType;
	userId : string;

    constructor(data : UserScoreDeleteActionArgs)
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
				action : { type : 'c', default : 'delete' },
				gameObjectId : { type : 's' },
				gameObjectType : { type : 'es', subTypeConstructor : KalturaGameObjectType, subType : 'KalturaGameObjectType' },
				userId : { type : 's' }
            }
        );
        return result;
    }
}

