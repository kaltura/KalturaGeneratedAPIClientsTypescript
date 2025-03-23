
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUserEntryExtendedStatus } from './KalturaUserEntryExtendedStatus';
import { KalturaUserEntry, KalturaUserEntryArgs } from './KalturaUserEntry';

export interface KalturaQuizUserEntryArgs  extends KalturaUserEntryArgs {
    feedback? : string;
	extendedStatus? : KalturaUserEntryExtendedStatus;
}


export class KalturaQuizUserEntry extends KalturaUserEntry {

    readonly score : number;
	readonly calculatedScore : number;
	feedback : string;
	readonly version : number;
	extendedStatus : KalturaUserEntryExtendedStatus;

    constructor(data? : KalturaQuizUserEntryArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaQuizUserEntry' },
				score : { type : 'n', readOnly : true },
				calculatedScore : { type : 'n', readOnly : true },
				feedback : { type : 's' },
				version : { type : 'n', readOnly : true },
				extendedStatus : { type : 'es', subTypeConstructor : KalturaUserEntryExtendedStatus, subType : 'KalturaUserEntryExtendedStatus' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaQuizUserEntry',KalturaQuizUserEntry);
