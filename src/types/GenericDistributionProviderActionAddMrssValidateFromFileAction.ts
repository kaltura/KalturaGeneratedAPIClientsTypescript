
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGenericDistributionProviderAction } from './KalturaGenericDistributionProviderAction';

import { KalturaUploadRequest, KalturaUploadRequestArgs } from '../kaltura-upload-request';

export interface GenericDistributionProviderActionAddMrssValidateFromFileActionArgs  extends KalturaUploadRequestArgs {
    id : number;
	xsdFile : File;
}

/** 
* Add MRSS validate file to generic distribution provider action
**/
export class GenericDistributionProviderActionAddMrssValidateFromFileAction extends KalturaUploadRequest<KalturaGenericDistributionProviderAction> {

    id : number;
	xsdFile : File;

    constructor(data : GenericDistributionProviderActionAddMrssValidateFromFileActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaGenericDistributionProviderAction', responseConstructor : KalturaGenericDistributionProviderAction  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'contentdistribution_genericdistributionprovideraction'  },
				action : { type : 'c' , default : 'addMrssValidateFromFile'  },
				id : { type : 'n'   },
				xsdFile : { type : 'f'   }
            }
        );
        return result;
    }
}

