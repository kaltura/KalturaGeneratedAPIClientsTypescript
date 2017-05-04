

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaVerizonVcastDistributionProfileOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaVerizonVcastDistributionProfileOrderBy('+createdAt');
	static createdAtDesc = new KalturaVerizonVcastDistributionProfileOrderBy('-createdAt');
	static updatedAtAsc = new KalturaVerizonVcastDistributionProfileOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaVerizonVcastDistributionProfileOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaVerizonVcastDistributionProfileOrderBy',KalturaVerizonVcastDistributionProfileOrderBy);