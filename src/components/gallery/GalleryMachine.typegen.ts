// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  eventsCausingActions: {};
  internalEvents: {
    "done.invoke.fetch-wallet-info": {
      type: "done.invoke.fetch-wallet-info";
      data: unknown;
      __tip: "See the XState TS docs to learn how to strongly type this.";
    };
    "xstate.init": { type: "xstate.init" };
  };
  invokeSrcNameMap: {};
  missingImplementations: {
    actions: never;
    services: never;
    guards: never;
    delays: never;
  };
  eventsCausingServices: {};
  eventsCausingGuards: {};
  eventsCausingDelays: {};
  matchesStates:
    | "idle"
    | "loading"
    | "loading.loading"
    | "loading.loaded"
    | "loading.failed"
    | { loading?: "loading" | "loaded" | "failed" };
  tags: never;
}
