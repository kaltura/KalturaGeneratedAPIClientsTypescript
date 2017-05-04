

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaNdnDistributionProfileOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaNdnDistributionProfileOrderBy('+createdAt');
	static createdAtDesc = new KalturaNdnDistributionProfileOrderBy('-createdAt');
	static updatedAtAsc = new KalturaNdnDistributionProfileOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaNdnDistributionProfileOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaNdnDistributionProfileOrderBy',KalturaNdnDistributionProfileOrderBy);