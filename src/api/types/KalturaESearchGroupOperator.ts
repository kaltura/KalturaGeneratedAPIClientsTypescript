
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaESearchUserOperator, KalturaESearchUserOperatorArgs } from './KalturaESearchUserOperator';

export interface KalturaESearchGroupOperatorArgs  extends KalturaESearchUserOperatorArgs {
    
}


export class KalturaESearchGroupOperator extends KalturaESearchUserOperator {

    

    constructor(data? : KalturaESearchGroupOperatorArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchGroupOperator' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaESearchGroupOperator',KalturaESearchGroupOperator);
