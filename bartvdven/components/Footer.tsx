import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/65">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-18">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-display text-cream text-xl font-bold mb-3">
              Bart van de Ven
            </h3>
            <p className="text-sm leading-relaxed mb-4">
              Allround Timmerwerken en Montage. Vakmanschap en persoonlijke
              betrokkenheid in Noord-Brabant en omgeving.
            </p>
            <span className="inline-block bg-gold/20 text-gold text-xs px-3 py-1 rounded-full font-medium">
              Opgericht in 2015
            </span>
          </div>

          <div>
            <h4 className="text-cream font-semibold mb-5 uppercase tracking-widest text-xs">
              Contact
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="mt-0.5 text-gold shrink-0" />
                <span>
                  Wijststraat 23
                  <br />
                  5384 RA Heesch
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-gold shrink-0" />
                <a
                  href="tel:0615953885"
                  className="hover:text-gold transition-colors"
                >
                  06-15953885
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-gold shrink-0" />
                <a
                  href="mailto:info@bartvdven.nl"
                  className="hover:text-gold transition-colors"
                >
                  info@bartvdven.nl
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-cream font-semibold mb-5 uppercase tracking-widest text-xs">
              Bedrijfsgegevens
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3">
                <span className="text-gold/60 w-10 shrink-0">KVK</span>
                <span>63965801</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold/60 w-10 shrink-0">BTW</span>
                <span>NL150005386B01</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold/60 w-10 shrink-0">IBAN</span>
                <span>NL48 RABO 0305791788</span>
              </li>
            </ul>
            <div className="mt-5 pt-5 border-t border-white/10">
              <p className="text-xs leading-relaxed">
                <span className="block text-cream/50 uppercase tracking-widest text-xs mb-1.5">
                  Werkgebied
                </span>
                Heesch, Bernheze, Oss, Uden, Nistelrode, Nijmegen en omgeving
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-cream/35">
          <span>
            © {new Date().getFullYear()} Bart van de Ven Allround Timmerwerken
            en Montage
          </span>
          <span>bartvdven.nl</span>
        </div>
      </div>
    </footer>
  );
}
