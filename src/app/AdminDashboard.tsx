import { motion } from "motion/react";
import { 
  Users, 
  Activity, 
  ShieldAlert, 
  Globe, 
  Server, 
  Database, 
  Zap,
  LayoutDashboard,
  Search,
  Filter,
  MoreVertical,
  ArrowUpRight
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function AdminDashboard() {
  const stats = [
    { label: "Total Users", value: "1,284", icon: Users, color: "text-blue-500", trend: "+12%" },
    { label: "Daily Generates", value: "8,920", icon: Zap, color: "text-amber-500", trend: "+24%" },
    { label: "System Health", value: "99.9%", icon: Activity, color: "text-emerald-500", trend: "Stable" },
    { label: "Security Events", value: "0", icon: ShieldAlert, color: "text-primary", trend: "Protected" },
  ];

  const adminUsers = [
    { id: 1, name: "Najeh Ben Mohamed", email: "najeh@tooleefy.com", role: "Super Admin", status: "Active", joined: "May 2024" },
    { id: 2, name: "John Doe", email: "john@example.com", role: "Contributor", status: "Active", joined: "May 2024" },
    { id: 3, name: "Jane Smith", email: "jane@test.com", role: "Regular", status: "Inactive", joined: "Apr 2024" },
  ];

  return (
    <div className="min-h-screen bg-muted/20 pt-10 pb-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
               <LayoutDashboard className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-black text-foreground tracking-tighter">System Console</h1>
              <p className="text-muted-foreground font-medium flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                Tooleefy Production Node &bull; v2.4.0
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="rounded-2xl font-bold h-12 border-border gap-2">
              Maintenance Mode
            </Button>
            <Button className="rounded-2xl bg-foreground text-background font-black uppercase tracking-widest text-[10px] h-12 px-8">
              System Reboot
            </Button>
          </div>
        </div>

        {/* Admin Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="p-8 border-none shadow-premium rounded-[2.5rem] bg-card overflow-hidden relative">
                <div className="relative z-10">
                   <div className="flex justify-between items-start mb-6">
                      <div className={`p-4 rounded-2xl bg-muted/50 ${stat.color}`}>
                        <stat.icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-black tracking-widest uppercase bg-muted/50 px-3 py-1 rounded-full text-muted-foreground">
                        {stat.trend}
                      </span>
                   </div>
                   <h4 className="text-3xl font-black text-foreground">{stat.value}</h4>
                   <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mt-1">{stat.label}</p>
                </div>
                <div className="absolute -bottom-6 -right-6 opacity-[0.03]">
                   <stat.icon className="w-24 h-24" />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* User Management Table */}
          <Card className="lg:col-span-8 p-8 border-none shadow-premium rounded-[2.5rem] bg-card">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
              <h3 className="text-xl font-black text-foreground uppercase italic tracking-tight">Active Registrations</h3>
              <div className="flex items-center gap-3 w-full md:w-auto">
                <div className="relative w-full md:w-64">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input placeholder="Filter users..." className="pl-10 h-10 rounded-xl bg-muted border-none font-bold" />
                </div>
                <Button size="icon" variant="outline" className="rounded-xl border-border shrink-0">
                  <Filter className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-border">
                    <th className="pb-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground">User Entity</th>
                    <th className="pb-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Privileges</th>
                    <th className="pb-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Lifecycle</th>
                    <th className="pb-4 text-right"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {adminUsers.map((u) => (
                    <tr key={u.id} className="group hover:bg-muted/30 transition-colors">
                      <td className="py-5">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center font-black text-primary">
                            {u.name[0]}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-foreground">{u.name}</p>
                            <p className="text-xs text-muted-foreground font-medium">{u.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-5">
                        <span className={`text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full ${u.role === 'Super Admin' ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'}`}>
                          {u.role}
                        </span>
                      </td>
                      <td className="py-5">
                        <div className="flex items-center gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full ${u.status === 'Active' ? 'bg-emerald-500' : 'bg-red-500'}`} />
                          <span className="text-xs font-bold text-foreground">{u.status}</span>
                        </div>
                        <p className="text-[10px] text-muted-foreground font-medium">Joined {u.joined}</p>
                      </td>
                      <td className="py-5 text-right">
                         <Button size="icon" variant="ghost" className="rounded-xl">
                            <MoreVertical className="w-4 h-4" />
                         </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-8 pt-8 border-t border-border flex justify-between items-center">
              <p className="text-xs text-muted-foreground font-bold italic tracking-tight">Displaying 3 of 1,284 entities</p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="rounded-xl font-bold border-border">Previous</Button>
                <Button variant="outline" size="sm" className="rounded-xl font-bold border-border">Next</Button>
              </div>
            </div>
          </Card>

          {/* System Status Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <Card className="p-8 border-none shadow-premium rounded-[2.5rem] bg-card">
              <h3 className="text-lg font-black text-foreground mb-6 uppercase italic tracking-tight">Node Topology</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Server className="w-5 h-5 text-primary" />
                    <span className="text-sm font-bold">Cloud Cluster</span>
                  </div>
                  <span className="text-xs font-black text-emerald-500 uppercase tracking-widest">Running</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Database className="w-5 h-5 text-primary" />
                    <span className="text-sm font-bold">Vector Vault</span>
                  </div>
                  <span className="text-xs font-black text-emerald-500 uppercase tracking-widest">Synced</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-primary" />
                    <span className="text-sm font-bold">DNS Edge</span>
                  </div>
                  <span className="text-xs font-black text-emerald-500 uppercase tracking-widest">Global</span>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-none shadow-premium rounded-[2.5rem] bg-foreground text-background">
              <div className="flex justify-between items-start mb-12">
                 <h3 className="text-3xl font-black leading-tight tracking-tighter italic">Total Utilities<br />Deployed</h3>
                 <ArrowUpRight className="w-8 h-8 text-primary" />
              </div>
              <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Compute Usage</span>
                      <span className="text-[10px] font-black tracking-widest uppercase text-primary">64%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1.5">
                      <div className="bg-primary h-1.5 rounded-full w-[64%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Storage Load</span>
                      <span className="text-[10px] font-black tracking-widest uppercase text-primary">28%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1.5">
                      <div className="bg-primary h-1.5 rounded-full w-[28%]" />
                    </div>
                  </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
