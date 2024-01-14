import { useEffect } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useOnClickOutside = (ref: any, handle: any) => {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handle(event);
    };
    document.addEventListener("mousedown", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }, [ref, handle]);
};
