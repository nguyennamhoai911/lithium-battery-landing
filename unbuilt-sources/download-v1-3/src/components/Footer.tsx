/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Facebook, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-industrial-black text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Contact */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-red flex items-center justify-center">
                <span className="text-white font-bold text-xl italic">P</span>
              </div>
              <span className="font-bold text-xl tracking-tighter">PKG <span className="font-light">BATTERY</span></span>
            </div>
            <p className="text-industrial-gray-200 text-sm mb-8 leading-relaxed">
              Global B2B leader in industrial lithium battery solutions, BMS technology, and sustainable energy storage systems.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-industrial-gray-200">
                <Mail size={18} className="text-brand-red" />
                <span>info@pkgbattery.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-industrial-gray-200">
                <Phone size={18} className="text-brand-red" />
                <span>+84 (0) 28 1234 5678</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-industrial-gray-200">
                <MapPin size={18} className="text-brand-red" />
                <span>Industrial Zone 1, Binh Duong, Vietnam</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold mb-6 text-white uppercase tracking-wider text-sm">Products</h4>
            <ul className="space-y-3">
              {['Forklift Battery', 'AGV Battery', 'Energy Storage (ESS)', 'EV Battery', 'Charging Systems'].map(item => (
                <li key={item}><a href="#" className="text-industrial-gray-200 text-sm hover:text-brand-red transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-6 text-white uppercase tracking-wider text-sm">Resources</h4>
            <ul className="space-y-3">
              {['Technical Center', 'Product Catalogues', 'User Manuals', 'BMS Software', 'Certification'].map(item => (
                <li key={item}><a href="#" className="text-industrial-gray-200 text-sm hover:text-brand-red transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h4 className="font-bold mb-6 text-white uppercase tracking-wider text-sm">Connect With Us</h4>
            <div className="flex gap-4 mb-8">
              {[Facebook, Twitter, Linkedin, Youtube].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-brand-red hover:border-brand-red transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
            <p className="text-xs text-industrial-gray-200 mb-4 uppercase font-bold tracking-widest">Newsletter</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Business Email" 
                className="bg-white/5 border border-white/10 px-4 py-2 text-sm w-full focus:outline-none focus:border-brand-red"
              />
              <button className="bg-brand-red px-4 py-2 text-sm font-bold uppercase tracking-wider">Join</button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:row items-center justify-between gap-6 text-xs text-industrial-gray-200 uppercase tracking-widest font-medium">
          <p>© 2026 PKG BATTERY CO., LTD. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
