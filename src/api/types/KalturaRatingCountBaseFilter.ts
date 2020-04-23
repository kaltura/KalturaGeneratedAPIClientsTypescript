
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRelatedFilter, KalturaRelatedFilterArgs } from './KalturaRelatedFilter';

export interface KalturaRatingCountBaseFilterArgs  extends KalturaRelatedFilterArgs {
    entryIdEqual? : string;
	rankIn? : string;
}


export class KalturaRatingCountBaseFilter extends KalturaRelatedFilter {

    entryIdEqual : string;
	rankIn : string;

    constructor(data? : KalturaRatingCountBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRatingCountBaseFilter' },
				entryIdEqual : { type : 's' },
				rankIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaRatingCountBaseFilter',KalturaRatingCountBaseFilter);
