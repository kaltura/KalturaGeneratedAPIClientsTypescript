
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFlavorReadyBehaviorType } from './KalturaFlavorReadyBehaviorType';
import { KalturaAssetParamsOrigin } from './KalturaAssetParamsOrigin';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaAssetParamsDeletePolicy } from './KalturaAssetParamsDeletePolicy';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaConversionProfileAssetParamsArgs  extends KalturaObjectBaseArgs {
    readyBehavior? : KalturaFlavorReadyBehaviorType;
	origin? : KalturaAssetParamsOrigin;
	systemName? : string;
	forceNoneComplied? : KalturaNullableBoolean;
	deletePolicy? : KalturaAssetParamsDeletePolicy;
	isEncrypted? : KalturaNullableBoolean;
	contentAwareness? : number;
	twoPass? : KalturaNullableBoolean;
}


export class KalturaConversionProfileAssetParams extends KalturaObjectBase {

    readonly conversionProfileId : number;
	readonly assetParamsId : number;
	readyBehavior : KalturaFlavorReadyBehaviorType;
	origin : KalturaAssetParamsOrigin;
	systemName : string;
	forceNoneComplied : KalturaNullableBoolean;
	deletePolicy : KalturaAssetParamsDeletePolicy;
	isEncrypted : KalturaNullableBoolean;
	contentAwareness : number;
	twoPass : KalturaNullableBoolean;

    constructor(data? : KalturaConversionProfileAssetParamsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaConversionProfileAssetParams'  },
				conversionProfileId : { type : 'n'  , readOnly : true },
				assetParamsId : { type : 'n'  , readOnly : true },
				readyBehavior : { type : 'en'   , subType : 'KalturaFlavorReadyBehaviorType'},
				origin : { type : 'en'   , subType : 'KalturaAssetParamsOrigin'},
				systemName : { type : 's'   },
				forceNoneComplied : { type : 'en'   , subType : 'KalturaNullableBoolean'},
				deletePolicy : { type : 'en'   , subType : 'KalturaAssetParamsDeletePolicy'},
				isEncrypted : { type : 'en'   , subType : 'KalturaNullableBoolean'},
				contentAwareness : { type : 'n'   },
				twoPass : { type : 'en'   , subType : 'KalturaNullableBoolean'}
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaConversionProfileAssetParams',KalturaConversionProfileAssetParams);
