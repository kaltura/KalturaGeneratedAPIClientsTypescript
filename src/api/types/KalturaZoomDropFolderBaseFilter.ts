
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDropFolderFilter, KalturaDropFolderFilterArgs } from './KalturaDropFolderFilter';

export interface KalturaZoomDropFolderBaseFilterArgs  extends KalturaDropFolderFilterArgs {
    
}


export class KalturaZoomDropFolderBaseFilter extends KalturaDropFolderFilter {

    

    constructor(data? : KalturaZoomDropFolderBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaZoomDropFolderBaseFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaZoomDropFolderBaseFilter',KalturaZoomDropFolderBaseFilter);
