
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaContentResource, KalturaContentResourceArgs } from './KalturaContentResource';

export interface KalturaDocumentImagesResourceArgs  extends KalturaContentResourceArgs {
    flavorAssetId? : string;
	index? : number;
}


export class KalturaDocumentImagesResource extends KalturaContentResource {

    flavorAssetId : string;
	index : number;

    constructor(data? : KalturaDocumentImagesResourceArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDocumentImagesResource' },
				flavorAssetId : { type : 's' },
				index : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDocumentImagesResource',KalturaDocumentImagesResource);
