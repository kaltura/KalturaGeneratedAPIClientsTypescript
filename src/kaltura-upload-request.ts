import { KalturaRequest, KalturaRequestArgs } from "./kaltura-request";
import { KalturaObjectBase } from "./kaltura-object-base";

export type ProgressCallback = (loaded: number, total: number) => void;

export interface KalturaUploadRequestArgs extends KalturaRequestArgs {
  uploadedFileSize?: number;
}

export class KalturaUploadRequest<T> extends KalturaRequest<T> {
  private _progressCallback: ProgressCallback;

  constructor(data: KalturaUploadRequestArgs, { responseType, responseSubType, responseConstructor }: { responseType: string, responseSubType?: string, responseConstructor: { new(): KalturaObjectBase } }) {
    super(data, { responseType, responseSubType, responseConstructor });
  }

  setProgress(callback: ProgressCallback): this {
    this._progressCallback = callback;
    return this;
  }

  public _getProgressCallback(): ProgressCallback {
    return this._progressCallback;
  }

  public getFormDataPropertyName(): string {
    const metadataProperties = this._getMetadata().properties;
    return Object.keys(metadataProperties).find(propertyName => metadataProperties[propertyName].type === "f");
  }

  public getFileData(): File {
    const formDataPropertyName = this.getFormDataPropertyName();

    return formDataPropertyName ? this[formDataPropertyName] : null;
  }

  public getUploadedFileSize(): number {
    return this["uploadedFileSize"] || 0;
  }

  public getFormData(): FormData {
    let result = null;
    const formDataPropertyName = this.getFormDataPropertyName();

    if (formDataPropertyName) {
      const file = this[formDataPropertyName];

      if (file) {
        result = new FormData();
        result.append("fileName", file.name);
        result.append(formDataPropertyName, file);
      }
    }

    return result;
  }

  public toRequestObject(): {} {
    const result = super.toRequestObject();
    const formDataPropertyName = this.getFormDataPropertyName();

    if (formDataPropertyName) {
      delete result[formDataPropertyName];
    }

    return result;
  }
}