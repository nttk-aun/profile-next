"use client";

import { useCallback, useState } from "react";
import { EMAIL } from "@/lib/data/profile";
import { Toast } from "./Toast";

export function CopyEmailButton() {
  const [toast, setToast] = useState<string | null>(null);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setToast("Email copied to clipboard");
    } catch {
      try {
        const textarea = document.createElement("textarea");
        textarea.value = EMAIL;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "absolute";
        textarea.style.left = "-9999px";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        setToast("Email copied to clipboard");
      } catch {
        setToast("Could not copy — please copy manually");
      }
    }
  }, []);

  return (
    <>
      <button
        type="button"
        className="btn-copy"
        onClick={copyEmail}
        aria-label="Copy email address"
      >
        Copy
      </button>
      <Toast message={toast} onDismiss={() => setToast(null)} />
    </>
  );
}
