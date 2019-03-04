
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaESearchHistoryArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaESearchHistory extends KalturaObjectBase {

    readonly searchTerm : string;
	readonly searchedObject : string;
	readonly timestamp : number;

    constructor(data? : KalturaESearchHistoryArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchHistory' },
				searchTerm : { type : 's', readOnly : true },
				searchedObject : { type : 's', readOnly : true },
				timestamp : { type : 'n', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaESearchHistory',KalturaESearchHistory);
