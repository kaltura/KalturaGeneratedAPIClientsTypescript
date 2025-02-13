
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaUiConfV2RedirectArgs  extends KalturaObjectBaseArgs {
    v7id? : number;
	isApproved? : boolean;
	translatePlugins? : boolean;
}


export class KalturaUiConfV2Redirect extends KalturaObjectBase {

    v7id : number;
	isApproved : boolean;
	translatePlugins : boolean;

    constructor(data? : KalturaUiConfV2RedirectArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUiConfV2Redirect' },
				v7id : { type : 'n' },
				isApproved : { type : 'b' },
				translatePlugins : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUiConfV2Redirect',KalturaUiConfV2Redirect);
