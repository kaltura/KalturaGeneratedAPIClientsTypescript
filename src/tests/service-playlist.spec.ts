import { TestsConfig } from "./tests-config";
import { KalturaBrowserHttpClient } from "../kaltura-clients/kaltura-browser-http-client";
import { PlaylistListAction } from "../types/PlaylistListAction";
import { KalturaPlaylistListResponse } from "../types/KalturaPlaylistListResponse";
import { KalturaPlaylist } from "../types/KalturaPlaylist";

describe(`service "Playlist" tests`, () => {
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
    kalturaClient.request(new PlaylistListAction()).then(
      (response) => {
        expect(response instanceof KalturaPlaylistListResponse).toBeTruthy();

        expect(response.objects).toBeDefined();
        expect(response.objects instanceof Array).toBeTruthy();

        response.objects.forEach(entry => {
          expect(entry instanceof KalturaPlaylist).toBeTruthy();
        });

        done();
      },
      () => {
        fail(`failed to perform request`);
        done();
      }
    );
  });
});
