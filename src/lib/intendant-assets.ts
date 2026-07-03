import logoSmall from "@/assets/intendant/logo.png.asset.json";
import logoBig from "@/assets/intendant/logo-big.png.asset.json";
import ohToulouse from "@/assets/intendant/oh-toulouse.jpeg.asset.json";
import capitoleBW from "@/assets/intendant/capitole-toulouse-bw.jpeg.asset.json";
import screenshot from "@/assets/intendant/screenshot-2025-06-01.png.asset.json";
import edd1a051 from "@/assets/intendant/edd1a051.png.asset.json";
import cgvPdf from "@/assets/intendant/CGV.pdf.asset.json";
import upload74fa9438 from "@/assets/intendant/upload-74fa9438.png.asset.json";
import upload939f160b from "@/assets/intendant/upload-939f160b.png.asset.json";
import uploadC0783b41 from "@/assets/intendant/upload-c0783b41.png.asset.json";
import manege from "@/assets/intendant/manege.png.asset.json";
import capitoleHd from "@/assets/intendant/toulouse-capitole-hd.jpg.asset.json";
import saintSerninHd from "@/assets/intendant/toulouse-saint-sernin-hd.jpg.asset.json";
import pontNeufHd from "@/assets/intendant/toulouse-pont-neuf-hd.jpg.asset.json";

export const ASSETS = {
  logo: logoSmall.url,
  logoBig: logoBig.url,
  ohToulouse: ohToulouse.url,
  capitoleBW: capitoleBW.url,
  screenshot: screenshot.url,
  edd1a051: edd1a051.url,
  cgvPdf: cgvPdf.url,
  upload74fa9438: upload74fa9438.url,
  upload939f160b: upload939f160b.url,
  uploadC0783b41: uploadC0783b41.url,
  manege: manege.url,
  capitoleHd: capitoleHd.url,
  saintSerninHd: saintSerninHd.url,
  pontNeufHd: pontNeufHd.url,
};

// Map original public paths -> CDN URLs (for direct substitution)
export const PUBLIC_PATH_MAP: Record<string, string> = {
  "/logo.png": logoSmall.url,
  "/Logo.png": logoBig.url,
  "/oh toulouse.jpeg": ohToulouse.url,
  "/Capitile Op#U00e9ra Toulouse noir et blanc.jpeg": capitoleBW.url,
  "/Screenshot from 2025-06-01 16-42-46.png": screenshot.url,
  "/edd1a051-3e5a-46c2-b595-2294af206399.png": edd1a051.url,
  "/CGV.pdf": cgvPdf.url,
  "/lovable-uploads/74fa9438-6ba6-49bf-9099-8a924eafcea7.png": upload74fa9438.url,
  "/lovable-uploads/939f160b-c800-4db9-8713-0c32f484dda1.png": upload939f160b.url,
  "/lovable-uploads/c0783b41-bb1b-4ffe-a01b-b79d284d7d06.png": uploadC0783b41.url,
  "/lovable-uploads/manege.png": manege.url,
};
