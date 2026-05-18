"use client";

import { createElement, useEffect, useState } from "react";

const TOAST_DURATION_MS = 2800;

type ToastProps = {
  message: string | null;
  onDismiss: () => void;
};

export function Toast({ message, onDismiss }: ToastProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!message) {
      setVisible(false);
      return;
    }

    setVisible(true);
    const timer = window.setTimeout(() => {
      setVisible(false);
      window.setTimeout(onDismiss, 300);
    }, TOAST_DURATION_MS);

    return () => window.clearTimeout(timer);
  }, [message, onDismiss]);

  if (!message) return null;

  return createElement(
    "div",
    {
      className: `toast${visible ? " is-shown" : ""}`,
      role: "status",
      "aria-live": "polite",
    },
    message,
  );
}
