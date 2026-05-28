import { motion } from "motion/react";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/ui/card";
import { ShieldCheck, Zap, Globe, Heart } from "lucide-react";

export function About() {
  return (
    <div className="bg-background min-h-screen">
      <PageHeader 
        title="More Than Just Tools. A Commitment to Privacy." 
        description="Tooleefy is a professional-grade utility platform engineered for businesses, developers, and creators who demand precision without compromising data security."
        badge="Our Mission"
      />
      
      <section className="py-24">
        <div className="container mx-auto px-6">
          {/* Main Story Section */}
          <div className="max-w-4xl mx-auto mb-32 space-y-12">
            <div className="space-y-6 text-center">
              <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tighter uppercase italic">The Tooleefy Standard.</h2>
              <p className="text-xl text-muted-foreground font-medium leading-relaxed">
                In an era where "free service" often means "your data is the product," Tooleefy was born from a different vision. We believe that professional utilities—whether it's an **automated invoice maker**, a **high-fidelity QR engine**, or a **bulk industrial barcode system**—should be accessible to everyone, completely free, and fundamentally private.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
              <div className="space-y-4">
                <h3 className="text-2xl font-black italic uppercase tracking-tight">Human-Centric Engineering</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We don't build generic software. Every interface in Tooleefy is crafted with intention. We obsess over typography, spacing, and micro-interactions because we know that the tools you use every day should be a joy to operate, not a chore. Our platform is built by humans who use these exact same tools for their own businesses.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-black italic uppercase tracking-tight">Why We Remain Free</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The internet was built on the spirit of open exchange. We keep Tooleefy free because we believe productivity shouldn't be gated by a subscription. By utilizing advanced client-side technologies, we've reduced our overhead to the point where we can offer **premium business utilities** to the world without asking for a credit card.
                </p>
              </div>
            </div>
          </div>

          {/* Privacy Deep Dive */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32 bg-muted/30 p-8 md:p-16 rounded-[2.5rem] md:rounded-[4rem] border border-border/50">
            <div className="space-y-8">
              <h2 className="text-4xl font-black text-foreground tracking-tighter uppercase italic">Zero-Zero Architecture.</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground font-medium leading-relaxed">
                  Our "Zero-Zero" policy means **Zero Data Sent** and **Zero Servers Involved** in your sensitive processing tasks. 
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <div className="mt-1 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-3 h-3 text-primary" />
                    </div>
                    <div>
                      <span className="font-bold block text-foreground uppercase tracking-wider text-xs">Total Local Sovereignty</span>
                      <p className="text-sm text-muted-foreground">Your files, invoices, and QR data are processed entirely within your browser's memory. They never touch a cloud server.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="mt-1 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <Zap className="w-3 h-3 text-primary" />
                    </div>
                    <div>
                      <span className="font-bold block text-foreground uppercase tracking-wider text-xs">Edge Speed Performance</span>
                      <p className="text-sm text-muted-foreground">By eliminating network latency, our tools perform at the native speed of your hardware.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div>
                  <div className="text-3xl font-black text-primary mb-1">0%</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Data Storage</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-primary mb-1">100%</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Client Side</div>
                </div>
              </div>
            </div>
            <div className="relative">
               <div className="aspect-auto min-h-[300px] md:aspect-video bg-background dark:bg-card rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-12 flex flex-col items-center justify-center relative overflow-hidden shadow-premium border border-border">
                  <div className="relative z-10 space-y-6 text-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto ring-8 ring-primary/5">
                      <ShieldCheck className="w-10 h-10 text-primary" />
                    </div>
                    <div className="space-y-3">
                       <h3 className="text-xl md:text-2xl font-black text-foreground uppercase italic underline decoration-primary/30 underline-offset-4">Identity Unlinked</h3>
                       <p className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-wider md:tracking-[0.2em]">Privacy as a Default, Not an Option</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-primary)_0%,transparent_70%)] opacity-[0.03]" />
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <Card className="p-10 border-none shadow-none bg-muted rounded-[2.5rem] group hover:bg-primary/5 transition-colors">
              <Zap className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-black mb-4 text-foreground uppercase italic tracking-tight">The Modern Engine</h3>
              <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                Utilizing the latest in **WebAssembly and Vector processing**, we bring enterprise-level power to your browser. No bulky software to install.
              </p>
            </Card>
            <Card className="p-10 border-none shadow-none bg-muted rounded-[2.5rem] group hover:bg-primary/5 transition-colors">
              <Globe className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-black mb-4 text-foreground uppercase italic tracking-tight">Global Accessibility</h3>
              <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                Available in 150+ countries. Whether you're a startup in Berlin or a freelancer in Tokyo, Tooleefy is your **professional utility platform**.
              </p>
            </Card>
            <Card className="p-10 border-none shadow-none bg-muted rounded-[2.5rem] group hover:bg-primary/5 transition-colors">
              <Heart className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-black mb-4 text-foreground uppercase italic tracking-tight">Community Driven</h3>
              <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                We listen to our users. Most of our features—from **bulk QR generators** to **invoice management systems**—started as user requests.
              </p>
            </Card>
          </div>
          
          <div className="mt-32 text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full text-primary text-[10px] font-black uppercase tracking-widest">
              Join 50k+ Monthly Users
            </div>
            <h2 className="text-5xl font-black tracking-tighter uppercase italic text-foreground max-w-3xl mx-auto">Build the future of your workflow with us.</h2>
            <p className="text-muted-foreground max-w-xl mx-auto font-medium">
              We invite you to bookmark this page and make it a part of your daily routine. Professional work doesn't have to be expensive, and it shouldn't cost your privacy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
