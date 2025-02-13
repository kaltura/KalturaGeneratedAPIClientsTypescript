
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaUserScorePropertiesArgs  extends KalturaObjectBaseArgs {
    rank? : number;
	userId? : string;
	score? : number;
}


export class KalturaUserScoreProperties extends KalturaObjectBase {

    rank : number;
	userId : string;
	score : number;

    constructor(data? : KalturaUserScorePropertiesArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUserScoreProperties' },
				rank : { type : 'n' },
				userId : { type : 's' },
				score : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUserScoreProperties',KalturaUserScoreProperties);
