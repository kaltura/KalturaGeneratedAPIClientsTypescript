
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPermissionLevel } from './KalturaPermissionLevel';
import { KalturaUserEntryFilter, KalturaUserEntryFilterArgs } from './KalturaUserEntryFilter';

export interface KalturaPermissionLevelUserEntryFilterArgs  extends KalturaUserEntryFilterArgs {
    permissionLevels? : KalturaPermissionLevel[];
}


export class KalturaPermissionLevelUserEntryFilter extends KalturaUserEntryFilter {

    permissionLevels : KalturaPermissionLevel[];

    constructor(data? : KalturaPermissionLevelUserEntryFilterArgs)
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
                objectType : { type : 'c', default : 'KalturaPermissionLevelUserEntryFilter' },
				permissionLevels : { type : 'a', subTypeConstructor : KalturaPermissionLevel, subType : 'KalturaPermissionLevel' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPermissionLevelUserEntryFilter',KalturaPermissionLevelUserEntryFilter);
