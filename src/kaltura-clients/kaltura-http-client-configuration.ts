import { KalturaClientConfiguration } from "./kaltura-client-configuration";

export class KalturaHttpClientConfiguration extends KalturaClientConfiguration {

    public endpointUrl: string;

    getHeaders(): any {
        return {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };
    }
}
