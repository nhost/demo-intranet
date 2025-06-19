import { createClient } from "@nhost/nhost-js";

export const nhost = createClient({
	subdomain: process.env.BUN_PUBLIC_NHOST_SUBDOMAIN,
	region: process.env.BUN_PUBLIC_NHOST_REGION,
});
