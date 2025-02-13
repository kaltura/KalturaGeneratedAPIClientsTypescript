
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRemoteDropFolder, KalturaRemoteDropFolderArgs } from './KalturaRemoteDropFolder';

export interface KalturaMicrosoftTeamsDropFolderArgs  extends KalturaRemoteDropFolderArgs {
    integrationId? : number;
}


export class KalturaMicrosoftTeamsDropFolder extends KalturaRemoteDropFolder {

    integrationId : number;
	readonly tenantId : string;
	readonly clientSecret : string;
	readonly clientId : string;

    constructor(data? : KalturaMicrosoftTeamsDropFolderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMicrosoftTeamsDropFolder' },
				integrationId : { type : 'n' },
				tenantId : { type : 's', readOnly : true },
				clientSecret : { type : 's', readOnly : true },
				clientId : { type : 's', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMicrosoftTeamsDropFolder',KalturaMicrosoftTeamsDropFolder);
