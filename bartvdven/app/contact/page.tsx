"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ naam: "", telefoon: "", email: "", omschrijving: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Offerteverzoek van ${form.naam}`);
    const body = encodeURIComponent(
      `Naam: ${form.naam}\nTelefoon: ${form.telefoon}\nE-mail: ${form.email}\n\nOmschrijving:\n${form.omschrijving}`
    );
    window.location.href = `mailto:info@bartvdven.nl?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-blue-light uppercase tracking-widest text-xs font-semibold mb-3">
            Vrijblijvend contact
          </p>
          <h1 className="font-display text-white text-4xl md:text-5xl font-bold mb-4">
            Neem contact op
          </h1>
          <p className="text-white/60 max-w-xl mx-auto text-base leading-relaxed">
            Heeft u een klus groot of klein? Stuur een bericht of bel direct —
            Bart reageert snel en persoonlijk.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-offwhite">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Formulier */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl border border-grey-light p-8 shadow-sm">
                <h2 className="font-display text-charcoal text-2xl font-bold mb-6">
                  Stuur een bericht
                </h2>

                {sent ? (
                  <div className="text-center py-10">
                    <CheckCircle size={52} className="text-blue mx-auto mb-4" />
                    <h3 className="font-display text-charcoal text-xl font-bold mb-2">Bedankt!</h3>
                    <p className="text-grey text-sm leading-relaxed">
                      Uw e-mailprogramma is geopend met de ingevulde gegevens.
                      Bart neemt zo snel mogelijk contact met u op.
                    </p>
                    <button
                      onClick={() => setSent(false)}
                      className="mt-6 text-blue text-sm underline hover:text-blue-dark"
                    >
                      Nieuw bericht sturen
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="naam" className="block text-charcoal text-sm font-medium mb-1.5">
                          Naam <span className="text-blue">*</span>
                        </label>
                        <input
                          id="naam" name="naam" type="text" required
                          value={form.naam} onChange={handleChange}
                          placeholder="Jan de Vries"
                          className="w-full border border-grey-light rounded-lg px-4 py-3 text-sm text-charcoal bg-offwhite placeholder-grey-mid focus:outline-none focus:border-blue transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="telefoon" className="block text-charcoal text-sm font-medium mb-1.5">
                          Telefoonnummer
                        </label>
                        <input
                          id="telefoon" name="telefoon" type="tel"
                          value={form.telefoon} onChange={handleChange}
                          placeholder="06-12345678"
                          className="w-full border border-grey-light rounded-lg px-4 py-3 text-sm text-charcoal bg-offwhite placeholder-grey-mid focus:outline-none focus:border-blue transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-charcoal text-sm font-medium mb-1.5">
                        E-mailadres <span className="text-blue">*</span>
                      </label>
                      <input
                        id="email" name="email" type="email" required
                        value={form.email} onChange={handleChange}
                        placeholder="jan@voorbeeld.nl"
                        className="w-full border border-grey-light rounded-lg px-4 py-3 text-sm text-charcoal bg-offwhite placeholder-grey-mid focus:outline-none focus:border-blue transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="omschrijving" className="block text-charcoal text-sm font-medium mb-1.5">
                        Omschrijving van de klus <span className="text-blue">*</span>
                      </label>
                      <textarea
                        id="omschrijving" name="omschrijving" required rows={5}
                        value={form.omschrijving} onChange={handleChange}
                        placeholder="Beschrijf kort uw klus of vraag..."
                        className="w-full border border-grey-light rounded-lg px-4 py-3 text-sm text-charcoal bg-offwhite placeholder-grey-mid focus:outline-none focus:border-blue transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-blue hover:bg-blue-dark text-white py-3.5 rounded-lg font-semibold text-sm transition-colors flex items-center justify-center gap-2"
                    >
                      <Send size={16} />
                      Verstuur bericht
                    </button>
                    <p className="text-grey-mid text-xs text-center leading-relaxed">
                      Dit opent uw e-mailprogramma met de ingevulde gegevens.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Contact info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-charcoal rounded-xl p-7 text-white">
                {/* Logo in contact blok */}
                <div className="mb-6 pb-5 border-b border-white/10">
                  <Image
                    src="/images/logo.png"
                    alt="Bart van de Ven"
                    width={180}
                    height={60}
                    className="brightness-0 invert opacity-80 object-contain"
                  />
                </div>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Phone size={16} className="text-blue-light" />
                    </div>
                    <div>
                      <p className="text-xs text-white/45 mb-0.5">Telefoon</p>
                      <a href="tel:0615953885" className="text-white hover:text-blue-light transition-colors font-medium">
                        06-15953885
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Mail size={16} className="text-blue-light" />
                    </div>
                    <div>
                      <p className="text-xs text-white/45 mb-0.5">E-mail</p>
                      <a href="mailto:info@bartvdven.nl" className="text-white hover:text-blue-light transition-colors font-medium break-all">
                        info@bartvdven.nl
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue/20 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin size={16} className="text-blue-light" />
                    </div>
                    <div>
                      <p className="text-xs text-white/45 mb-0.5">Adres</p>
                      <p className="text-white font-medium leading-snug">
                        Wijststraat 23<br />5384 RA Heesch
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Clock size={16} className="text-blue-light" />
                    </div>
                    <div>
                      <p className="text-xs text-white/45 mb-0.5">Bereikbaarheid</p>
                      <p className="text-white font-medium leading-snug">
                        Ma – Vr: 07:00 – 18:00<br />Za: 08:00 – 13:00
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl border border-grey-light p-6">
                <h3 className="font-display text-charcoal font-bold mb-3 text-base">Werkgebied</h3>
                <p className="text-grey text-sm leading-relaxed">
                  Heesch, Bernheze, Oss, Uden, Nistelrode, Nijmegen en omgeving.
                </p>
                <div className="mt-4 pt-4 border-t border-grey-light">
                  <h4 className="text-charcoal font-semibold text-xs uppercase tracking-wider mb-3">
                    Bedrijfsgegevens
                  </h4>
                  <ul className="space-y-1.5 text-xs text-grey">
                    <li><span className="font-medium text-charcoal">KVK:</span> 63965801</li>
                    <li><span className="font-medium text-charcoal">BTW:</span> NL150005386B01</li>
                    <li><span className="font-medium text-charcoal">IBAN:</span> NL48 RABO 0305791788</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
