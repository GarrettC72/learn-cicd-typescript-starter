import { getAPIKey } from "../api/auth.js";
import { describe, expect, test } from "vitest";

describe("getApiKey", () => {
  test("missing auth header returns null", () => {
    expect(getAPIKey({})).toBeNull();
  });

  test("single word returns null", () => {
    expect(
      getAPIKey({
        authorization: "ApiKey",
      }),
    ).toBeNull();
  });

  test("missing ApiKey returns null", () => {
    expect(
      getAPIKey({
        authorization: "test key",
      }),
    ).toBeNull();
  });

  test("proper format returns second word", () => {
    expect(
      getAPIKey({
        authorization: "ApiKey key",
      }),
    ).toEqual("key");
  });
});
