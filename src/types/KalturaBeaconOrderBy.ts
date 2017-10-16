

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaBeaconOrderBy extends KalturaObjectBase {
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

    static objectIdAsc = new KalturaBeaconOrderBy('+objectId');
	static objectIdDesc = new KalturaBeaconOrderBy('-objectId');
	static updatedAtAsc = new KalturaBeaconOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaBeaconOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaBeaconOrderBy',KalturaBeaconOrderBy);