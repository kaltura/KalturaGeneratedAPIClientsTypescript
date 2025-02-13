
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPlaybackSource } from './KalturaPlaybackSource';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaBumperArgs  extends KalturaObjectBaseArgs {
    entryId? : string;
	url? : string;
}


export class KalturaBumper extends KalturaObjectBase {

    entryId : string;
	url : string;
	readonly sources : KalturaPlaybackSource[];

    constructor(data? : KalturaBumperArgs)
    {
        super(data);
        if (typeof this.sources === 'undefined') this.sources = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBumper' },
				entryId : { type : 's' },
				url : { type : 's' },
				sources : { type : 'a', readOnly : true, subTypeConstructor : KalturaPlaybackSource, subType : 'KalturaPlaybackSource' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBumper',KalturaBumper);
