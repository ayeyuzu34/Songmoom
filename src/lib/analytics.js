import posthog from "posthog-js";

let ready = false;

export function initAnalytics() {
  const key = import.meta.env.VITE_PUBLIC_POSTHOG_KEY;
  console.log("PostHog Key Loaded:", !!key)
  if (!key || ready) return;
  posthog.init(key, {
    api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com",
    person_profiles: "identified_only",
  });
  ready = true;
}

export function trackFeedKibble(stationId, kibblesLeft) {
  if (!ready) return;
  posthog.capture("feed_kibble", { station_id: stationId, kibbles_left: kibblesLeft });
}
