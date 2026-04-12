
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaAudioAttributesArgs  extends KalturaObjectBaseArgs {
    volume? : number;
}


export class KalturaAudioAttributes extends KalturaObjectBase {

    volume : number;

    constructor(data? : KalturaAudioAttributesArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAudioAttributes' },
				volume : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAudioAttributes',KalturaAudioAttributes);
