
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaOperationResource } from './KalturaOperationResource';
import { KalturaChapterNamePolicy } from './KalturaChapterNamePolicy';
import { KalturaDimensionsAttributes } from './KalturaDimensionsAttributes';
import { KalturaContentResource, KalturaContentResourceArgs } from './KalturaContentResource';

export interface KalturaOperationResourcesArgs  extends KalturaContentResourceArgs {
    resources? : KalturaOperationResource[];
	chapterNamePolicy? : KalturaChapterNamePolicy;
	dimensionsAttributes? : KalturaDimensionsAttributes[];
}


export class KalturaOperationResources extends KalturaContentResource {

    resources : KalturaOperationResource[];
	chapterNamePolicy : KalturaChapterNamePolicy;
	dimensionsAttributes : KalturaDimensionsAttributes[];

    constructor(data? : KalturaOperationResourcesArgs)
    {
        super(data);
        if (typeof this.resources === 'undefined') this.resources = [];
		if (typeof this.dimensionsAttributes === 'undefined') this.dimensionsAttributes = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaOperationResources' },
				resources : { type : 'a', subTypeConstructor : KalturaOperationResource, subType : 'KalturaOperationResource' },
				chapterNamePolicy : { type : 'en', subTypeConstructor : KalturaChapterNamePolicy, subType : 'KalturaChapterNamePolicy' },
				dimensionsAttributes : { type : 'a', subTypeConstructor : KalturaDimensionsAttributes, subType : 'KalturaDimensionsAttributes' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaOperationResources',KalturaOperationResources);
