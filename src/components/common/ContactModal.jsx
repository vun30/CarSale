import { useEffect, useRef, useState, useMemo } from "react";

export default function ContactModal() {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [apiError, setApiError] = useState("");
  const firstFieldRef = useRef(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    const handler = () => {
      setOpen(true);
      setSuccess(false);
      setSubmitting(false);
    };
    window.addEventListener("open-contact-modal", handler);
    return () => window.removeEventListener("open-contact-modal", handler);
  }, []);

  const close = () => setOpen(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    window.dispatchEvent(
      new CustomEvent("contact-modal-state", { detail: { open } })
    );
  }, [open]);
  // focus trap + esc
  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => firstFieldRef.current?.focus(), 50);

    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key !== "Tab") return;
      const focusable = dialogRef.current?.querySelectorAll(
        'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(t);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const [form, setForm] = useState({ phone: "", name: "", model: "" });
  const [errors, setErrors] = useState({});

  const models = useMemo(
    () => [
      "Grand i10",
      "Tucson",
      "Santa Fe",
      "Creta",
      "Accent",
      " Elantra",
      "Stargazer X",
      "Palisade",
      "Staria",
      "Venue",
      "Custin",
      "Ioniq 5",
    ],
    []
  );

  const formatVNPhone = (v) =>
    v
      .replace(/\D+/g, "")
      .replace(/(\d{4})(\d{3})(\d{0,3}).*/, (m, a, b, c) =>
        c ? `${a} ${b} ${c}` : `${a} ${b}`
      );

  const validate = () => {
    const e = {};
    const raw = form.phone.replace(/\s+/g, "");
    if (!/^0\d{9}$/.test(raw))
      e.phone = "Số điện thoại chưa đúng định dạng (10 số).";
    if (!form.name.trim()) e.name = "Vui lòng nhập tên.";
    if (!form.model) e.model = "Chọn mẫu xe bạn quan tâm.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    setApiError("");
    if (!validate()) return;
    setSubmitting(true);
    const payload = {
      phone: form.phone.replace(/\s+/g, ""),
      name: form.name.trim(),
      model: form.model,
    };

    try {
      const response = await fetch(
        "https://api.hyundaigialaiofficial.com.vn/api/customers",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        let message = "Gửi yêu cầu thất bại. Vui lòng thử lại.";
        try {
          const data = await response.clone().json();
          if (data?.message) message = data.message;
        } catch {
          try {
            const text = await response.text();
            if (text) message = text;
          } catch {
            // ignore parsing errors
          }
        }
        throw new Error(message);
      }

      setSuccess(true);
      setForm({ phone: "", name: "", model: "" });
      if (window.gtag) {
        window.gtag("event", "conversion", {
          send_to: "AW-17579552708/jhPBCJTkq50bEMTfyr5B",
        });
      }
    } catch (err) {
      setApiError(
        err instanceof Error && err.message
          ? err.message
          : "Gửi yêu cầu thất bại. Vui lòng thử lại."
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (!open) return null;

  return (
    <>
      <style>{`
        @keyframes overlayFade { from { opacity: 0 } to { opacity: 1 } }
        @keyframes cardPop { from { opacity: 0; transform: translateY(8px) scale(.98) } to { opacity: 1; transform: translateY(0) scale(1) } }
        @media (prefers-reduced-motion: reduce) {
          .anim-fade, .anim-pop { animation: none !important; }
        }
      `}</style>

      {/* Overlay */}
      <div
        className="fixed inset-0 z-50 flex items-center justify-center anim-fade"
        style={{ animation: "overlayFade .18s ease-out" }}
        aria-hidden
      >
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"
          onClick={close}
        />
      </div>

      {/* Dialog */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contactTitle"
        className="fixed inset-0 z-[60] grid place-items-center px-4"
      >
        <div
          className="relative w-full max-w-md anim-pop"
          style={{ animation: "cardPop .22s cubic-bezier(.2,.8,.2,1)" }}
        >
          <div className="relative rounded-2xl border border-white/70 bg-white/80 backdrop-blur-xl shadow-2xl">
            <button
              onClick={close}
              className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300/40"
              aria-label="Đóng"
            >
              <span className="text-2xl leading-none">×</span>
            </button>

            <div className="px-6 pt-7 pb-6">
              <div className="flex flex-col items-center gap-3 mb-2">
                <img
                  src="/images/logo/huyndai_logo.png"
                  alt="Hyundai"
                  className="h-10"
                />
                <h2
                  id="contactTitle"
                  className="text-center text-xl font-bold tracking-tight"
                >
                  BÁO GIÁ LĂN BÁNH & LÁI THỬ XE
                </h2>
                <p className="text-center text-sm text-gray-600">
                  Nhập thông tin, tư vấn viên sẽ liên hệ trong 5–10 phút.
                </p>
              </div>
              {apiError && (
                <div className="mb-3 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-red-700">
                  {apiError}
                </div>
              )}
              {success && (
                <div className="mb-3 rounded-lg border border-green-200 bg-green-50 px-3 py-2 text-green-700">
                  Cảm ơn bạn! Yêu cầu đã được gửi. Chúng tôi sẽ liên hệ sớm.
                </div>
              )}

              <form className="grid gap-3" onSubmit={onSubmit}>
                <label className="grid gap-1">
                  <span className="text-sm font-medium text-gray-700">
                    Số điện thoại
                  </span>
                  <input
                    ref={firstFieldRef}
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel"
                    placeholder="0xxx xxx xxx"
                    value={form.phone}
                    onChange={(e) =>
                      setForm((f) => ({
                        ...f,
                        phone: formatVNPhone(e.target.value),
                      }))
                    }
                    className={`w-full bg-white rounded-lg border px-3 py-2.5 placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-300/30 ${
                      errors.phone ? "border-red-400" : "border-gray-300"
                    }`}
                  />
                  {errors.phone && (
                    <span className="text-xs text-red-600">{errors.phone}</span>
                  )}
                </label>

                <label className="grid gap-1">
                  <span className="text-sm font-medium text-gray-700">
                    Tên khách hàng
                  </span>
                  <input
                    type="text"
                    autoComplete="name"
                    placeholder="Nguyễn Văn A"
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    className={`w-full bg-white rounded-lg border px-3 py-2.5 placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-300/30 ${
                      errors.name ? "border-red-400" : "border-gray-300"
                    }`}
                  />
                  {errors.name && (
                    <span className="text-xs text-red-600">{errors.name}</span>
                  )}
                </label>

                <label className="grid gap-1">
                  <span className="text-sm font-medium text-gray-700">
                    Xe muốn mua
                  </span>
                  <select
                    value={form.model}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, model: e.target.value }))
                    }
                    className={`w-full appearance-none rounded-lg border px-3 py-2.5 bg-white text-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-300/30 ${
                      errors.model ? "border-red-400" : "border-gray-300"
                    }`}
                  >
                    <option value="">Chọn mẫu xe</option>
                    {models.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                  {errors.model && (
                    <span className="text-xs text-red-600">{errors.model}</span>
                  )}
                </label>

                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-1 inline-flex items-center justify-center rounded-xl bg-blue-900 px-4 py-2.5 font-semibold text-white shadow-lg transition hover:bg-blue-800 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300/40"
                >
                  {submitting ? "Đang gửi…" : "GỬI YÊU CẦU NGAY"}
                </button>

                <p className="mt-1 text-center text-[12px] text-gray-500">
                  Bằng việc gửi yêu cầu, bạn đồng ý cho phép liên hệ tư vấn qua
                  điện thoại/Zalo.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
