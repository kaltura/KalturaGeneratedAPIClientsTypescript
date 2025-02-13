
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaWebexAPIIntegrationSetting } from './KalturaWebexAPIIntegrationSetting';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaWebexAPIIntegrationSettingResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaWebexAPIIntegrationSettingResponse extends KalturaListResponse {

    readonly objects : KalturaWebexAPIIntegrationSetting[];

    constructor(data? : KalturaWebexAPIIntegrationSettingResponseArgs)
    {
        super(data);
        if (typeof this.objects === 'undefined') this.objects = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaWebexAPIIntegrationSettingResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaWebexAPIIntegrationSetting, subType : 'KalturaWebexAPIIntegrationSetting' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaWebexAPIIntegrationSettingResponse',KalturaWebexAPIIntegrationSettingResponse);
