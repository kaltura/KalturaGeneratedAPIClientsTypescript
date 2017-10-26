import { TestsConfig } from "./tests-config";
import { KalturaBrowserHttpClient } from "../kaltura-clients/kaltura-browser-http-client";
import { DistributionProviderListAction } from "../types/DistributionProviderListAction";
import { KalturaDistributionProviderListResponse } from "../types/KalturaDistributionProviderListResponse";
import { KalturaDistributionProvider } from "../types/KalturaDistributionProvider";
import { DistributionProfileListAction } from "../types/DistributionProfileListAction";
import { KalturaDistributionProfileListResponse } from "../types/KalturaDistributionProfileListResponse";
import { KalturaDistributionProfile } from "../types/KalturaDistributionProfile";
import { EntryDistributionListAction } from "../types/EntryDistributionListAction";
import { KalturaEntryDistributionListResponse } from "../types/KalturaEntryDistributionListResponse";
import { KalturaEntryDistribution } from "../types/KalturaEntryDistribution";

describe(`service "Distribution" tests`, () => {
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

  test("distribution provider list", (done) => {
    kalturaClient.request(new DistributionProviderListAction())
      .then(
        response => {
          expect(response instanceof KalturaDistributionProviderListResponse).toBeTruthy();
          expect(Array.isArray(response.objects)).toBeTruthy();
          expect(response.objects.every(obj => obj instanceof KalturaDistributionProvider)).toBeTruthy();
          done();
        },
        () => {
          fail("should not reach this part");
          done();
        });
  });

  test("distribution profile list", (done) => {
    kalturaClient.request(new DistributionProfileListAction())
      .then(
        response => {
          expect(response instanceof KalturaDistributionProfileListResponse).toBeTruthy();
          expect(Array.isArray(response.objects)).toBeTruthy();
          expect(response.objects.every(obj => obj instanceof KalturaDistributionProfile)).toBeTruthy();
          done();
        },
        () => {
          fail("should not reach this part");
          done();
        });
  });

  test("entry distribution list", (done) => {
    kalturaClient.request(new EntryDistributionListAction())
      .then(
        response => {
          expect(response instanceof KalturaEntryDistributionListResponse).toBeTruthy();
          expect(Array.isArray(response.objects)).toBeTruthy();
          expect(response.objects.every(obj => obj instanceof KalturaEntryDistribution)).toBeTruthy();
          done();
        },
        () => {
          fail("should not reach this part");
          done();
        });
  });
});