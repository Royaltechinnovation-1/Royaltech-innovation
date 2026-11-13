"use client";

import { submitLead } from "@/lib/submitLead";
import Link from "next/link";
import {
  createContext,
  FormEvent,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type OpenOptions = {
  title?: string;
  source?: string;
  service?: string;
};

type FormModalContextValue = {
  openForm: (options?: OpenOptions) => void;
  closeForm: () => void;
  showThanks: () => void;
  closeThanks: () => void;
};

const FormModalContext = createContext<FormModalContextValue | null>(null);

export function useFormModal() {
  const ctx = useContext(FormModalContext);
  if (!ctx) {
    throw new Error("useFormModal must be used within FormModalProvider");
  }
  return ctx;
}

export function FormModalProvider({ children }: { children: ReactNode }) {
  const [formOpen, setFormOpen] = useState(false);
  const [thanksOpen, setThanksOpen] = useState(false);
  const [options, setOptions] = useState<OpenOptions>({
    title: "Request a Quote",
    source: "popup-form",
  });

  const openForm = useCallback((next?: OpenOptions) => {
    setOptions({
      title: next?.title || "Request a Quote",
      source: next?.source || "popup-form",
      service: next?.service,
    });
    setThanksOpen(false);
    setFormOpen(true);
  }, []);

  const closeForm = useCallback(() => setFormOpen(false), []);
  const showThanks = useCallback(() => {
    setFormOpen(false);
    setThanksOpen(true);
  }, []);
  const closeThanks = useCallback(() => setThanksOpen(false), []);

  const value = useMemo(
    () => ({ openForm, closeForm, showThanks, closeThanks }),
    [openForm, closeForm, showThanks, closeThanks],
  );

  useEffect(() => {
    if (!formOpen && !thanksOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setFormOpen(false);
        setThanksOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [formOpen, thanksOpen]);

  return (
    <FormModalContext.Provider value={value}>
      {children}
      {formOpen ? (
        <LeadFormDialog
          title={options.title || "Request a Quote"}
          source={options.source || "popup-form"}
          service={options.service}
          onClose={closeForm}
          onSuccess={showThanks}
        />
      ) : null}
      {thanksOpen ? <ThanksDialog onClose={closeThanks} /> : null}
    </FormModalContext.Provider>
  );
}

function LeadFormDialog({
  title,
  source,
  service,
  onClose,
  onSuccess,
}: {
  title: string;
  source: string;
  service?: string;
  onClose: () => void;
  onSuccess: () => void;
}) {
  const titleId = useId();
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = new FormData(form);
    setSending(true);
    setError("");

    try {
      await submitLead({
        name: String(data.get("name") || ""),
        email: String(data.get("email") || ""),
        phone: String(data.get("phone") || ""),
        message: String(data.get("message") || ""),
        service: service || String(data.get("service") || "") || undefined,
        source,
      });
      form.reset();
      onSuccess();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="fm-backdrop" role="presentation" onClick={onClose}>
      <div
        className="fm-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(event) => event.stopPropagation()}
      >
        <button className="fm-close" type="button" aria-label="Close form" onClick={onClose}>
          ×
        </button>
        <div className="fm-head">
          <p className="fm-kicker">RoyalTech Innovation</p>
          <h2 id={titleId}>{title}</h2>
          <p>
            Share a few details and our team will get back to you with a clear
            next step.
          </p>
        </div>

        <form className="fm-form" onSubmit={onSubmit} noValidate>
          {service ? (
            <input type="hidden" name="service" value={service} />
          ) : null}

          <label className="fm-field">
            <span>Full name *</span>
            <input
              type="text"
              name="name"
              autoComplete="name"
              required
              placeholder="Your full name"
            />
          </label>

          <div className="fm-row">
            <label className="fm-field">
              <span>Email *</span>
              <input
                type="email"
                name="email"
                autoComplete="email"
                required
                placeholder="you@company.com"
              />
            </label>
            <label className="fm-field">
              <span>Phone *</span>
              <input
                type="tel"
                name="phone"
                autoComplete="tel"
                required
                pattern="[0-9+\-\s()]{7,20}"
                placeholder="+91 86790 16505"
              />
            </label>
          </div>

          {!service ? (
            <label className="fm-field">
              <span>Service interest</span>
              <select name="service" defaultValue="">
                <option value="">Select a service</option>
                <option>UI/UX Design</option>
                <option>Web Development</option>
                <option>App Development</option>
                <option>Software Development</option>
                <option>Digital Marketing</option>
                <option>IT Consulting</option>
                <option>Other</option>
              </select>
            </label>
          ) : null}

          <label className="fm-field">
            <span>Message *</span>
            <textarea
              name="message"
              required
              rows={4}
              placeholder="Tell us what you want to build..."
            />
          </label>

          <label className="fm-check">
            <input type="checkbox" name="terms" required />
            <span>
              I agree to the{" "}
              <Link href="/terms" onClick={onClose}>
                Terms
              </Link>{" "}
              and{" "}
              <Link href="/privacy" onClick={onClose}>
                Privacy Policy
              </Link>
              .
            </span>
          </label>

          {error ? (
            <p className="fm-error" role="alert">
              {error}
            </p>
          ) : null}

          <button className="fm-submit" type="submit" disabled={sending}>
            {sending ? "Sending…" : "Submit enquiry"}
          </button>
        </form>
      </div>
    </div>
  );
}

function ThanksDialog({ onClose }: { onClose: () => void }) {
  return (
    <div className="fm-backdrop" role="presentation" onClick={onClose}>
      <div
        className="fm-thanks"
        role="dialog"
        aria-modal="true"
        aria-labelledby="fm-thanks-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="fm-close" type="button" aria-label="Close" onClick={onClose}>
          ×
        </button>
        <div className="fm-thanks-mark" aria-hidden="true">
          ✓
        </div>
        <h2 id="fm-thanks-title">Thank you!</h2>
        <p>
          We received your message. Our team will review the details and get
          back to you shortly.
        </p>
        <button className="fm-submit" type="button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export function OpenFormButton({
  children,
  className,
  title,
  source,
  service,
  type = "button",
  onClick,
}: {
  children: ReactNode;
  className?: string;
  title?: string;
  source?: string;
  service?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}) {
  const { openForm } = useFormModal();
  return (
    <button
      type={type}
      className={className}
      onClick={() => {
        onClick?.();
        openForm({ title, source, service });
      }}
    >
      {children}
    </button>
  );
}
