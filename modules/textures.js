function loadAsset(path) {
  let image = new Image();
  image.onload = () => {};
  image.src = `./textures/${path}.png`;
  return image;
}
export const textures = {
  init() {
    this.particlePositive = loadAsset('particles/particlePositive');
    this.particleNegative = loadAsset('particles/particleNegative');
    this.particleNeutral = loadAsset('particles/particleNeutral');
  }
}