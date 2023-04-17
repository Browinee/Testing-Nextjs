import { resetDB } from "./../section-09-api/__tests__/__mocks__/db/utils/reset-db";
import { defineConfig } from "cypress";

export default defineConfig({
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        // plugin stuff here
        "db:reset": () => resetDB().then(() => null),
      });
    },
  },
});
