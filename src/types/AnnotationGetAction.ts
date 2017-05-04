
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCuePoint } from './KalturaCuePoint';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AnnotationGetActionArgs  extends KalturaRequestArgs {
    id : string;
}

/** 
* Retrieve an CuePoint object by id
**/
export class AnnotationGetAction extends KalturaRequest<KalturaCuePoint> {

    id : string;

    constructor(data : AnnotationGetActionArgs)
    {
        super(data, 'o', 'KalturaCuePoint');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'annotation_annotation' },
				action : { type : 'c' , default : 'get' },
				id : { type : 's'  }
            }
        );
        return result;
    }
}

