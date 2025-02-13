
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDimensionsAttributes, KalturaDimensionsAttributesArgs } from './KalturaDimensionsAttributes';

export interface KalturaAspectRatioCropAttributesArgs  extends KalturaDimensionsAttributesArgs {
    aspectRatio? : number;
}


export class KalturaAspectRatioCropAttributes extends KalturaDimensionsAttributes {

    aspectRatio : number;

    constructor(data? : KalturaAspectRatioCropAttributesArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAspectRatioCropAttributes' },
				aspectRatio : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAspectRatioCropAttributes',KalturaAspectRatioCropAttributes);
