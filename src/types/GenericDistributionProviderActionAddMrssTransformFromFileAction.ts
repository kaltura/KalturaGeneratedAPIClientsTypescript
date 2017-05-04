
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGenericDistributionProviderAction } from './KalturaGenericDistributionProviderAction';

import { KalturaUploadRequest, KalturaUploadRequestArgs } from '../kaltura-upload-request';

export interface GenericDistributionProviderActionAddMrssTransformFromFileActionArgs  extends KalturaUploadRequestArgs {
    id : number;
	xslFile : File;
}

/** 
* Add MRSS transform file to generic distribution provider action
**/
export class GenericDistributionProviderActionAddMrssTransformFromFileAction extends KalturaUploadRequest<KalturaGenericDistributionProviderAction> {

    id : number;
	xslFile : File;

    constructor(data : GenericDistributionProviderActionAddMrssTransformFromFileActionArgs)
    {
        super(data, 'o', 'KalturaGenericDistributionProviderAction');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'contentdistribution_genericdistributionprovideraction' },
				action : { type : 'c' , default : 'addMrssTransformFromFile' },
				id : { type : 'n'  },
				xslFile : { type : 'f'  }
            }
        );
        return result;
    }
}

