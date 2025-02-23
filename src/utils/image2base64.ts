import * as fs from 'fs';

export function encodeImageToBase64(imagePath: string): string {
    const imageBuffer = fs.readFileSync(imagePath);
    return imageBuffer.toString('base64');
}