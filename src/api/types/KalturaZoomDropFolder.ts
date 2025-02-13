
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaZoomIntegrationSetting } from './KalturaZoomIntegrationSetting';
import { KalturaDropFolder, KalturaDropFolderArgs } from './KalturaDropFolder';

export interface KalturaZoomDropFolderArgs  extends KalturaDropFolderArgs {
    lastHandledMeetingTime? : Date;
}


export class KalturaZoomDropFolder extends KalturaDropFolder {

    readonly zoomVendorIntegrationId : number;
	readonly zoomVendorIntegration : KalturaZoomIntegrationSetting;
	lastHandledMeetingTime : Date;

    constructor(data? : KalturaZoomDropFolderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaZoomDropFolder' },
				zoomVendorIntegrationId : { type : 'n', readOnly : true },
				zoomVendorIntegration : { type : 'o', readOnly : true, subTypeConstructor : KalturaZoomIntegrationSetting, subType : 'KalturaZoomIntegrationSetting' },
				lastHandledMeetingTime : { type : 'd' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaZoomDropFolder',KalturaZoomDropFolder);
