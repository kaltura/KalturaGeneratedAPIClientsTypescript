
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAnnotation } from './KalturaAnnotation';

import { KalturaCuePoint } from './KalturaCuePoint';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AnnotationUpdateActionArgs  extends KalturaRequestArgs {
    id : string;
	annotation : KalturaCuePoint;
}

/** 
* Update annotation by id
**/
export class AnnotationUpdateAction extends KalturaRequest<KalturaAnnotation> {

    id : string;
	annotation : KalturaCuePoint;

    constructor(data : AnnotationUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaAnnotation', responseConstructor : KalturaAnnotation  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'annotation_annotation'  },
				action : { type : 'c' , default : 'update'  },
				id : { type : 's'   },
				annotation : { type : 'o'   , fallbackConstructor :  KalturaCuePoint, subType : 'KalturaCuePoint'}
            }
        );
        return result;
    }
}

