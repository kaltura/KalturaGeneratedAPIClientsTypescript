
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDimensionsAttributes, KalturaDimensionsAttributesArgs } from './KalturaDimensionsAttributes';

export interface KalturaAspectRatioScaleAttributesArgs  extends KalturaDimensionsAttributesArgs {
    aspectRatio? : number;
}


export class KalturaAspectRatioScaleAttributes extends KalturaDimensionsAttributes {

    aspectRatio : number;

    constructor(data? : KalturaAspectRatioScaleAttributesArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAspectRatioScaleAttributes' },
				aspectRatio : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAspectRatioScaleAttributes',KalturaAspectRatioScaleAttributes);
