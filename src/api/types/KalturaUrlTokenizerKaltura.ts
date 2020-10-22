
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUrlTokenizer, KalturaUrlTokenizerArgs } from './KalturaUrlTokenizer';

export interface KalturaUrlTokenizerKalturaArgs  extends KalturaUrlTokenizerArgs {
    
}


export class KalturaUrlTokenizerKaltura extends KalturaUrlTokenizer {

    

    constructor(data? : KalturaUrlTokenizerKalturaArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUrlTokenizerKaltura' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUrlTokenizerKaltura',KalturaUrlTokenizerKaltura);
