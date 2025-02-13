
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaGameObjectType } from './KalturaGameObjectType';
import { KalturaUserScorePropertiesBaseFilter, KalturaUserScorePropertiesBaseFilterArgs } from './KalturaUserScorePropertiesBaseFilter';

export interface KalturaUserScorePropertiesFilterArgs  extends KalturaUserScorePropertiesBaseFilterArgs {
    gameObjectId? : string;
	gameObjectType? : KalturaGameObjectType;
	userIdEqual? : string;
	placesAboveUser? : number;
	placesBelowUser? : number;
}


export class KalturaUserScorePropertiesFilter extends KalturaUserScorePropertiesBaseFilter {

    gameObjectId : string;
	gameObjectType : KalturaGameObjectType;
	userIdEqual : string;
	placesAboveUser : number;
	placesBelowUser : number;

    constructor(data? : KalturaUserScorePropertiesFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUserScorePropertiesFilter' },
				gameObjectId : { type : 's' },
				gameObjectType : { type : 'es', subTypeConstructor : KalturaGameObjectType, subType : 'KalturaGameObjectType' },
				userIdEqual : { type : 's' },
				placesAboveUser : { type : 'n' },
				placesBelowUser : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUserScorePropertiesFilter',KalturaUserScorePropertiesFilter);
