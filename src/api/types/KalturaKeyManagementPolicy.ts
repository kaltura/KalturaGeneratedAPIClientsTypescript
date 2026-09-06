
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDrmKeyManagementPolicy } from './KalturaDrmKeyManagementPolicy';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaKeyManagementPolicyArgs  extends KalturaObjectBaseArgs {
    keyManagementPolicy? : KalturaDrmKeyManagementPolicy;
}


export class KalturaKeyManagementPolicy extends KalturaObjectBase {

    keyManagementPolicy : KalturaDrmKeyManagementPolicy;

    constructor(data? : KalturaKeyManagementPolicyArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaKeyManagementPolicy' },
				keyManagementPolicy : { type : 'en', subTypeConstructor : KalturaDrmKeyManagementPolicy, subType : 'KalturaDrmKeyManagementPolicy' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaKeyManagementPolicy',KalturaKeyManagementPolicy);
