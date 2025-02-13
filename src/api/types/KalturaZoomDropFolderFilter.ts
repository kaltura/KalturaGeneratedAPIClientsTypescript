
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaZoomDropFolderBaseFilter, KalturaZoomDropFolderBaseFilterArgs } from './KalturaZoomDropFolderBaseFilter';

export interface KalturaZoomDropFolderFilterArgs  extends KalturaZoomDropFolderBaseFilterArgs {
    
}


export class KalturaZoomDropFolderFilter extends KalturaZoomDropFolderBaseFilter {

    

    constructor(data? : KalturaZoomDropFolderFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaZoomDropFolderFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaZoomDropFolderFilter',KalturaZoomDropFolderFilter);
