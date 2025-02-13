
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaConfigurableDistributionProfile, KalturaConfigurableDistributionProfileArgs } from './KalturaConfigurableDistributionProfile';

export interface KalturaCortexApiDistributionProfileArgs  extends KalturaConfigurableDistributionProfileArgs {
    username? : string;
	host? : string;
	password? : string;
	folderrecordid? : string;
	metadataprofileid? : string;
	metadataprofileidpushing? : string;
}


export class KalturaCortexApiDistributionProfile extends KalturaConfigurableDistributionProfile {

    username : string;
	host : string;
	password : string;
	folderrecordid : string;
	metadataprofileid : string;
	metadataprofileidpushing : string;

    constructor(data? : KalturaCortexApiDistributionProfileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCortexApiDistributionProfile' },
				username : { type : 's' },
				host : { type : 's' },
				password : { type : 's' },
				folderrecordid : { type : 's' },
				metadataprofileid : { type : 's' },
				metadataprofileidpushing : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCortexApiDistributionProfile',KalturaCortexApiDistributionProfile);
