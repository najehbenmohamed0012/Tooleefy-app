import { motion } from "motion/react";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";

const articles = [
  {
    title: "Why Client-Side Processing is the Future of B2B SaaS",
    excerpt: "Discover how a shift towards local processing is revolutionizing data security and application performance in the enterprise space.",
    date: "May 15, 2024",
    author: "Tech Insider",
    category: "Insights"
  },
  {
    title: "5 Common Invoicing Mistakes Every Freelancer Makes",
    excerpt: "Learn how to avoid delays and ensure professional standards in your financial documentation with these expert tips.",
    date: "May 10, 2024",
    author: "Finance Pro",
    category: "Business"
  },
  {
    title: "Understanding QR Code Security: Beyond the Scanner",
    excerpt: "An in-depth look at how dynamic QR codes are used in modern cybersecurity and authentication workflows.",
    date: "May 05, 2024",
    author: "Security Team",
    category: "Dev"
  }
];

export function Blog() {
  return (
    <div className="bg-muted min-h-screen">
      <PageHeader 
        title="Tooleefy Insights." 
        description="The latest thoughts on localized productivity, data sovereignty, and business optimization."
        badge="Journal"
      />
      
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {articles.map((article, idx) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[16/10] bg-muted/50 rounded-[2.5rem] mb-8 overflow-hidden relative">
                   <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                   <div className="absolute top-6 left-6 px-3 py-1 bg-background rounded-full text-[10px] font-black uppercase tracking-widest text-primary shadow-sm">
                      {article.category}
                   </div>
                </div>
                <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-4">
                  <div className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {article.date}</div>
                  <div className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> {article.author}</div>
                </div>
                <h3 className="text-2xl font-black text-foreground mb-4 group-hover:text-primary transition-colors leading-tight">{article.title}</h3>
                <p className="text-muted-foreground font-medium text-sm leading-relaxed mb-8">{article.excerpt}</p>
                <div className="flex items-center gap-2 text-foreground font-black uppercase text-[10px] tracking-widest group-hover:gap-4 transition-all">
                  Read Article <ArrowRight className="w-4 h-4 text-primary" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export function Legal({ type }: { type: 'terms' | 'privacy' | 'cookies' }) {
  const isTerms = type === 'terms';
  const isPrivacy = type === 'privacy';
  const isCookies = type === 'cookies';

  return (
    <div className="bg-background min-h-screen">
      <PageHeader 
        title={isTerms ? "Terms of Service." : isPrivacy ? "Privacy Policy." : "Cookie Protocol."} 
        description={
          isTerms 
            ? "The legal framework governing our professional utility ecosystem." 
            : isPrivacy 
              ? "Our radical commitment to your absolute data sovereignty."
              : "Transparency regarding our minimal browser-level data footprint."
        }
        badge="Legal Documentation"
      />
      
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-slate dark:prose-invert prose-lg font-medium text-muted-foreground leading-relaxed max-w-none">
            {isTerms && (
              <div className="space-y-12">
                <div className="space-y-4">
                  <h2 className="text-3xl font-black text-foreground tracking-tight uppercase italic underline decoration-primary/30">01. Acceptance of Terms</h2>
                  <p>
                    By accessing and utilizing the Tooleefy platform (the "Service"), you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. These terms constitute a legally binding agreement between you and Tooleefy. If you do not agree with any part of these terms, you are prohibited from using our industrial utility suite.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-3xl font-black text-foreground tracking-tight uppercase italic underline decoration-primary/30">02. Scope of Service</h2>
                  <p>
                    Tooleefy provides a decentralized suite of productivity tools, including but not limited to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Dynamic Quote & Invoice Management Systems</li>
                    <li>High-Fidelity QR Code Generation Engines</li>
                    <li>Industrial Bulk Barcode Serialization Tools</li>
                    <li>Advanced Unit & Data Converters</li>
                  </ul>
                  <p>
                    We reserve the right to modify, suspend, or discontinue any aspect of the Service at any time without prior notice.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-3xl font-black text-foreground tracking-tight uppercase italic underline decoration-primary/30">03. User Conduct & Integrity</h2>
                  <p>
                    You agree to use our tools only for lawful purposes. Prohibited activities include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Generating fraudulent financial documents or misrepresenting tax identities.</li>
                    <li>Automated scraping, bot-driven requests, or any attempt to destabilize our infrastructure.</li>
                    <li>Enciphering illegal content into QR codes or Barcodes.</li>
                    <li>Removing or obscuring our brand marks where they are mandatory by design.</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="text-3xl font-black text-foreground tracking-tight uppercase italic underline decoration-primary/30">04. Limitation of Liability</h2>
                  <p>
                    Tooleefy provides these tools "As-Is" and "As-Available." We make no warranties, expressed or implied, regarding the accuracy of generated data. <strong>Users are solely responsible</strong> for verifying the legal and financial accuracy of any invoice, barcode, or data translation produced by the platform. Tooleefy shall not be held liable for any financial losses, compliance failures, or damages arising from the use of our generated assets.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-3xl font-black text-foreground tracking-tight uppercase italic underline decoration-primary/30">05. Intellectual Property</h2>
                  <p>
                    The "Tooleefy" name, the design aesthetic, and the underlying source code are the exclusive property of our team. However, we maintain a **User-First Ownership** policy: you retain 100% ownership of the data you input and the final assets (PDFs, Images, Text) generated through our engine.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-3xl font-black text-foreground tracking-tight uppercase italic underline decoration-primary/30">06. Termination</h2>
                  <p>
                    We reserve the right to terminate or restrict access to any user found in violation of these terms, particularly those engaging in systemic abuse of our free resources.
                  </p>
                </div>
              </div>
            )}

            {isPrivacy && (
              <div className="space-y-12">
                <div className="space-y-4">
                  <h2 className="text-3xl font-black text-foreground tracking-tight uppercase italic underline decoration-primary/30">01. Radical Data Sovereignty</h2>
                  <p>
                    Privacy is not just a feature at Tooleefy; it is our fundamental architectural constraint. Most contemporary utility platforms operate on a "Capture and Cloud" model, where your work is transmitted to distant servers for processing. Tooleefy operates on a **Radical Sovereignty Protocol**. This means that when you generate an invoice, encode a barcode, or convert sensitive business data, the entire computation occurs within your device's sandbox. We do not have a server-side "view" of your business operations.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-3xl font-black text-foreground tracking-tight uppercase italic underline decoration-primary/30">02. The "Zero-Knowledge" Standard</h2>
                  <p>
                    In legal and technical terms, Tooleefy acts as a **Passive Catalyst**. We provide the logic and the interface, but you provide the data and the processing power. Because your inputs never cross the network threshold to our infrastructure:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>We cannot be compelled by third parties to provide access to your documents (Invoices, QR codes, etc.) because we never possessed them.</li>
                    <li>There is no "Global Database" of your activity that can be breached or leaked.</li>
                    <li>Your financial identities, client lists, and internal serial numbers remain historically invisible to our team.</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="text-3xl font-black text-foreground tracking-tight uppercase italic underline decoration-primary/30">03. Minimalist & Ethical Telemetry</h2>
                  <p>
                    To maintain the stability of our high-fidelity engines, we collect basic, non-identifiable telemetry. This is limited to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>**Performance Metrics**: How fast the QR engine renders on different browser engines.</li>
                    <li>**Aggregation**: Total number of tool accesses to determine which utilities require further optimization.</li>
                    <li>**Error Logs**: Anonymous reports of script crashes to ensure industrial-grade uptime.</li>
                  </ul>
                  <p>
                    We strictly prohibit the use of identity-linking trackers or behavioral profiling tools within the Tooleefy ecosystem.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-3xl font-black text-foreground tracking-tight uppercase italic underline decoration-primary/30">04. Local Physical Storage</h2>
                  <p>
                    Any "Saving" mechanisms provided (such as persistent settings or invoice drafts) utilize **IndexedDB or LocalStorage** API. This is a physical partition of data stored exclusively on your hard drive. Clearing your browser cache or "Site Data" will permanently remove this information. We do not maintain backups of your local data; you are the sole custodian of your work.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-3xl font-black text-foreground tracking-tight uppercase italic underline decoration-primary/30">05. Security & Isolation</h2>
                  <p>
                    We recommend that users handling highly sensitive or regulated information (such as HIPAA or GDPR-governed data) utilize Tooleefy in an "Incognito" or "Private" window for maximum isolation. By closing the tab, you ensure that the browser's volatile memory is purged of all transient processing state.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-3xl font-black text-foreground tracking-tight uppercase italic underline decoration-primary/30">06. Future-Proof Integrity</h2>
                  <p>
                    As Tooleefy evolves, our commitment to this **Local-First** philosophy remains immutable. Should we ever introduce cloud-syncing features, they will be strictly "Opt-In" with end-to-end encryption, ensuring that even in the cloud, were we to host your data, we could not read it.
                  </p>
                </div>
              </div>
            )}

            {isCookies && (
              <div className="space-y-12">
                <div className="space-y-4">
                  <h2 className="text-3xl font-black text-foreground tracking-tight uppercase italic underline decoration-primary/30">01. Our Stance on Tracking</h2>
                  <p>
                    At Tooleefy, we believe that tracking should be the exception, not the rule. Unlike many modern platforms that utilize "tracking pixels" to follow your digital life across the web, Tooleefy maintains a **high-integrity, low-footprint browser environment**. We do not sell your data, because we don't collect it.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-3xl font-black text-foreground tracking-tight uppercase italic underline decoration-primary/30">02. Essential Session Cookies</h2>
                  <p>
                    We utilize a minimal set of "Essential" cookies to ensure the platform functions as intended. These include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>**Preference Memory**: Remembering your choice of Light or Dark mode.</li>
                    <li>**Session Continuity**: Ensuring that your active tool states remain intact during deep-work intervals.</li>
                    <li>**Security Tokens**: Protecting the platform from automated bot attacks and cross-site request forgery.</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="text-3xl font-black text-foreground tracking-tight uppercase italic underline decoration-primary/30">03. Performance Telemetry</h2>
                  <p>
                    To maintain our **industrial-grade performance standards**, we may use anonymized analytic cookies. These tell us which features are being used most frequently and help us identify hardware bottlenecks, allowing us to optimize the engine for slower devices. No personal data is ever attached to these signals.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-3xl font-black text-foreground tracking-tight uppercase italic underline decoration-primary/30">04. Third-Party Cookies</h2>
                  <p>
                    Certain features (such as integrated support widgets or social sharing) may occasionally introduce third-party cookies. We audit these integrations rigorously to ensure they adhere to our "Privacy-First" mission.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-3xl font-black text-foreground tracking-tight uppercase italic underline decoration-primary/30">05. Controlling Your Environment</h2>
                  <p>
                    You have total control. You can disable cookies at any time through your browser settings. Because Tooleefy is built with **client-side resilience**, most of our core tools (QR, Barcode, Converters) will continue to function even if you block all storage, though your preferences may reset upon refresh.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
