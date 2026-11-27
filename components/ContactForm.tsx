"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const topics = [
  { value: "general", label: "General question" },
  { value: "membership", label: "Membership" },
  { value: "volunteer", label: "Volunteering" },
  { value: "donation", label: "Donation" },
  { value: "partnership", label: "Partnership" },
];

type Status = { kind: "idle" | "sending" | "ok" | "error"; msg?: string };

export default function ContactForm() {
  const [topic, setTopic] = useState("general");
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  useEffect(() => {
    const t = new URLSearchParams(window.location.search).get("topic");
    if (t && topics.some((x) => x.value === t)) setTopic(t);
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    const topicLabel = topics.find((t) => t.value === data.topic)?.label ?? "Message";

    if (site.formEndpoint) {
      setStatus({ kind: "sending" });
      try {
        const res = await fetch(site.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error("Request failed");
        form.reset();
        setStatus({ kind: "ok", msg: "Thank you. We have your message and will reply by email soon." });
      } catch {
        setStatus({
          kind: "error",
          msg: `We could not send your message. Please email us at ${site.email}.`,
        });
      }
      return;
    }

    // No endpoint configured: open the visitor's email app with the message filled in.
    const body = `${data.message}\n\nName: ${data.name}\nEmail: ${data.email}${data.phone ? `\nPhone: ${data.phone}` : ""}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `${topicLabel} from ${data.name}`
    )}&body=${encodeURIComponent(body)}`;
    setStatus({
      kind: "ok",
      msg: "Your email app should open with the message ready. Press send there to reach us.",
    });
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="field">
        <label htmlFor="name">Full name</label>
        <input id="name" name="name" type="text" autoComplete="name" required />
      </div>
      <div className="field-row">
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" required />
        </div>
        <div className="field">
          <label htmlFor="phone">Phone (optional)</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="topic">What is this about?</label>
        <select id="topic" name="topic" value={topic} onChange={(e) => setTopic(e.target.value)}>
          {topics.map((t) => (
            <option key={t.value} value={t.value}>{t.label}</option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={5} required />
      </div>
      <button className="btn btn-primary" type="submit" disabled={status.kind === "sending"}>
        {status.kind === "sending" ? "Sending" : "Send message"}
      </button>
      <p className={`form-status ${status.kind}`} role="status" aria-live="polite">
        {status.msg}
      </p>
    </form>
  );
}
