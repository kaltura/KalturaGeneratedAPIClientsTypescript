
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaBaseSyndicationFeedBaseFilterArgs  extends KalturaFilterArgs {
    idEqual? : string;
	idIn? : string;
}


export class KalturaBaseSyndicationFeedBaseFilter extends KalturaFilter {

    idEqual : string;
	idIn : string;

    constructor(data? : KalturaBaseSyndicationFeedBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBaseSyndicationFeedBaseFilter' },
				idEqual : { type : 's' },
				idIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBaseSyndicationFeedBaseFilter',KalturaBaseSyndicationFeedBaseFilter);
