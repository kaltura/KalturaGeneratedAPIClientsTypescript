
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaHttpNotificationMethod } from './KalturaHttpNotificationMethod';
import { KalturaHttpNotificationData } from './KalturaHttpNotificationData';
import { KalturaHttpNotificationAuthenticationMethod } from './KalturaHttpNotificationAuthenticationMethod';
import { KalturaHttpNotificationSslVersion } from './KalturaHttpNotificationSslVersion';
import { KalturaHttpNotificationCertificateType } from './KalturaHttpNotificationCertificateType';
import { KalturaHttpNotificationSslKeyType } from './KalturaHttpNotificationSslKeyType';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaEventNotificationTemplate, KalturaEventNotificationTemplateArgs } from './KalturaEventNotificationTemplate';

export interface KalturaHttpNotificationTemplateArgs  extends KalturaEventNotificationTemplateArgs {
    url? : string;
	method? : KalturaHttpNotificationMethod;
	data? : KalturaHttpNotificationData;
	timeout? : number;
	connectTimeout? : number;
	username? : string;
	password? : string;
	authenticationMethod? : KalturaHttpNotificationAuthenticationMethod;
	sslVersion? : KalturaHttpNotificationSslVersion;
	sslCertificate? : string;
	sslCertificateType? : KalturaHttpNotificationCertificateType;
	sslCertificatePassword? : string;
	sslEngine? : string;
	sslEngineDefault? : string;
	sslKeyType? : KalturaHttpNotificationSslKeyType;
	sslKey? : string;
	sslKeyPassword? : string;
	customHeaders? : KalturaKeyValue[];
}


export class KalturaHttpNotificationTemplate extends KalturaEventNotificationTemplate {

    url : string;
	method : KalturaHttpNotificationMethod;
	data : KalturaHttpNotificationData;
	timeout : number;
	connectTimeout : number;
	username : string;
	password : string;
	authenticationMethod : KalturaHttpNotificationAuthenticationMethod;
	sslVersion : KalturaHttpNotificationSslVersion;
	sslCertificate : string;
	sslCertificateType : KalturaHttpNotificationCertificateType;
	sslCertificatePassword : string;
	sslEngine : string;
	sslEngineDefault : string;
	sslKeyType : KalturaHttpNotificationSslKeyType;
	sslKey : string;
	sslKeyPassword : string;
	customHeaders : KalturaKeyValue[];

    constructor(data? : KalturaHttpNotificationTemplateArgs)
    {
        super(data);
        if (typeof this.customHeaders === 'undefined') this.customHeaders = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaHttpNotificationTemplate' },
				url : { type : 's'  },
				method : { type : 'en'  , subType : 'KalturaHttpNotificationMethod'},
				data : { type : 'o'  , subType : 'KalturaHttpNotificationData'},
				timeout : { type : 'n'  },
				connectTimeout : { type : 'n'  },
				username : { type : 's'  },
				password : { type : 's'  },
				authenticationMethod : { type : 'en'  , subType : 'KalturaHttpNotificationAuthenticationMethod'},
				sslVersion : { type : 'en'  , subType : 'KalturaHttpNotificationSslVersion'},
				sslCertificate : { type : 's'  },
				sslCertificateType : { type : 'es'  , subType : 'KalturaHttpNotificationCertificateType'},
				sslCertificatePassword : { type : 's'  },
				sslEngine : { type : 's'  },
				sslEngineDefault : { type : 's'  },
				sslKeyType : { type : 'es'  , subType : 'KalturaHttpNotificationSslKeyType'},
				sslKey : { type : 's'  },
				sslKeyPassword : { type : 's'  },
				customHeaders : { type : 'a'  , subType : 'KalturaKeyValue'}
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaHttpNotificationTemplate',KalturaHttpNotificationTemplate);
