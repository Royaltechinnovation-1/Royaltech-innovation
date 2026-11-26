"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/**
 * The current year, read on the client only. Rendering `new Date()` on the server would make the
 * page un-cacheable at build time, so the server renders nothing and the year appears on load.
 */
export default function HomeCopyrightYear() {
  const year = useSyncExternalStore(
    subscribe,
    () => new Date().getFullYear(),
    () => null,
  );
  return <>{year ?? ""}</>;
}
