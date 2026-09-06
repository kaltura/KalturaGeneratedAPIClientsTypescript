
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaKeyManagementPolicy } from './KalturaKeyManagementPolicy';

import { KalturaKeyManagementPolicyObjectType } from './KalturaKeyManagementPolicyObjectType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface KeyManagementPolicyUpdateActionArgs  extends KalturaRequestArgs {
    objectType : KalturaKeyManagementPolicyObjectType;
	objectId : string;
	keyManagementPolicy : KalturaKeyManagementPolicy;
}

/**
 * Build request payload for service 'keyManagementPolicy' action 'update'.
 *
 * 
 *
 * Server response type:         KalturaKeyManagementPolicy
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class KeyManagementPolicyUpdateAction extends KalturaRequest<KalturaKeyManagementPolicy> {

    objectType : KalturaKeyManagementPolicyObjectType;
	objectId : string;
	keyManagementPolicy : KalturaKeyManagementPolicy;

    constructor(data : KeyManagementPolicyUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				objectType : { type : 'en', subTypeConstructor : KalturaKeyManagementPolicyObjectType, subType : 'KalturaKeyManagementPolicyObjectType' },
				objectId : { type : 's' },
				keyManagementPolicy : { type : 'o', subTypeConstructor : KalturaKeyManagementPolicy, subType : 'KalturaKeyManagementPolicy' }
            }
        );
        return result;
    }
}

