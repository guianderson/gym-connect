export async function image2Base64(file?: Express.Multer.File) {
  if (!file) return '';
  return file.buffer.toString('base64');
}
