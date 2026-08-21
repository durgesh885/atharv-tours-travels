# Atharv Tours & Travels - Component Vault & Changelog

This document tracks all components removed from the active website by user request. Whenever the client requests to restore any section (e.g., after official launch or adding tour packages), follow the quick restore instructions below.

---

## 🗄️ Vault Index

### 1. Frequently Asked Questions (FAQ Section)
- **Status:** Archived in `components_vault/faq_section.html`
- **Reason for Removal:** Service is preparing for official launch; FAQs removed to keep the launch page focused and concise.
- **How to Restore:**
  1. Open `components_vault/faq_section.html`
  2. Paste the `<section id="faq">...</section>` code into `index.html` between `#reviews` and `#contact` sections.
  3. Add `<a href="#faq">FAQs</a>` back to the desktop navbar, mobile drawer, and footer.

---

### 2. Popular Tour & Holiday Packages (Shirdi, Mahabaleshwar, Ashtavinayak)
- **Status:** Archived in `components_vault/popular_tour_packages.html`
- **Reason for Removal:** Client requested to keep the initial page clean for cab rentals and All India on-demand rides.
- **How to Restore:**
  1. Open `components_vault/popular_tour_packages.html`
  2. Paste the `<section id="packages">...</section>` code into `index.html` between `#fleet` and `#reviews` sections.
  3. Add `<a href="#packages">Tour Packages</a>` back to the navigation menus.

---

## 📋 Active Features in `index.html`:
1. **Hero Section with 1-Tap WhatsApp Booking Lead Generator**
2. **Key Capabilities:** Outstation, Airport Drops, Local Rental, MIDC Corporate Travel
3. **Dedicated 2-Car Owned Fleet Showcase:** Maruti Suzuki Swift Dzire & Maruti Suzuki Ertiga (Zero pricing cards, clean specs & WhatsApp booking)
4. **All India Tourist Permit & Group On-Demand Banner (Innova / Tempo Traveller)**
5. **Google Verified Customer Reviews Card (4.9★) & Dynamic On-Site Review Modal**
6. **Office Location & Google Maps Embed (Medankarwadi, Chakan, Pune)**
7. **Direct Calling (`+91 75079 90227`) & WhatsApp Direct (`+91 96378 86385`)**
8. **Mobile Sticky 1-Tap Action Bar**
