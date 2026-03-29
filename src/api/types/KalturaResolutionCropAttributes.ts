
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDimensionsAttributes, KalturaDimensionsAttributesArgs } from './KalturaDimensionsAttributes';

export interface KalturaResolutionCropAttributesArgs  extends KalturaDimensionsAttributesArgs {
    targetWidth? : number;
	targetHeight? : number;
}


export class KalturaResolutionCropAttributes extends KalturaDimensionsAttributes {

    targetWidth : number;
	targetHeight : number;

    constructor(data? : KalturaResolutionCropAttributesArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaResolutionCropAttributes' },
				targetWidth : { type : 'n' },
				targetHeight : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaResolutionCropAttributes',KalturaResolutionCropAttributes);
