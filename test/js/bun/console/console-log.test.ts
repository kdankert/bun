import { spawn } from "bun";
import { describe, expect, it } from "bun:test";
import { bunExe } from "harness";

describe("should print correctly", () => {
  it("should print async generators", async () => {
    const result = spawn({
      cmd: [bunExe(), import.meta.dir + "/" + "console-log-gen-run.ts"],
      env: { BUN_DEBUG_QUIET_LOGS: "1" },
    });
    expect(await result.stdout.text()).toBe("Object [Generator] {}\nObject [AsyncGenerator] {}\n");
  });
});
