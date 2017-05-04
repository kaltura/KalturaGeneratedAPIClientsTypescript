

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaSynacorHboDistributionProfileOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaSynacorHboDistributionProfileOrderBy('+createdAt');
	static createdAtDesc = new KalturaSynacorHboDistributionProfileOrderBy('-createdAt');
	static updatedAtAsc = new KalturaSynacorHboDistributionProfileOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaSynacorHboDistributionProfileOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaSynacorHboDistributionProfileOrderBy',KalturaSynacorHboDistributionProfileOrderBy);