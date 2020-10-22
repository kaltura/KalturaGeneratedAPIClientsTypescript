
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUrlRecognizer, KalturaUrlRecognizerArgs } from './KalturaUrlRecognizer';

export interface KalturaUrlRecognizerKalturaArgs  extends KalturaUrlRecognizerArgs {
    key? : string;
}


export class KalturaUrlRecognizerKaltura extends KalturaUrlRecognizer {

    key : string;

    constructor(data? : KalturaUrlRecognizerKalturaArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUrlRecognizerKaltura' },
				key : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUrlRecognizerKaltura',KalturaUrlRecognizerKaltura);
