
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaRatingCountArgs  extends KalturaObjectBaseArgs {
    entryId? : string;
	rank? : number;
	count? : number;
}


export class KalturaRatingCount extends KalturaObjectBase {

    entryId : string;
	rank : number;
	count : number;

    constructor(data? : KalturaRatingCountArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRatingCount' },
				entryId : { type : 's' },
				rank : { type : 'n' },
				count : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaRatingCount',KalturaRatingCount);
