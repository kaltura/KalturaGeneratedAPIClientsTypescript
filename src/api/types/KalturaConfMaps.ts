
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaConfMapsSourceLocation } from './KalturaConfMapsSourceLocation';
import { KalturaConfMapsStatus } from './KalturaConfMapsStatus';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaConfMapsArgs  extends KalturaObjectBaseArgs {
    name? : string;
	content? : string;
	rawData? : string;
	relatedHost? : string;
	sourceLocation? : KalturaConfMapsSourceLocation;
	remarks? : string;
	status? : KalturaConfMapsStatus;
}


export class KalturaConfMaps extends KalturaObjectBase {

    name : string;
	content : string;
	rawData : string;
	readonly isEditable : boolean;
	readonly createdAt : Date;
	relatedHost : string;
	readonly version : number;
	sourceLocation : KalturaConfMapsSourceLocation;
	remarks : string;
	status : KalturaConfMapsStatus;

    constructor(data? : KalturaConfMapsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaConfMaps' },
				name : { type : 's' },
				content : { type : 's' },
				rawData : { type : 's' },
				isEditable : { type : 'b', readOnly : true },
				createdAt : { type : 'd', readOnly : true },
				relatedHost : { type : 's' },
				version : { type : 'n', readOnly : true },
				sourceLocation : { type : 'es', subTypeConstructor : KalturaConfMapsSourceLocation, subType : 'KalturaConfMapsSourceLocation' },
				remarks : { type : 's' },
				status : { type : 'en', subTypeConstructor : KalturaConfMapsStatus, subType : 'KalturaConfMapsStatus' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaConfMaps',KalturaConfMaps);
