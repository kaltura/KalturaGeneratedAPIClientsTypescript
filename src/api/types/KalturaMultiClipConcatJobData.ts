
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaChapterNamePolicy } from './KalturaChapterNamePolicy';
import { KalturaCropAspectRatio } from './KalturaCropAspectRatio';
import { KalturaOperationResource } from './KalturaOperationResource';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';

export interface KalturaMultiClipConcatJobDataArgs  extends KalturaJobDataArgs {
    destEntryId? : string;
	multiTempEntryId? : string;
	partnerId? : number;
	priority? : number;
	chapterNamePolicy? : KalturaChapterNamePolicy;
	aspectRatio? : KalturaCropAspectRatio;
	operationResources? : KalturaOperationResource[];
}


export class KalturaMultiClipConcatJobData extends KalturaJobData {

    destEntryId : string;
	multiTempEntryId : string;
	partnerId : number;
	priority : number;
	chapterNamePolicy : KalturaChapterNamePolicy;
	aspectRatio : KalturaCropAspectRatio;
	operationResources : KalturaOperationResource[];

    constructor(data? : KalturaMultiClipConcatJobDataArgs)
    {
        super(data);
        if (typeof this.operationResources === 'undefined') this.operationResources = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMultiClipConcatJobData' },
				destEntryId : { type : 's' },
				multiTempEntryId : { type : 's' },
				partnerId : { type : 'n' },
				priority : { type : 'n' },
				chapterNamePolicy : { type : 'en', subTypeConstructor : KalturaChapterNamePolicy, subType : 'KalturaChapterNamePolicy' },
				aspectRatio : { type : 'o', subTypeConstructor : KalturaCropAspectRatio, subType : 'KalturaCropAspectRatio' },
				operationResources : { type : 'a', subTypeConstructor : KalturaOperationResource, subType : 'KalturaOperationResource' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMultiClipConcatJobData',KalturaMultiClipConcatJobData);
