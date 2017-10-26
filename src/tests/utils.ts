import * as fs from "fs";
import * as path from "path";

export function getTestFile(): string | Buffer {
  return fs.readFileSync(path.join(__dirname, "DemoVideo.flv"));
}