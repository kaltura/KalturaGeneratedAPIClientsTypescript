
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaCuePointFilter } from './KalturaCuePointFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AnnotationServeBulkActionArgs  extends KalturaRequestArgs {
    filter? : KalturaCuePointFilter;
	pager? : KalturaFilterPager;
}

/** 
* Download multiple cue points objects as XML definitions
**/
export class AnnotationServeBulkAction extends KalturaRequest<string> {

    filter : KalturaCuePointFilter;
	pager : KalturaFilterPager;

    constructor(data? : AnnotationServeBulkActionArgs)
    {
        super(data, {responseType : 'f', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'annotation_annotation' },
				action : { type : 'c', default : 'serveBulk' },
				filter : { type : 'o', subTypeConstructor : KalturaCuePointFilter, subType : 'KalturaCuePointFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

