
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaKeyManagementPolicy } from './KalturaKeyManagementPolicy';

import { KalturaKeyManagementPolicyObjectType } from './KalturaKeyManagementPolicyObjectType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface KeyManagementPolicyGetActionArgs  extends KalturaRequestArgs {
    objectType : KalturaKeyManagementPolicyObjectType;
	objectId : string;
}

/**
 * Build request payload for service 'keyManagementPolicy' action 'get'.
 *
 * 
 *
 * Server response type:         KalturaKeyManagementPolicy
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class KeyManagementPolicyGetAction extends KalturaRequest<KalturaKeyManagementPolicy> {

    objectType : KalturaKeyManagementPolicyObjectType;
	objectId : string;

    constructor(data : KeyManagementPolicyGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaKeyManagementPolicy', responseConstructor : KalturaKeyManagementPolicy  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'drm_keymanagementpolicy' },
				action : { type : 'c', default : 'get' },
				objectType : { type : 'en', subTypeConstructor : KalturaKeyManagementPolicyObjectType, subType : 'KalturaKeyManagementPolicyObjectType' },
				objectId : { type : 's' }
            }
        );
        return result;
    }
}

