
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPermissionLevel } from './KalturaPermissionLevel';
import { KalturaUserEntry, KalturaUserEntryArgs } from './KalturaUserEntry';

export interface KalturaPermissionLevelUserEntryArgs  extends KalturaUserEntryArgs {
    permissionLevels? : KalturaPermissionLevel[];
	permissionOrder? : number;
}


export class KalturaPermissionLevelUserEntry extends KalturaUserEntry {

    permissionLevels : KalturaPermissionLevel[];
	permissionOrder : number;

    constructor(data? : KalturaPermissionLevelUserEntryArgs)
    {
        super(data);
        if (typeof this.permissionLevels === 'undefined') this.permissionLevels = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPermissionLevelUserEntry' },
				permissionLevels : { type : 'a', subTypeConstructor : KalturaPermissionLevel, subType : 'KalturaPermissionLevel' },
				permissionOrder : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPermissionLevelUserEntry',KalturaPermissionLevelUserEntry);
