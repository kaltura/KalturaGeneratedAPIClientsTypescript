
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaTaggedObjectType } from './KalturaTaggedObjectType';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaTagFilterArgs  extends KalturaFilterArgs {
    objectTypeEqual? : KalturaTaggedObjectType;
	objectTypeIn? : string;
	tagEqual? : string;
	tagStartsWith? : string;
	instanceCountEqual? : number;
	instanceCountIn? : number;
}


export class KalturaTagFilter extends KalturaFilter {

    objectTypeEqual : KalturaTaggedObjectType;
	objectTypeIn : string;
	tagEqual : string;
	tagStartsWith : string;
	instanceCountEqual : number;
	instanceCountIn : number;

    constructor(data? : KalturaTagFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTagFilter' },
				objectTypeEqual : { type : 'es', subTypeConstructor : KalturaTaggedObjectType, subType : 'KalturaTaggedObjectType' },
				objectTypeIn : { type : 's' },
				tagEqual : { type : 's' },
				tagStartsWith : { type : 's' },
				instanceCountEqual : { type : 'n' },
				instanceCountIn : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaTagFilter',KalturaTagFilter);
