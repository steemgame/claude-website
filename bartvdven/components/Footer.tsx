import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { imgPath } from "@/lib/imgPath";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Branding met echt logo */}
          <div>
            <Link href="/">
              <img
                src={imgPath("/images/logo.png")}
                alt="Bart van de Ven – Allround Timmerwerken en Montage"
                width={240}
                height={80}
                className="mb-4 brightness-0 invert opacity-90 object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed mb-4">
              Vakmanschap en persoonlijke betrokkenheid in Noord-Brabant en omgeving.
            </p>
            <span className="inline-block bg-blue/20 text-blue-light text-xs px-3 py-1 rounded-full font-medium">
              Opgericht in 2015
            </span>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5 uppercase tracking-widest text-xs">
              Contact
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="mt-0.5 text-blue shrink-0" />
                <span>Wijststraat 23<br />5384 RA Heesch</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-blue shrink-0" />
                <a href="tel:0615953885" className="hover:text-blue transition-colors">
                  06-15953885
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-blue shrink-0" />
                <a href="mailto:info@bartvdven.nl" className="hover:text-blue transition-colors">
                  info@bartvdven.nl
                </a>
              </li>
            </ul>
          </div>

          {/* Bedrijfsgegevens */}
          <div>
            <h4 className="text-white font-semibold mb-5 uppercase tracking-widest text-xs">
              Bedrijfsgegevens
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3">
                <span className="text-blue/70 w-10 shrink-0">KVK</span>
                <span>63965801</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue/70 w-10 shrink-0">BTW</span>
                <span>NL150005386B01</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue/70 w-10 shrink-0">IBAN</span>
                <span>NL48 RABO 0305791788</span>
              </li>
            </ul>
            <div className="mt-5 pt-5 border-t border-white/10">
              <p className="text-xs leading-relaxed">
                <span className="block text-white/40 uppercase tracking-widest text-xs mb-1.5">
                  Werkgebied
                </span>
                Heesch, Bernheze, Oss, Uden, Nistelrode, Nijmegen en omgeving
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/30">
          <span>© {new Date().getFullYear()} Bart van de Ven Allround Timmerwerken en Montage</span>
          <span>bartvdven.nl</span>
        </div>
      </div>
    </footer>
  );
}
