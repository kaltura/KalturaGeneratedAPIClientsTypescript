

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaBeaconObjectTypes extends KalturaObjectBase {
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

    static entryBeacon = new KalturaBeaconObjectTypes('4');
	static entryServerNodeBeacon = new KalturaBeaconObjectTypes('2');
	static scheduleResourceBeacon = new KalturaBeaconObjectTypes('1');
	static serverNodeBeacon = new KalturaBeaconObjectTypes('3');
}
KalturaTypesFactory.registerType('KalturaBeaconObjectTypes',KalturaBeaconObjectTypes);