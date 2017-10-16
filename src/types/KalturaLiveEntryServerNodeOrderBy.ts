

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaLiveEntryServerNodeOrderBy extends KalturaObjectBase {
    private _value : string;
    constructor( value?:string | number){
        super();
        this._value = value + '';
    }

    equals(obj : this) : boolean
    {
        return obj && obj.toString() === this._value;
    }

    toString(){
        return this._value;
    }

    static createdAtAsc = new KalturaLiveEntryServerNodeOrderBy('+createdAt');
	static createdAtDesc = new KalturaLiveEntryServerNodeOrderBy('-createdAt');
	static updatedAtAsc = new KalturaLiveEntryServerNodeOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaLiveEntryServerNodeOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaLiveEntryServerNodeOrderBy',KalturaLiveEntryServerNodeOrderBy);