import { KalturaClientBaseConfiguration } from "./kaltura-client-base-configuration";

export class KalturaHttpClientConfiguration extends KalturaClientBaseConfiguration {

    public endpointUrl: string;

    getHeaders(): any {
        return {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };
    }
}
