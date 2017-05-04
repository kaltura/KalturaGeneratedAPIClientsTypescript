

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaTVComDistributionProfileOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaTVComDistributionProfileOrderBy('+createdAt');
	static createdAtDesc = new KalturaTVComDistributionProfileOrderBy('-createdAt');
	static updatedAtAsc = new KalturaTVComDistributionProfileOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaTVComDistributionProfileOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaTVComDistributionProfileOrderBy',KalturaTVComDistributionProfileOrderBy);