
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaThumbnailServeOptionsArgs  extends KalturaObjectBaseArgs {
    download? : boolean;
	referrer? : string;
}


export class KalturaThumbnailServeOptions extends KalturaObjectBase {

    download : boolean;
	referrer : string;

    constructor(data? : KalturaThumbnailServeOptionsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaThumbnailServeOptions' },
				download : { type : 'b'  },
				referrer : { type : 's'  }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaThumbnailServeOptions',KalturaThumbnailServeOptions);
