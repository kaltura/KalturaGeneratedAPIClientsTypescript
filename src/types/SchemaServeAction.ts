
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaSchemaType } from './KalturaSchemaType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SchemaServeActionArgs  extends KalturaRequestArgs {
    type : KalturaSchemaType;
}

/**
 * Build request payload for service 'schema' action 'serve'.
 *
 * Usage: Serves the requested XSD according to the type and name
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SchemaServeAction extends KalturaRequest<string> {

    type : KalturaSchemaType;

    constructor(data : SchemaServeActionArgs)
    {
        super(data, {responseType : 'f', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'schema' },
				action : { type : 'c', default : 'serve' },
				type : { type : 'es', subTypeConstructor : KalturaSchemaType, subType : 'KalturaSchemaType' }
            }
        );
        return result;
    }
}

