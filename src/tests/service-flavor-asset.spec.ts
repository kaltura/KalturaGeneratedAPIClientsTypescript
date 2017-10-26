import { TestsConfig } from "./tests-config";
import { KalturaBrowserHttpClient } from "../kaltura-clients/kaltura-browser-http-client";
import { FlavorAssetListAction } from "../types/FlavorAssetListAction";
import { KalturaFlavorAssetListResponse } from "../types/KalturaFlavorAssetListResponse";
import { KalturaFlavorAsset } from "../types/KalturaFlavorAsset";

describe(`service "Flavor" tests`, () => {
  let kalturaClient: KalturaBrowserHttpClient = null;

  const httpConfiguration = {
    endpointUrl: TestsConfig.endpoint,
    clientTag: TestsConfig.clientTag
  };

  beforeEach(() => {
    kalturaClient = new KalturaBrowserHttpClient(httpConfiguration);
    kalturaClient.ks = TestsConfig.ks;
  });

  afterEach(() => {
    kalturaClient = null;
  });

  // TODO [kmc] check response
  /*
    {
      "code":"PROPERTY_VALIDATION_CANNOT_BE_NULL",
      "message":"The property \"KalturaFlavorAssetFilter::entryIdEqual\/KalturaFlavorAssetFilter::entryIdIn\" cannot be null",
      "objectType":"KalturaAPIException",
      "args":{ "PROP_NAME":"KalturaFlavorAssetFilter::entryIdEqual\/KalturaFlavorAssetFilter::entryIdIn" }
    }
   */
  xtest("flavor list", (done) => {
    kalturaClient.request(new FlavorAssetListAction())
      .then(
        response => {
          expect(response instanceof KalturaFlavorAssetListResponse).toBeTruthy();
          expect(Array.isArray(response.objects)).toBeTruthy();
          expect(response.objects.every(obj => obj instanceof KalturaFlavorAsset)).toBeTruthy();
          done();
        },
        () => {
          fail("should not reach this part");
          done();
        }
      );
  });
});
