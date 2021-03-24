import { JWT } from "../auth/JWT";

export function CreateHeaders(token: JWT): Record<string, string> {
  return {
    Authorization: token,
    "Cache-Control": "no-cache",
    Accept: "application/json",
    "Content-Type": "application/json",
    "Accept-Crs": "EPSG:4326",
    "Content-Crs": "EPSG:4326",
  };
}
