
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUserScoreProperties } from './KalturaUserScoreProperties';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaUserScorePropertiesResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaUserScorePropertiesResponse extends KalturaListResponse {

    readonly objects : KalturaUserScoreProperties[];

    constructor(data? : KalturaUserScorePropertiesResponseArgs)
    {
        super(data);
        if (typeof this.objects === 'undefined') this.objects = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUserScorePropertiesResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaUserScoreProperties, subType : 'KalturaUserScoreProperties' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUserScorePropertiesResponse',KalturaUserScorePropertiesResponse);
