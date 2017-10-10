
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCategoryListResponse } from './KalturaCategoryListResponse';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CategoryMoveActionArgs  extends KalturaRequestArgs {
    categoryIds : string;
	targetCategoryParentId : number;
}

/**
 * Build request payload for service 'category' action 'move'.
 *
 * Usage: Move categories that belong to the same parent category to a target categroy - enabled only for ks with disable entitlement
 *
 * Server response type:         KalturaCategoryListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class CategoryMoveAction extends KalturaRequest<KalturaCategoryListResponse> {

    categoryIds : string;
	targetCategoryParentId : number;

    constructor(data : CategoryMoveActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaCategoryListResponse', responseConstructor : KalturaCategoryListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'category' },
				action : { type : 'c', default : 'move' },
				categoryIds : { type : 's' },
				targetCategoryParentId : { type : 'n' }
            }
        );
        return result;
    }
}

