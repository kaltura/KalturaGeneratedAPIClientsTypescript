
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUiConf } from './KalturaUiConf';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UiConfAddActionArgs  extends KalturaRequestArgs {
    uiConf : KalturaUiConf;
}

/** 
* UIConf Add action allows you to add a UIConf to Kaltura DB
**/
export class UiConfAddAction extends KalturaRequest<KalturaUiConf> {

    uiConf : KalturaUiConf;

    constructor(data : UiConfAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaUiConf', responseConstructor : KalturaUiConf  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'uiconf' },
				action : { type : 'c', default : 'add' },
				uiConf : { type : 'o', subTypeConstructor : KalturaUiConf, subType : 'KalturaUiConf' }
            }
        );
        return result;
    }
}

