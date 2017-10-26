import { TestsConfig } from "./tests-config";
import { KalturaBrowserHttpClient } from "../kaltura-clients/kaltura-browser-http-client";
import { MediaListAction } from "../types/MediaListAction";
import { KalturaMediaListResponse } from "../types/KalturaMediaListResponse";
import { KalturaMediaEntry } from "../types/KalturaMediaEntry";

describe(`service "Media" tests`, () => {
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

  test(`invoke "list" action`, (done) => {
    kalturaClient.request(new MediaListAction()).then(
      (response) => {
        expect(response instanceof KalturaMediaListResponse).toBeTruthy();

        expect(response.objects).toBeDefined();
        expect(response.objects instanceof Array).toBeTruthy();

        response.objects.forEach(entry => {
          expect(entry instanceof KalturaMediaEntry).toBeTruthy();
        });

        done();
      },
      () => {
        fail(`failed to perform request`);
        done();
      }
    );
  });

  xtest(`invoke "createRemote" action`, (done) => {
    // const media = new KalturaMediaEntry({
    //    name : "typescript.MediaTests.test_createRemote",
    //    mediaType : KalturaMediaType.video
    // });
  });

  describe(`utf-8 tests`, () => {
    xtest(`support utf-8 name`, (done) => {

    });

  });
});
