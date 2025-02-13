
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaWebexAPIIntegrationSetting } from './KalturaWebexAPIIntegrationSetting';
import { KalturaDropFolder, KalturaDropFolderArgs } from './KalturaDropFolder';

export interface KalturaWebexAPIDropFolderArgs  extends KalturaDropFolderArgs {
    
}


export class KalturaWebexAPIDropFolder extends KalturaDropFolder {

    readonly webexAPIVendorIntegrationId : number;
	readonly webexAPIVendorIntegration : KalturaWebexAPIIntegrationSetting;

    constructor(data? : KalturaWebexAPIDropFolderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaWebexAPIDropFolder' },
				webexAPIVendorIntegrationId : { type : 'n', readOnly : true },
				webexAPIVendorIntegration : { type : 'o', readOnly : true, subTypeConstructor : KalturaWebexAPIIntegrationSetting, subType : 'KalturaWebexAPIIntegrationSetting' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaWebexAPIDropFolder',KalturaWebexAPIDropFolder);
