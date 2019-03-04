
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaConfMapsBaseFilter, KalturaConfMapsBaseFilterArgs } from './KalturaConfMapsBaseFilter';

export interface KalturaConfMapsFilterArgs  extends KalturaConfMapsBaseFilterArgs {
    
}


export class KalturaConfMapsFilter extends KalturaConfMapsBaseFilter {

    

    constructor(data? : KalturaConfMapsFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaConfMapsFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaConfMapsFilter',KalturaConfMapsFilter);
