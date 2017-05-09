


export abstract class KalturaClientBaseConfiguration{

    ks : string;
    partnerId : number;
    public clientTag : string;

    prepareRequestParameters(parameters : any) : any
    {
        if (parameters) {
            if (this.ks && typeof parameters['ks'] === 'undefined') {
                parameters.ks = this.ks;
            }

            if (this.partnerId && typeof parameters['partnerId'] === 'undefined') {
                parameters.partnerId = this.partnerId;
            }
        }

        if (this.clientTag) {
            parameters.clientTag = this.clientTag;
        }

        return parameters;
    }
}
