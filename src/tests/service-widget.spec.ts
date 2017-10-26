import { TestsConfig } from "./tests-config";
import { KalturaBrowserHttpClient } from "../kaltura-clients/kaltura-browser-http-client";
import { WidgetListAction } from "../types/WidgetListAction";
import { KalturaWidgetListResponse } from "../types/KalturaWidgetListResponse";

describe(`service "Widget" tests`, () => {
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

  test("widgets list", (done) => {
    kalturaClient.request(new WidgetListAction())
      .then(
        response => {
          expect(response instanceof KalturaWidgetListResponse).toBeTruthy();
          done();
        },
        () => {
          fail("should not reach this part");
          done();
        }
      );
  });
});
