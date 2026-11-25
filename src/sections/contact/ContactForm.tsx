import { Send } from "lucide-react";
import { contactData } from "../../data";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormValues } from "./contactSchema";
import Button from "../../components/ui/Button";
import { useState } from "react";
import { sendContactEmail } from "../emailService";
import { useQuoteStore, useSelectedTruck } from "../../store/quoteStore";
import { formatQuoteSummary } from "../../utils/pricing";

const fieldClasses =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-[#14162e] placeholder:text-slate-400 outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/15 aria-invalid:border-brand-red aria-invalid:ring-4 aria-invalid:ring-brand-red/15";

type FormStatus = "idle" | "success" | "error";

function ContactForm() {
  const { form } = contactData;
  const [status, setStatus] = useState<FormStatus>("idle");
  const truck = useSelectedTruck();
  const miles = useQuoteStore((state) => state.miles);
  const quoteSummary = formatQuoteSummary(truck, miles);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { phone: "", email: "", message: "", includeQuote: false },
  });

  async function onSubmit(data: ContactFormValues) {
    setStatus("idle");
    try {
      await sendContactEmail(data, quoteSummary);
      reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-3xl bg-linear-125 from-[#bde0f7] to-[#e8f2fb] p-6 shadow-2xl shadow-black/20 sm:p-12"
    >
      <h3 className="text-3xl font-extrabold text-[#080b14] sm:text-4xl">
        {form.title}
      </h3>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="sr-only">
            {form.phonePlaceholder}
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            aria-invalid={errors.phone ? true : undefined}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            placeholder={form.phonePlaceholder}
            className={fieldClasses}
            {...register("phone")}
          />
          {errors.phone && (
            <p
              id="phone-error"
              className="mt-1.5 text-sm font-medium text-brand-red"
            >
              {errors.phone.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="sr-only">
            {form.emailPlaceholder}
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "email-error" : undefined}
            placeholder={form.emailPlaceholder}
            className={fieldClasses}
            {...register("email")}
          />
          {errors.email && (
            <p
              id="email-error"
              className="mt-1.5 text-sm font-medium text-brand-red"
            >
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="message" className="sr-only">
          {form.messagePlaceholder}
        </label>
        <textarea
          id="message"
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "phone-error" : undefined}
          rows={6}
          placeholder={form.messagePlaceholder}
          className={`${fieldClasses} block resize-y`}
          {...register("message")}
        />
        {errors.message && (
          <p
            id="message-error"
            className="mt-1.5 text-sm font-medium text-brand-red"
          >
            {errors.message.message}
          </p>
        )}
      </div>
      <label className="mt-5 flex cursor-pointer items-start gap-3 rounded-xl bg-white/60 p-4 text-sm text-[#14162e]">
        <input
          type="checkbox"
          {...register("includeQuote")}
          className="mt-0.5 size-4 shrink-0 accent-brand-blue"
        />
        <span>
          {form.includeQuoteLabel}
          <strong className="font-semibold">{quoteSummary}</strong>
        </span>
      </label>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="mt-8 h-14 w-48 bg-[#353685]!"
      >
        {isSubmitting ? form.sendingLabel : form.submitLabel}
        <Send className="size-4" />
      </Button>
      <p role="status" className="mt-4 min-h-6 text-sm font-medium">
        {status === "success" && (
          <span className="text-green-700">{form.successMessage}</span>
        )}
        {status === "error" && (
          <span className="text-brand-red">{form.errorMessage}</span>
        )}
      </p>
    </form>
  );
}

export default ContactForm;
