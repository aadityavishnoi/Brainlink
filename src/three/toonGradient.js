import * as THREE from "three";

let cachedTexture = null;

/**
 * A tiny 4-step gradient texture for MeshToonMaterial, giving objects a
 * soft cel-shaded look instead of three.js's harsh 2-tone default.
 */
export function getToonGradientTexture() {
  if (cachedTexture) return cachedTexture;
  const canvas = document.createElement("canvas");
  canvas.width = 4;
  canvas.height = 1;
  const ctx = canvas.getContext("2d");
  const shades = [90, 150, 200, 255];
  shades.forEach((v, i) => {
    ctx.fillStyle = `rgb(${v},${v},${v})`;
    ctx.fillRect(i, 0, 1, 1);
  });
  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.NearestFilter;
  texture.magFilter = THREE.NearestFilter;
  texture.generateMipmaps = false;
  cachedTexture = texture;
  return texture;
}
