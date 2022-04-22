function loadAsset(path) {
  let image = new Image();
  image.onload = () => {};
  image.src = `./textures/${path}.png`;
  return image;
}
export const textures = {
  init() {
    this.e = loadAsset('particles/e');
    this.p = loadAsset('particles/p');
    this.n = loadAsset('particles/n');
  }
}