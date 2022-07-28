//outside library react-hooks-tl

import { renderHook, act } from "@testing-library/react";
import useIsLoading from "./useIsLoading";

describe("useIsLoading hook", () => {
  it("should have a state equal to the parameter", () => {
    const { result } = renderHook(() => useIsLoading(false));
    expect(result.current[0]).toBe(false);
  });

  it("should change be able to change state", () => {
    const { result } = renderHook(() => useIsLoading(false));
    act(() => {
      result.current[1](true);
    });
    expect(result.current[0]).toBe(true);
  });
});
