export const INSTITUTE = { courseCount: 640, cityCount: 8, reviewCount: 312, trainerCount: 86, professionalsTrained: "1,900+", rating: "4.7 / 5", phone: "+254 700 000 000", phoneHref: "+254700000000", email: "info@geovanicapital.com" } as const;

export const fields = [
  { name: "Monitoring, evaluation & learning", count: 98, examples: ["M&E for development programmes", "Results-based management", "Impact evaluation"] },
  { name: "Data & analytics", count: 92, examples: ["Data analysis with Power BI", "Advanced Excel", "Data visualisation"] },
  { name: "Finance, audit & risk", count: 88, examples: ["Donor-funded project finance", "Internal audit", "Enterprise risk"] },
  { name: "Leadership & management", count: 82, examples: ["Leadership for new managers", "Strategic management", "People management"] },
  { name: "Procurement & supply chain", count: 76, examples: ["Public procurement", "Contract management", "Supply chain analytics"] },
  { name: "Climate, energy & environment", count: 72, examples: ["Climate finance", "Carbon markets", "Environmental safeguards"] },
  { name: "Digital, AI & cybersecurity", count: 68, examples: ["AI for M&E", "ISO 27001", "Data protection"] },
  { name: "Governance, law & public sector", count: 64, examples: ["Policy analysis", "Public sector reform", "Corporate governance"] },
] as const;
export type Session = { date: string; month: string; title: string; field: string; city: string; format: string; duration: string; classroom?: number; online?: number; seats?: number };
export const sessions: Session[] = [
  { date: "13", month: "Oct", title: "Monitoring & evaluation for development programmes", field: "M&E", city: "Nairobi", format: "Classroom + online", duration: "10 days", classroom: 2450, online: 1200, seats: 4 },
  { date: "15", month: "Oct", title: "Data analysis with Power BI", field: "Data", city: "Kigali", format: "Classroom", duration: "5 days", classroom: 1450, seats: 5 },
  { date: "17", month: "Oct", title: "Public procurement and contract management", field: "Procurement", city: "Online", format: "Live online", duration: "5 days", online: 950 },
  { date: "20", month: "Oct", title: "ISO 27001 lead implementer", field: "Cybersecurity", city: "Dubai", format: "Classroom + online", duration: "5 days", classroom: 2200, online: 1100, seats: 3 },
  { date: "22", month: "Oct", title: "Financial management for donor-funded projects", field: "Finance", city: "Nairobi", format: "Classroom", duration: "10 days", classroom: 2350 },
  { date: "24", month: "Oct", title: "AI for M&E: practical tools", field: "Digital", city: "Online", format: "Live online", duration: "5 days", online: 980 },
  { date: "27", month: "Oct", title: "Climate finance and carbon markets", field: "Climate", city: "Kampala", format: "Classroom + online", duration: "5 days", classroom: 1600, online: 900 },
  { date: "29", month: "Oct", title: "Leadership for new managers", field: "Leadership", city: "Dar es Salaam", format: "Classroom", duration: "5 days", classroom: 1450 },
  { date: "02", month: "Nov", title: "Advanced data analysis with Excel", field: "Data", city: "Mombasa", format: "Classroom", duration: "5 days", classroom: 1350 },
  { date: "04", month: "Nov", title: "OHS management systems", field: "Governance", city: "Addis Ababa", format: "Classroom", duration: "5 days", classroom: 1550 },
  { date: "07", month: "Nov", title: "Enterprise risk management", field: "Risk", city: "Accra", format: "Classroom + online", duration: "5 days", classroom: 1700, online: 950 },
  { date: "10", month: "Nov", title: "Results-based management", field: "M&E", city: "Online", format: "Live online", duration: "5 days", online: 900 },
];
export const cities = [
  { name: "Nairobi", country: "Kenya", sessions: 42, image: "nairobi" }, { name: "Mombasa", country: "Kenya", sessions: 18, image: "workshop" }, { name: "Kigali", country: "Rwanda", sessions: 24, image: "meeting" }, { name: "Kampala", country: "Uganda", sessions: 21, image: "team" }, { name: "Dar es Salaam", country: "Tanzania", sessions: 17, image: "classroom" }, { name: "Addis Ababa", country: "Ethiopia", sessions: 14, image: "whiteboard" }, { name: "Accra", country: "Ghana", sessions: 16, image: "participant" }, { name: "Dubai", country: "UAE", sessions: 12, image: "online" },
] as const;
export const testimonials = [
  { quote: "Two weeks after the Power BI course, I rebuilt our quarterly donor dashboard and cut reporting time from three days to an afternoon.", name: "Mercy Wanjiku", role: "Programme Quality Manager", org: "Lake Region Health Trust", course: "Data analysis with Power BI · May 2026", image: "portrait-a" },
  { quote: "The procurement simulations mirrored the decisions I make at work. I used the evaluation matrix in our next tender review.", name: "Daniel Okello", role: "Senior Procurement Officer", org: "Eastland Water Agency", course: "Public procurement · March 2026", image: "portrait-b" },
  { quote: "Our logframe is now clearer, and the team finally agrees on what evidence to collect. The trainer challenged our real project, not a textbook example.", name: "Amina Nkurunziza", role: "M&E Specialist", org: "Great Lakes Livelihoods", course: "M&E for development programmes · July 2026", image: "portrait-c" },
  { quote: "I returned with a practical risk register our directors could use immediately.", name: "Kwame Boateng", role: "Risk Analyst", org: "Coastal Development Bank", course: "Enterprise risk management · June 2026", image: "portrait-b" },
  { quote: "The live online format was focused and genuinely interactive across four countries.", name: "Neema Mushi", role: "Learning Partner", org: "Civic Futures Network", course: "Leadership for new managers · April 2026", image: "portrait-a" },
  { quote: "We left with an implementation roadmap, not only an ISO checklist.", name: "Yusuf Abdi", role: "Information Security Lead", org: "Savanna Finance Group", course: "ISO 27001 lead implementer · August 2026", image: "portrait-c" },
] as const;
export const partners = ["Rift Valley Water Board", "Lake Region Health Trust", "Savanna Finance Group", "Civic Futures Network", "Eastland Water Agency", "Great Lakes Livelihoods", "Coastal Development Bank", "Horizon Relief Partners", "Kora Public Service Trust", "AfriScope Research"] as const;
export const faqs = [
  { q: "How do I pay?", a: "We accept organisation invoices, bank transfer, M-Pesa and card. Your confirmation includes the payment instructions and due date." },
  { q: "Do you help with visas and accommodation?", a: "Yes. International classroom participants receive invitation-letter support, hotel options and airport transfer coordination." },
  { q: "Is the certificate recognised?", a: "Every participant receives a verifiable Geovani Capital Training certificate showing course hours and assessed learning outcomes." },
  { q: "Can online and classroom participants join the same session?", a: "Selected hybrid sessions support both formats. The course page clearly marks these; other sessions are classroom-only or live online." },
  { q: "What is your cancellation and transfer policy?", a: "You may transfer to another date at no charge up to 14 days before a course. Later changes may incur committed venue costs." },
  { q: "Can you invoice a donor or our organisation directly?", a: "Yes. We can address an invoice to your organisation or donor and include purchase-order and grant references." },
] as const;
