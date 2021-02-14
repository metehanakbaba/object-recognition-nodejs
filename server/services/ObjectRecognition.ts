import {DetectedObject, ObjectDetection, load} from '@tensorflow-models/coco-ssd'
import { node, Tensor3D, Tensor4D } from "@tensorflow/tfjs-node";
import fs from 'fs';

export default class ObjectRecognition {

  protected model!: ObjectDetection;
  protected image!: Buffer;
  protected imgTensor!: Tensor3D | Tensor4D;
  protected predictions!: DetectedObject[];

  protected async loadModel () : Promise<ObjectDetection>
  {
    this.model = await load()
    return this.model;
  }

  protected async loadImageFromPath (path: string) : Promise<Promise<Buffer> | Promise<any>>
  {
    try {
      this.image = await fs.readFileSync(path);
      this.imageToBuffer()
      return Promise.resolve(this.image);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  protected imageToBuffer ()
  {
    const buffer = new Uint8Array(this.image);
    this.imgTensor = node.decodeImage(buffer, 3);
    return this.imgTensor;
  }

  protected async detect () : Promise<DetectedObject[]>
  {
    this.predictions = await this.model.detect(this.imgTensor as unknown as ImageData);
    return this.predictions;
  }

  public async scan (path: string) : Promise<DetectedObject[]>
  {
    await this.loadModel()
    await this.loadImageFromPath(path)
    await this.detect()
    return this.predictions;
  }

  public getPredictions() : DetectedObject[]
  {
    return this.predictions
  }

}
