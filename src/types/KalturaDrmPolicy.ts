
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDrmProviderType } from './KalturaDrmProviderType';
import { KalturaDrmPolicyStatus } from './KalturaDrmPolicyStatus';
import { KalturaDrmLicenseScenario } from './KalturaDrmLicenseScenario';
import { KalturaDrmLicenseType } from './KalturaDrmLicenseType';
import { KalturaDrmLicenseExpirationPolicy } from './KalturaDrmLicenseExpirationPolicy';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaDrmPolicyArgs  extends KalturaObjectBaseArgs {
    partnerId? : number;
	name? : string;
	systemName? : string;
	description? : string;
	provider? : KalturaDrmProviderType;
	status? : KalturaDrmPolicyStatus;
	scenario? : KalturaDrmLicenseScenario;
	licenseType? : KalturaDrmLicenseType;
	licenseExpirationPolicy? : KalturaDrmLicenseExpirationPolicy;
	duration? : number;
}


export class KalturaDrmPolicy extends KalturaObjectBase {

    readonly id : number;
	partnerId : number;
	name : string;
	systemName : string;
	description : string;
	provider : KalturaDrmProviderType;
	status : KalturaDrmPolicyStatus;
	scenario : KalturaDrmLicenseScenario;
	licenseType : KalturaDrmLicenseType;
	licenseExpirationPolicy : KalturaDrmLicenseExpirationPolicy;
	duration : number;
	readonly createdAt : number;
	readonly updatedAt : number;

    constructor(data? : KalturaDrmPolicyArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDrmPolicy' },
				id : { type : 'n', readOnly : true },
				partnerId : { type : 'n' },
				name : { type : 's' },
				systemName : { type : 's' },
				description : { type : 's' },
				provider : { type : 'es', subTypeConstructor : KalturaDrmProviderType, subType : 'KalturaDrmProviderType' },
				status : { type : 'en', subTypeConstructor : KalturaDrmPolicyStatus, subType : 'KalturaDrmPolicyStatus' },
				scenario : { type : 'es', subTypeConstructor : KalturaDrmLicenseScenario, subType : 'KalturaDrmLicenseScenario' },
				licenseType : { type : 'es', subTypeConstructor : KalturaDrmLicenseType, subType : 'KalturaDrmLicenseType' },
				licenseExpirationPolicy : { type : 'en', subTypeConstructor : KalturaDrmLicenseExpirationPolicy, subType : 'KalturaDrmLicenseExpirationPolicy' },
				duration : { type : 'n' },
				createdAt : { type : 'n', readOnly : true },
				updatedAt : { type : 'n', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDrmPolicy',KalturaDrmPolicy);
