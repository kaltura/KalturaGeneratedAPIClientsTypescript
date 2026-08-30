
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDocumentType } from './KalturaDocumentType';
import { KalturaBaseEntry, KalturaBaseEntryArgs } from './KalturaBaseEntry';

export interface KalturaDocumentEntryArgs  extends KalturaBaseEntryArgs {
    documentType? : KalturaDocumentType;
}


export class KalturaDocumentEntry extends KalturaBaseEntry {

    documentType : KalturaDocumentType;
	readonly assetParamsIds : string;
	readonly views : number;

    constructor(data? : KalturaDocumentEntryArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDocumentEntry' },
				documentType : { type : 'en', subTypeConstructor : KalturaDocumentType, subType : 'KalturaDocumentType' },
				assetParamsIds : { type : 's', readOnly : true },
				views : { type : 'n', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDocumentEntry',KalturaDocumentEntry);
