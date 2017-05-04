
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDistributionAction } from './KalturaDistributionAction';
import { KalturaDistributionErrorType } from './KalturaDistributionErrorType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaDistributionValidationErrorArgs  extends KalturaObjectBaseArgs {
    action? : KalturaDistributionAction;
	errorType? : KalturaDistributionErrorType;
	description? : string;
}


export class KalturaDistributionValidationError extends KalturaObjectBase {

    action : KalturaDistributionAction;
	errorType : KalturaDistributionErrorType;
	description : string;

    constructor(data? : KalturaDistributionValidationErrorArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaDistributionValidationError' },
				action : { type : 'en'  , subType : 'KalturaDistributionAction'},
				errorType : { type : 'en'  , subType : 'KalturaDistributionErrorType'},
				description : { type : 's'  }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDistributionValidationError',KalturaDistributionValidationError);
