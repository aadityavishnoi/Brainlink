import { ShieldCheck, ShieldAlert, Clock3, HourglassIcon } from "lucide-react";

/**
 * Visual + copy metadata per certificate status. `tone` maps to the CSS
 * custom properties defined in index.css (--success/--danger/--warning).
 */
export const CERTIFICATE_STATUS_META = {
  valid: {
    heading: "Certificate Verified",
    tone: "success",
    icon: ShieldCheck,
  },
  revoked: {
    heading: "Certificate Revoked",
    tone: "danger",
    icon: ShieldAlert,
  },
  expired: {
    heading: "Certificate Expired",
    tone: "warning",
    icon: Clock3,
  },
  pending: {
    heading: "Verification Pending",
    tone: "warning",
    icon: HourglassIcon,
  },
};

export const TONE_COLORS = {
  success: { fg: "var(--success)", rgb: "var(--success-rgb)" },
  danger: { fg: "var(--danger)", rgb: "var(--danger-rgb)" },
  warning: { fg: "var(--warning)", rgb: "var(--warning-rgb)" },
  neutral: { fg: "var(--neutral)", rgb: "var(--neutral-rgb)" },
};
