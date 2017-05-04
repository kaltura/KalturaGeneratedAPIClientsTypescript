
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDistributionAction } from './KalturaDistributionAction';
import { KalturaGenericDistributionProviderStatus } from './KalturaGenericDistributionProviderStatus';
import { KalturaGenericDistributionProviderParser } from './KalturaGenericDistributionProviderParser';
import { KalturaDistributionProtocol } from './KalturaDistributionProtocol';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaGenericDistributionProviderActionArgs  extends KalturaObjectBaseArgs {
    genericDistributionProviderId? : number;
	action? : KalturaDistributionAction;
	resultsParser? : KalturaGenericDistributionProviderParser;
	protocol? : KalturaDistributionProtocol;
	serverAddress? : string;
	remotePath? : string;
	remoteUsername? : string;
	remotePassword? : string;
	editableFields? : string;
	mandatoryFields? : string;
}


export class KalturaGenericDistributionProviderAction extends KalturaObjectBase {

    readonly id : number;
	readonly createdAt : number;
	readonly updatedAt : number;
	genericDistributionProviderId : number;
	action : KalturaDistributionAction;
	readonly status : KalturaGenericDistributionProviderStatus;
	resultsParser : KalturaGenericDistributionProviderParser;
	protocol : KalturaDistributionProtocol;
	serverAddress : string;
	remotePath : string;
	remoteUsername : string;
	remotePassword : string;
	editableFields : string;
	mandatoryFields : string;
	readonly mrssTransformer : string;
	readonly mrssValidator : string;
	readonly resultsTransformer : string;

    constructor(data? : KalturaGenericDistributionProviderActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaGenericDistributionProviderAction' },
				id : { type : 'n'  , readOnly : true},
				createdAt : { type : 'n'  , readOnly : true},
				updatedAt : { type : 'n'  , readOnly : true},
				genericDistributionProviderId : { type : 'n'  },
				action : { type : 'en'  , subType : 'KalturaDistributionAction'},
				status : { type : 'en'  , readOnly : true, subType : 'KalturaGenericDistributionProviderStatus'},
				resultsParser : { type : 'en'  , subType : 'KalturaGenericDistributionProviderParser'},
				protocol : { type : 'en'  , subType : 'KalturaDistributionProtocol'},
				serverAddress : { type : 's'  },
				remotePath : { type : 's'  },
				remoteUsername : { type : 's'  },
				remotePassword : { type : 's'  },
				editableFields : { type : 's'  },
				mandatoryFields : { type : 's'  },
				mrssTransformer : { type : 's'  , readOnly : true},
				mrssValidator : { type : 's'  , readOnly : true},
				resultsTransformer : { type : 's'  , readOnly : true}
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaGenericDistributionProviderAction',KalturaGenericDistributionProviderAction);
