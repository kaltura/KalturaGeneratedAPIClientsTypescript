
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaESearchScoreFunctionDecayAlgorithm } from './KalturaESearchScoreFunctionDecayAlgorithm';
import { KalturaESearchScoreFunctionField } from './KalturaESearchScoreFunctionField';
import { KalturaESearchScoreFunctionBoostMode } from './KalturaESearchScoreFunctionBoostMode';
import { KalturaESearchScoreFunctionOrigin } from './KalturaESearchScoreFunctionOrigin';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaESearchScoreFunctionParamsArgs  extends KalturaObjectBaseArgs {
    decayAlgorithm? : KalturaESearchScoreFunctionDecayAlgorithm;
	functionField? : KalturaESearchScoreFunctionField;
	boostMode? : KalturaESearchScoreFunctionBoostMode;
	origin? : KalturaESearchScoreFunctionOrigin;
	weight? : number;
	scale? : string;
	decay? : number;
}


export class KalturaESearchScoreFunctionParams extends KalturaObjectBase {

    decayAlgorithm : KalturaESearchScoreFunctionDecayAlgorithm;
	functionField : KalturaESearchScoreFunctionField;
	boostMode : KalturaESearchScoreFunctionBoostMode;
	origin : KalturaESearchScoreFunctionOrigin;
	weight : number;
	scale : string;
	decay : number;

    constructor(data? : KalturaESearchScoreFunctionParamsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchScoreFunctionParams' },
				decayAlgorithm : { type : 'es', subTypeConstructor : KalturaESearchScoreFunctionDecayAlgorithm, subType : 'KalturaESearchScoreFunctionDecayAlgorithm' },
				functionField : { type : 'es', subTypeConstructor : KalturaESearchScoreFunctionField, subType : 'KalturaESearchScoreFunctionField' },
				boostMode : { type : 'es', subTypeConstructor : KalturaESearchScoreFunctionBoostMode, subType : 'KalturaESearchScoreFunctionBoostMode' },
				origin : { type : 'es', subTypeConstructor : KalturaESearchScoreFunctionOrigin, subType : 'KalturaESearchScoreFunctionOrigin' },
				weight : { type : 'n' },
				scale : { type : 's' },
				decay : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaESearchScoreFunctionParams',KalturaESearchScoreFunctionParams);
