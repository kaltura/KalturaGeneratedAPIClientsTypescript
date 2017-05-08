
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGenericDistributionProviderAction } from './KalturaGenericDistributionProviderAction';

import { KalturaUploadRequest, KalturaUploadRequestArgs } from '../kaltura-upload-request';

export interface GenericDistributionProviderActionAddResultsTransformFromFileActionArgs  extends KalturaUploadRequestArgs {
    id : number;
	transformFile : File;
}

/** 
* Add MRSS transform file to generic distribution provider action
**/
export class GenericDistributionProviderActionAddResultsTransformFromFileAction extends KalturaUploadRequest<KalturaGenericDistributionProviderAction> {

    id : number;
	transformFile : File;

    constructor(data : GenericDistributionProviderActionAddResultsTransformFromFileActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaGenericDistributionProviderAction', responseConstructor : KalturaGenericDistributionProviderAction  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'contentdistribution_genericdistributionprovideraction' },
				action : { type : 'c', default : 'addResultsTransformFromFile' },
				id : { type : 'n' },
				transformFile : { type : 'f' }
            }
        );
        return result;
    }
}

