import { StrictMode, useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Cloud,
  Database,
  Headphones,
  Mail,
  Menu,
  Search,
  ShieldCheck,
  Sparkles,
  Server,
  ShoppingCart,
  Thermometer,
  UserRound,
  X,
  Zap,
} from "lucide-react";
import "./styles.css";

const serviceCopy = {
  1: { name: "Bytewave Core Compute", description: "Reliable virtual machines for websites, apps, and everyday production workloads." },
  2: { name: "Bytewave Object Vault 500", description: "Secure, scalable object storage for documents, media, and business files." },
  3: { name: "Bytewave Shield Edge", description: "Practical security protection for applications, networks, and customer touchpoints." },
  4: { name: "Bytewave Data Lakehouse", description: "Bring scattered business data together for faster and clearer decisions." },
  5: { name: "Bytewave Performance Compute", description: "High-throughput infrastructure for demanding applications and growing teams." },
  6: { name: "Bytewave Continuity Pro", description: "Automated recovery protection that keeps critical business services moving." },
  7: { name: "Bytewave Compute C4", description: "Balanced, flexible compute for customer-facing applications and growing traffic." },
  8: { name: "Bytewave AI Compute G1", description: "GPU-ready infrastructure for AI experiments, automation, and visual workloads." },
  9: { name: "Bytewave Burst Compute S1", description: "Flexible pay-as-you-grow compute for seasonal and unpredictable demand." },
  10: { name: "Bytewave Dedicated Core D8", description: "Isolated compute power for production workloads that need dependable capacity." },
  11: { name: "Bytewave Kubernetes Node K4", description: "Managed-ready nodes for running containers with confidence and control." },
  12: { name: "Bytewave Object Vault 1TB", description: "Room for media libraries, backups, and every important business asset." },
  13: { name: "Bytewave Object Vault 2TB", description: "High-volume object storage with predictable pricing and durable protection." },
  14: { name: "Bytewave Block Drive 200", description: "Low-latency block storage for databases and live production applications." },
  15: { name: "Bytewave Team Files 5TB", description: "A secure shared workspace for distributed teams, clients, and projects." },
  16: { name: "Bytewave Deep Archive 10TB", description: "Long-term, low-cost storage for records your business needs to preserve." },
  17: { name: "Bytewave SSL Shield", description: "Managed certificates and secure connections for every important domain." },
  18: { name: "Bytewave Web Shield", description: "Web application protection against common attacks, abuse, and unwanted traffic." },
  19: { name: "Bytewave Zero Trust Access", description: "Give every teammate the right access without exposing your private network." },
  20: { name: "Bytewave SOC Watch", description: "Round-the-clock monitoring and response from security specialists you can reach." },
  21: { name: "Bytewave Secrets Locker", description: "Keep API keys, credentials, and certificates protected outside your codebase." },
  22: { name: "Bytewave Data Lakehouse Pro", description: "A governed analytics foundation for data-heavy teams and reporting needs." },
  23: { name: "Bytewave Warehouse Start", description: "Focused analytics for teams taking their first confident step into data." },
  24: { name: "Bytewave Warehouse Scale", description: "Elastic analytics compute for business-critical reporting at growing scale." },
  25: { name: "Bytewave Vector Search", description: "Search by meaning across product data, documents, and customer knowledge." },
  26: { name: "Bytewave Stream Pipeline", description: "Move live events from source to insight with dependable real-time delivery." },
  27: { name: "Bytewave Continuity 1TB", description: "Automated protection for the files and systems your team depends on." },
  28: { name: "Bytewave Disaster Recovery S1", description: "A warm standby environment for practical business continuity planning." },
  29: { name: "Bytewave Vault Retention", description: "Immutable long-term backups for regulated records and essential archives." },
  30: { name: "Bytewave Global CDN", description: "Serve websites and media quickly from locations close to your customers." },
  31: { name: "Bytewave Private Connect", description: "Dedicated links between offices, cloud environments, and critical services." },
  32: { name: "Bytewave Load Balance Pro", description: "Distribute traffic intelligently across production instances with failover." },
  33: { name: "Bytewave Managed WordPress", description: "A fast, secure WordPress home with maintenance handled by our team." },
  34: { name: "Bytewave Managed Kubernetes", description: "Launch and operate container platforms without an operations burden." },
  35: { name: "Bytewave Managed Database", description: "Production-grade databases with tuning, patches, backups, and support." },
  36: { name: "Bytewave Email Workspace", description: "Professional business email and collaboration tools for modern teams." },
  37: { name: "Bytewave API Gateway", description: "One secure front door for APIs, services, integrations, and partners." },
  38: { name: "Bytewave DNS Managed", description: "Resilient DNS with health checks for every important business domain." },
  39: { name: "Bytewave Identity Enterprise", description: "Centralize workforce identity and access across every application." },
  40: { name: "Bytewave Cloud Operations Plus", description: "A dedicated engineering rhythm for teams ready to scale with confidence." },
};

const products = [
  {
    id: 1,
    category: "Compute",
    tag: "Most popular",
    name: "Nova Compute C2",
    description: "Reliable virtual machines for apps that need room to grow.",
    price: "4,999",
    unit: "/ month",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=85",
    specs: ["2 vCPU cores", "4 GB RAM", "80 GB NVMe SSD"],
  },
  {
    id: 2,
    category: "Storage",
    tag: "Best value",
    name: "Object Vault 500",
    description: "S3-compatible storage built for your most important files.",
    price: "2,499",
    unit: "/ month",
    image:
      "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=900&q=85",
    specs: ["500 GB capacity", "Unlimited transfer", "99.99% durability"],
  },
  {
    id: 3,
    category: "Security",
    tag: "Peace of mind",
    name: "Shield Edge",
    description: "Security essentials that protect every customer touchpoint.",
    price: "6,999",
    unit: "/ month",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=900&q=85",
    specs: ["Managed firewall", "24/7 monitoring", "Threat reports"],
  },
  {
    id: 4,
    category: "Data",
    tag: "For teams",
    name: "Data Lakehouse",
    description:
      "Turn fragmented data into fast, confident business decisions.",
    price: "12,499",
    unit: "/ month",
    image:
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=900&q=85",
    specs: ["1 TB included", "SQL analytics", "Daily snapshots"],
  },
  {
    id: 5,
    category: "Compute",
    tag: "Performance",
    name: "Nova Compute C8",
    description: "High-throughput infrastructure for demanding workloads.",
    price: "18,999",
    unit: "/ month",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85",
    specs: ["8 vCPU cores", "32 GB RAM", "400 GB NVMe SSD"],
  },
  {
    id: 6,
    category: "Backup",
    tag: "New",
    name: "Continuity Pro",
    description: "Automated recovery that keeps your business moving forward.",
    price: "7,499",
    unit: "/ month",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=85",
    specs: ["500 GB protected", "15-min recovery point", "Multi-region"],
  },
  {
    id: 7,
    category: "Compute",
    tag: "25% off",
    name: "Nova Compute C4",
    description: "Balanced compute for growing customer-facing applications.",
    price: "8,999",
    originalPrice: "11,999",
    unit: "/ month",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85",
    specs: ["4 vCPU cores", "8 GB RAM", "160 GB NVMe SSD"],
  },
  {
    id: 8,
    category: "Compute",
    tag: "GPU ready",
    name: "Nova Compute G1",
    description:
      "Accelerated infrastructure for AI experiments and visual workloads.",
    price: "29,999",
    unit: "/ month",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85",
    specs: ["NVIDIA GPU", "16 GB RAM", "250 GB NVMe SSD"],
  },
  {
    id: 9,
    category: "Compute",
    tag: "Flexible",
    name: "Burst VM S1",
    description:
      "Pay-as-you-grow compute for seasonal and unpredictable traffic.",
    price: "3,499",
    unit: "/ month",
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=900&q=85",
    specs: ["1 vCPU core", "2 GB RAM", "40 GB SSD"],
  },
  {
    id: 10,
    category: "Compute",
    tag: "20% off",
    name: "Dedicated Core D8",
    description:
      "Isolated compute power for production workloads that cannot pause.",
    price: "23,999",
    originalPrice: "29,999",
    unit: "/ month",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=85",
    specs: ["8 dedicated cores", "32 GB RAM", "500 GB SSD"],
  },
  {
    id: 11,
    category: "Compute",
    tag: "Popular",
    name: "Kubernetes Node K4",
    description: "Managed-ready nodes for shipping containers with confidence.",
    price: "14,999",
    unit: "/ month",
    image:
      "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=900&q=85",
    specs: ["4 vCPU cores", "16 GB RAM", "Cluster networking"],
  },
  {
    id: 12,
    category: "Storage",
    tag: "New",
    name: "Object Vault 1TB",
    description:
      "Room for media libraries, backups, and every important asset.",
    price: "4,499",
    unit: "/ month",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85",
    specs: ["1 TB capacity", "Unlimited transfer", "Lifecycle rules"],
  },
  {
    id: 13,
    category: "Storage",
    tag: "30% off",
    name: "Object Vault 2TB",
    description: "High-volume object storage with predictable monthly pricing.",
    price: "7,999",
    originalPrice: "11,499",
    unit: "/ month",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=900&q=85",
    specs: ["2 TB capacity", "Versioning", "99.99% durability"],
  },
  {
    id: 14,
    category: "Storage",
    tag: "Fast access",
    name: "Block Drive 200",
    description:
      "Low-latency block storage for databases and live applications.",
    price: "5,999",
    unit: "/ month",
    image:
      "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&w=900&q=85",
    specs: ["200 GB NVMe", "15,000 IOPS", "Snapshots included"],
  },
  {
    id: 15,
    category: "Storage",
    tag: "Teams",
    name: "Cloud Files 5TB",
    description: "A secure shared workspace for distributed teams and clients.",
    price: "9,499",
    unit: "/ month",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=900&q=85",
    specs: ["5 TB shared", "Team permissions", "File recovery"],
  },
  {
    id: 16,
    category: "Storage",
    tag: "20% off",
    name: "Archive Deep 10TB",
    description: "Long-term, low-cost storage for records you need to keep.",
    price: "8,999",
    originalPrice: "11,249",
    unit: "/ month",
    image:
      "https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&w=900&q=85",
    specs: ["10 TB capacity", "Encrypted archive", "Flexible retrieval"],
  },
  {
    id: 17,
    category: "Security",
    tag: "Essentials",
    name: "SSL Shield",
    description:
      "Managed certificates and secure connections for every domain.",
    price: "1,499",
    unit: "/ month",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85",
    specs: ["Unlimited domains", "Auto renewal", "Certificate monitoring"],
  },
  {
    id: 18,
    category: "Security",
    tag: "25% off",
    name: "Shield WAF",
    description: "Web application protection against common attacks and abuse.",
    price: "5,499",
    originalPrice: "7,299",
    unit: "/ month",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=85",
    specs: ["Managed WAF", "Bot protection", "Threat analytics"],
  },
  {
    id: 19,
    category: "Security",
    tag: "Secure access",
    name: "Zero Trust Access",
    description:
      "Give every teammate the right access without exposing your network.",
    price: "8,499",
    unit: "/ month",
    image:
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=900&q=85",
    specs: ["100 identities", "SSO support", "Device policies"],
  },
  {
    id: 20,
    category: "Security",
    tag: "Managed",
    name: "SOC Watch",
    description:
      "Round-the-clock monitoring and response from local specialists.",
    price: "24,999",
    unit: "/ month",
    image:
      "https://images.unsplash.com/photo-1551808525-51a94da548ce?auto=format&fit=crop&w=900&q=85",
    specs: ["24/7 analysts", "Incident response", "Monthly reports"],
  },
  {
    id: 21,
    category: "Security",
    tag: "New",
    name: "Secrets Locker",
    description:
      "Keep API keys, credentials, and certificates out of your code.",
    price: "3,999",
    unit: "/ month",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=85",
    specs: ["Encrypted vault", "Audit trails", "Team sharing"],
  },
  {
    id: 22,
    category: "Data",
    tag: "30% off",
    name: "Data Lakehouse Pro",
    description: "A governed analytics foundation for data-heavy teams.",
    price: "18,999",
    originalPrice: "26,999",
    unit: "/ month",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=85",
    specs: ["3 TB included", "SQL analytics", "Role-based access"],
  },
  {
    id: 23,
    category: "Data",
    tag: "Analytics",
    name: "Warehouse Start",
    description:
      "Fast, focused analytics for teams making their first data leap.",
    price: "9,999",
    unit: "/ month",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85",
    specs: ["1 TB included", "BI connectors", "Daily refresh"],
  },
  {
    id: 24,
    category: "Data",
    tag: "Popular",
    name: "Warehouse Scale",
    description: "Elastic analytics compute for business-critical reporting.",
    price: "21,999",
    unit: "/ month",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=85",
    specs: ["5 TB included", "Elastic compute", "Priority support"],
  },
  {
    id: 25,
    category: "Data",
    tag: "AI ready",
    name: "Vector Search",
    description: "Search meaning, not just keywords, across your product data.",
    price: "11,499",
    unit: "/ month",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=900&q=85",
    specs: ["50m vectors", "API access", "Daily backups"],
  },
  {
    id: 26,
    category: "Data",
    tag: "20% off",
    name: "Stream Pipeline",
    description: "Move live events from source to insight without the wait.",
    price: "13,499",
    originalPrice: "16,999",
    unit: "/ month",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=85",
    specs: ["100m events", "Real-time dashboards", "Replay support"],
  },
  {
    id: 27,
    category: "Backup",
    tag: "Best value",
    name: "Continuity 1TB",
    description:
      "Automated protection for the files and systems your team depends on.",
    price: "11,999",
    unit: "/ month",
    image:
      "https://images.unsplash.com/photo-1560732488-6b0df240254a?auto=format&fit=crop&w=900&q=85",
    specs: ["1 TB protected", "Daily snapshots", "90-day retention"],
  },
  {
    id: 28,
    category: "Backup",
    tag: "25% off",
    name: "Disaster Recovery S1",
    description: "A warm standby environment for business continuity planning.",
    price: "19,999",
    originalPrice: "26,499",
    unit: "/ month",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=900&q=85",
    specs: ["Warm standby", "1-hour recovery", "Runbook support"],
  },
  {
    id: 29,
    category: "Backup",
    tag: "Compliance",
    name: "Vault Retention",
    description: "Immutable long-term backups for regulated business records.",
    price: "14,499",
    unit: "/ month",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=85",
    specs: ["5 TB protected", "Immutable copies", "7-year retention"],
  },
  {
    id: 30,
    category: "Networking",
    tag: "New",
    name: "Global CDN",
    description:
      "Serve websites and media quickly from locations near customers.",
    price: "6,499",
    unit: "/ month",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85",
    specs: ["50 TB transfer", "Edge caching", "TLS included"],
  },
  {
    id: 31,
    category: "Networking",
    tag: "20% off",
    name: "Private Connect",
    description:
      "Dedicated links between offices, cloud environments, and services.",
    price: "16,999",
    originalPrice: "21,249",
    unit: "/ month",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=85",
    specs: ["Private VLAN", "1 Gbps link", "Traffic controls"],
  },
  {
    id: 32,
    category: "Networking",
    tag: "Performance",
    name: "Load Balance Pro",
    description:
      "Distribute traffic intelligently across every production instance.",
    price: "7,999",
    unit: "/ month",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=85",
    specs: ["Multi-zone", "Health checks", "Auto failover"],
  },
  {
    id: 33,
    category: "Managed",
    tag: "Starter",
    name: "Managed WordPress",
    description: "A fast, secure WordPress home with the maintenance handled.",
    price: "4,999",
    unit: "/ month",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85",
    specs: ["1 website", "Daily backups", "Performance tuning"],
  },
  {
    id: 34,
    category: "Managed",
    tag: "30% off",
    name: "Managed Kubernetes",
    description:
      "Launch and operate container platforms without an operations burden.",
    price: "22,999",
    originalPrice: "32,999",
    unit: "/ month",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=85",
    specs: ["3 worker nodes", "Control plane managed", "Rolling upgrades"],
  },
  {
    id: 35,
    category: "Managed",
    tag: "Teams",
    name: "Managed Database",
    description:
      "Production-grade databases with tuning, patches, and backups included.",
    price: "15,999",
    unit: "/ month",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=85",
    specs: ["PostgreSQL / MySQL", "High availability", "Point-in-time restore"],
  },
  {
    id: 36,
    category: "Managed",
    tag: "Popular",
    name: "Email Workspace",
    description:
      "Professional business email with collaboration tools for your team.",
    price: "1,999",
    unit: "/ month",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=85",
    specs: ["25 mailboxes", "50 GB each", "Spam protection"],
  },
  {
    id: 37,
    category: "Managed",
    tag: "20% off",
    name: "API Gateway",
    description:
      "One secure front door for your APIs, services, and integrations.",
    price: "8,499",
    originalPrice: "10,599",
    unit: "/ month",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=900&q=85",
    specs: ["100m requests", "Rate limiting", "API analytics"],
  },
  {
    id: 38,
    category: "Networking",
    tag: "Starter",
    name: "DNS Managed",
    description: "Resilient DNS with health checks for every important domain.",
    price: "1,299",
    unit: "/ month",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=900&q=85",
    specs: ["100 domains", "Anycast DNS", "Failover records"],
  },
  {
    id: 39,
    category: "Security",
    tag: "Enterprise",
    name: "Identity Enterprise",
    description:
      "Centralize workforce identity and access across every application.",
    price: "29,999",
    unit: "/ month",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=85",
    specs: ["500 identities", "Adaptive MFA", "Identity reports"],
  },
  {
    id: 40,
    category: "Managed",
    tag: "25% off",
    name: "Cloud Operations Plus",
    description:
      "A dedicated engineering rhythm for teams ready to scale with confidence.",
    price: "39,999",
    originalPrice: "52,999",
    unit: "/ month",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85",
    specs: ["Named engineer", "Monthly roadmap", "Priority incidents"],
  },
].map((product) => {
  const refreshPrice = (value) =>
    Math.round((Number(value.replace(/,/g, "")) * 1.1) / 500) * 500;
  const price = refreshPrice(product.price);
  const originalPrice = product.originalPrice
    ? refreshPrice(product.originalPrice)
    : null;

  return {
    ...product,
    ...(serviceCopy[product.id] || {}),
    name: (serviceCopy[product.id]?.name || product.name).replace(
      /^Bytewave /,
      "",
    ),
    price: price.toLocaleString(),
    ...(originalPrice ? { originalPrice: originalPrice.toLocaleString() } : {}),
  };
});

const categories = [
  { name: "All services", icon: Cloud, count: "40 plans" },
  { name: "Compute", icon: Server, count: "8 plans" },
  { name: "Storage", icon: Database, count: "6 plans" },
  { name: "Security", icon: ShieldCheck, count: "5 plans" },
  { name: "Data", icon: Zap, count: "5 plans" },
];

function App() {
  const [activeCategory, setActiveCategory] = useState("All services");
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [cart, setCart] = useState([]);
  const [currentView, setCurrentView] = useState("home");
  const [authMode, setAuthMode] = useState("login");
  const [authError, setAuthError] = useState("");
  const [localTime, setLocalTime] = useState(() => new Date());
  const [temperature, setTemperature] = useState("--°C");
  const [loggedIn, setLoggedIn] = useState(() =>
    Boolean(sessionStorage.getItem("cloudnovaUser")),
  );
  const [userName, setUserName] = useState(
    () =>
      JSON.parse(sessionStorage.getItem("cloudnovaUser") || "null")?.name || "",
  );

  const filteredProducts = useMemo(
    () =>
      products.filter((product) => {
        const matchesCategory =
          activeCategory === "All services" ||
          product.category === activeCategory;
        const haystack =
          `${product.name} ${product.description} ${product.category}`.toLowerCase();
        return matchesCategory && haystack.includes(query.toLowerCase());
      }),
    [activeCategory, query],
  );

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const navigate = (view) => {
    setCurrentView(view);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const addToCart = (product) => {
    setCart((items) => [...items, product]);
    setCartOpen(true);
  };
  const cartTotal = cart.reduce(
    (total, product) => total + Number(product.price.replace(",", "")),
    0,
  );
  const timeGreeting =
    new Date().getHours() < 12 ? "Good Morning" : "Good Evening";
  useEffect(() => {
    const clock = setInterval(() => setLocalTime(new Date()), 1000);
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=30.1575&longitude=71.5249&current=temperature_2m",
    )
      .then((response) => response.json())
      .then((data) => {
        const currentTemperature = data.current?.temperature_2m;
        if (typeof currentTemperature === "number") {
          setTemperature(`${Math.round(currentTemperature)}°C`);
        }
      })
      .catch(() => setTemperature("--°C"));
    return () => clearInterval(clock);
  }, []);
  const digitalTime = localTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
  const dateLabel = localTime.toLocaleDateString("en-GB", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  const openAuth = (mode = "login") => {
    setAuthMode(mode);
    setAuthError("");
    setLoginOpen(true);
  };
  const handleAuth = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = form.get("email").trim().toLowerCase();
    const password = form.get("password");
    const savedUser = JSON.parse(
      sessionStorage.getItem("cloudnovaUser") || "null",
    );
    if (authMode === "signup") {
      if (savedUser?.email === email) {
        setAuthError("An account with this email already exists.");
        return;
      }
      const user = { name: form.get("name").trim(), email, password };
      sessionStorage.setItem("cloudnovaUser", JSON.stringify(user));
      setLoggedIn(true);
      setUserName(user.name);
      setAuthError("");
      return;
    }
    if (
      !savedUser ||
      savedUser.email !== email ||
      savedUser.password !== password
    ) {
      setAuthError("Email or password does not match this session.");
      return;
    }
    setLoggedIn(true);
    setUserName(savedUser.name);
    setAuthError("");
  };

  return (
    <div className="app-shell">
      <div className="topline">
        <span>
          {loggedIn && userName
            ? `${timeGreeting}, ${userName}`
            : "Built for Pakistan's boldest businesses"}
        </span>
        <span className="digital-watch">
          <span className="date-display">{dateLabel}</span>
          <span className="watch-divider">|</span>
          <time dateTime={localTime.toISOString()}>{digitalTime}</time>
          <span className="watch-divider">|</span>
          <span className="weather-chip" aria-label={`Current temperature ${temperature}`}>
            <Thermometer size={13} /> {temperature}
          </span>
        </span>
        <span>
          Multan · Pakistan <span className="topline-dot">●</span>
          <span className="topline-dot">●</span> Support: 24/7
        </span>
      </div>
      <header className="site-header">
        <button
          className="brand brand-button"
          onClick={() => navigate("home")}
          aria-label="Bytewave Solutions home"
        >
          <span className="brand-mark">
            <Zap size={23} strokeWidth={2.6} />
          </span>
          <span>
            Bytewave <em>Solutions</em>
          </span>
        </button>
        <nav className={menuOpen ? "main-nav open" : "main-nav"}>
          <button onClick={() => navigate("services")}>
            Services <ChevronDown size={14} />
          </button>
          <button onClick={() => navigate("why")}>Why Bytewave</button>
          <button onClick={() => navigate("about")}>About us</button>
          <button onClick={() => navigate("insights")}>Insights</button>
        </nav>
        <div className="header-actions">
          <button
            className="icon-button"
            aria-label="Search"
            onClick={() => navigate("services")}
          >
            <Search size={19} />
          </button>
          <button
            className="icon-button account-button"
            aria-label="Login"
            onClick={() => openAuth()}
          >
            <UserRound size={19} />
          </button>
          <button
            className="cart-button"
            aria-label="Open cart"
            onClick={() => setCartOpen(true)}
          >
            <ShoppingCart size={19} />
            <b>{cart.length}</b>
          </button>
          <button
            className="outline-button"
            onClick={() => setEnquiryOpen(true)}
          >
            Talk to an expert <ArrowRight size={16} />
          </button>
          <button
            className="menu-toggle"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {currentView === "home" && (
        <main id="top">
          <section className="hero">
            <div className="hero-copy reveal">
              <div className="eyebrow">
                <span className="eyebrow-dot" /> Digital foundations, made practical.
              </div>
              <h1>
                Infrastructure that
                <br />
                <span>thinks bigger.</span>
              </h1>
              <p>
                Cloud services designed for businesses that refuse to stand
                still. Simple to start, powerful enough for what comes next.
              </p>
              <div className="hero-actions">
                <button
                  className="primary-button"
                  onClick={() => navigate("services")}
                >
                  Explore cloud services <ArrowRight size={17} />
                </button>
                <button
                  className="text-button"
                  onClick={() => setEnquiryOpen(true)}
                >
                  Build your cloud <span>↗</span>
                </button>
              </div>
              <div className="hero-proof">
                <div className="avatar-stack">
                  <span>AM</span>
                  <span>SK</span>
                  <span>ZA</span>
                  <b>+</b>
                </div>
                <p>
                  <strong>Trusted by 120+ teams</strong>
                  <br />
                  across Pakistan
                </p>
              </div>
            </div>
            <div className="hero-visual reveal delay-one">
              <div className="visual-orbit orbit-one" />
              <div className="visual-orbit orbit-two" />
              <div className="visual-core">
                <Zap size={72} strokeWidth={1.2} />
                <div className="core-spark spark-a" />
                <div className="core-spark spark-b" />
              </div>
              <div className="orbit-ball-track" aria-hidden="true">
                <div className="orbit-ball" />
              </div>
              <div className="float-card uptime">
                <span className="pulse" />
                <div>
                  <strong>99.99%</strong>
                  <small>uptime, always</small>
                </div>
              </div>
              <div className="float-card region">
                <span className="region-icon">✦</span>
                <div>
                  <strong>Made here.</strong>
                  <small>Hosted with care in Pakistan</small>
                </div>
              </div>
            </div>
          </section>

          <section className="ticker">
            <div>
              <Sparkles size={16} /> <strong>Bytewave Solutions</strong>{" "}
              &nbsp; Powering your next big move
            </div>
            <span>01 / 04</span>
          </section>
          <section
            className="cloud-partners"
            aria-label="Cloud platforms supported by Bytewave Solutions"
          >
            <p>Built across the cloud</p>
            <div className="partner-logos">
              <span>
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/amazonwebservices.svg"
                  alt="AWS"
                />{" "}
                AWS
              </span>
              <span>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"
                  alt="Microsoft Azure"
                />{" "}
                Azure
              </span>
              <span>
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/googlecloud.svg"
                  alt="Google Cloud"
                />{" "}
                Google Cloud
              </span>
              <span>
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/alibabacloud.svg"
                  alt="Alibaba Cloud"
                />{" "}
                Alibaba Cloud
              </span>
              <span>
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/digitalocean.svg"
                  alt="DigitalOcean"
                />{" "}
                DigitalOcean
              </span>
              <span>
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/cloudflare.svg"
                  alt="Cloudflare"
                />{" "}
                Cloudflare
              </span>
            </div>
          </section>

          <section className="service-section" id="services">
            <div className="section-heading">
              <div>
                <p className="kicker">Find your fit</p>
                <h2>
                  Cloud services,
                  <br />
                  <i>without the fog.</i>
                </h2>
              </div>
              <p className="heading-note">
                Start with the essentials. Scale into anything.
                <br />
                Every plan comes with a human on the other end.
              </p>
            </div>
            <div className="category-row">
              {categories.map(({ name, icon: Icon, count }) => (
                <button
                  key={name}
                  className={
                    activeCategory === name ? "category active" : "category"
                  }
                  onClick={() => setActiveCategory(name)}
                >
                  <Icon size={18} />
                  <span>{name}</span>
                  <small>{count}</small>
                </button>
              ))}
            </div>
            <div className="catalog-toolbar">
              <p>
                <strong>{filteredProducts.length}</strong> services available
              </p>
              <div className="search-field">
                <Search size={16} />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search services"
                />
              </div>
            </div>
            <div className="product-grid">
              {filteredProducts.map((product, index) => (
                <ProductCard
                  product={product}
                  key={product.id}
                  index={index}
                  onEnquire={() => setEnquiryOpen(true)}
                  onAdd={() => addToCart(product)}
                />
              ))}
            </div>
            {filteredProducts.length === 0 && (
              <div className="empty-state">
                No services match that search. Try a broader term.
              </div>
            )}
          </section>

          <section className="why-section" id="why-us">
            <div className="why-image">
              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=85"
                alt="Bright modern team workspace"
              />
              <div className="image-label">
                <span>CN</span>
                <p>
                  <strong>
                    Technology with a human touch
                    <br />
                    that works.
                  </strong>
                  <small>Built around your goals.</small>
                </p>
              </div>
            </div>
            <div className="why-copy">
              <p className="kicker">Why teams choose Bytewave</p>
              <h2>
                Better systems,
                <br />
                <i>less friction.</i>
              </h2>
              <p>
                We turn complex infrastructure into clear, dependable systems
                that help your team move with confidence. From planning to
                production, you get practical guidance at every step.
              </p>
              <div className="benefit-list">
                <div>
                  <span>01</span>
                  <p>
                    <strong>Direct technical guidance</strong>
                    <br />
                    Get clear answers from people who understand your environment.
                  </p>
                </div>
                <div>
                  <span>02</span>
                  <p>
                    <strong>Clear from day one</strong>
                    <br />
                    Know what you are buying, why it matters, and what comes next.
                  </p>
                </div>
                <div>
                  <span>03</span>
                  <p>
                    <strong>Ready for what is next</strong>
                    <br />
                    Flexible foundations that adapt as your business grows.
                  </p>
                </div>
              </div>
              <button
                className="text-button dark"
                onClick={() => setEnquiryOpen(true)}
              >
                See how we can help <ArrowRight size={17} />
              </button>
            </div>
          </section>

          <section className="about-strip" id="about">
            <div className="about-title">
              <p className="kicker">The people behind the platform</p>
              <h2>
                Practical roots.
                <br />
                <i>Ambitious outlook.</i>
              </h2>
            </div>
            <div className="about-content">
              <p>
                Bytewave Solutions is led by <strong>Muhammad Jamshaid</strong>{" "}
                with a simple goal: make dependable digital infrastructure more
                accessible to ambitious businesses in Pakistan.
              </p>
              <div className="contact-line">
                <div>
                  <small>Call us</small>
                  <a href="tel:+923486303020">+92-348-6303020</a>
                </div>
                <div>
                  <small>Email us</small>
                  <a href="mailto:jamshaid.anwar9055@gmail.com">jamshaid.anwar9055@gmail.com</a>
                </div>
                <div>
                  <small>Find us</small>
                  <span>Garden Town Near Attock Petrol Pump, Shershah Road, Multan.</span>
                </div>
              </div>
            </div>
          </section>

          <section className="insights-section" id="insights">
            <div className="section-heading compact">
              <div>
                <p className="kicker">Ideas for the road ahead</p>
                <h2>
                  Clear thinking,
                  <br />
                  <i>for modern teams.</i>
                </h2>
              </div>
              <button className="text-button dark">
                Explore the library <ArrowRight size={17} />
              </button>
            </div>
            <div className="insights-grid">
              <article>
                <div className="insight-image">
                  <img
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=85"
                    alt="Earth from space"
                  />
                  <span>Cloud basics</span>
                </div>
                <small>6 min read · 12 Sep 2026</small>
                <h3>How to choose a cloud foundation that can grow with you</h3>
                <a href="#services">
                  Read story <ArrowRight size={15} />
                </a>
              </article>
              <article>
                <div className="insight-image">
                  <img
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=85"
                    alt="Server infrastructure"
                  />
                  <span>Operations</span>
                </div>
                <small>4 min read · 05 Sep 2026</small>
                <h3>When is it time to rethink your technology setup?</h3>
                <a href="#services">
                  Read story <ArrowRight size={15} />
                </a>
              </article>
              <article className="newsletter-card">
                <Mail size={28} />
                <p className="kicker">The Bytewave brief</p>
                <h3>Useful updates, delivered.</h3>
                <p>
                  Practical notes on infrastructure, security, and building
                  resilient digital teams.
                </p>
                <div className="email-input">
                  <input placeholder="Your email address" />
                  <button aria-label="Subscribe">
                    <ArrowRight size={18} />
                  </button>
                </div>
              </article>
            </div>
          </section>
        </main>
      )}

      {currentView !== "home" && (
        <PageView
          view={currentView}
          products={products}
          onAdd={addToCart}
          onEnquire={() => setEnquiryOpen(true)}
        />
      )}

      <footer>
        <div className="footer-main">
          <div>
            <a className="brand footer-brand" href="#top">
              <span className="brand-mark">
                <Zap size={23} />
              </span>
              <span>
                Bytewave <em>Solutions</em>
              </span>
            </a>
            <p>
              Practical technology.
              <br />
              Built for what comes next.
            </p>
          </div>
          <div className="footer-links">
            <div>
              <strong>Explore</strong>
              <a href="#services">All services</a>
              <a href="#why-us">Why Bytewave</a>
              <a href="#insights">Insights</a>
              <button className="footer-terms-link" onClick={() => navigate("terms")}>
                Terms and Conditions
              </button>
            </div>
            <div>
              <strong>Company</strong>
              <a href="#about">About us</a>
              <a href="#about">Contact</a>
              <a href="#about">Careers</a>
            </div>
            <div>
              <strong>Reach us</strong>
              <a href="tel:+923486303020">+92-348-6303020</a>
              <a href="mailto:jamshaid.anwar9055@gmail.com">Email support</a>
              <span>Garden Town Near Attock Petrol Pump, Shershah Road, Multan.</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2024 Bytewave Solutions. All rights reserved.</span>
          <span>
            Privacy · Terms · <b>Pakistan</b> ↗
          </span>
        </div>
      </footer>

      {enquiryOpen && (
        <div className="modal-backdrop" onClick={() => setEnquiryOpen(false)}>
          <div
            className="enquiry-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setEnquiryOpen(false)}
              aria-label="Close"
            >
              <X size={18} />
            </button>
            <p className="kicker">Start a conversation</p>
            <h2>
              Let's make your
              <br />
              <i>next move.</i>
            </h2>
            <p className="modal-copy">
              Tell us a little about what you are building. Ali and the team
              will get back to you shortly.
            </p>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                setEnquiryOpen(false);
              }}
            >
              <input required placeholder="Your name" />
              <input required type="email" placeholder="Work email" />
              <select defaultValue="">
                <option value="" disabled>
                  What can we help with?
                </option>
                <option>Cloud infrastructure</option>
                <option>Data & storage</option>
                <option>Security</option>
                <option>Something else</option>
              </select>
              <button className="primary-button" type="submit">
                Send enquiry <ArrowRight size={17} />
              </button>
            </form>
            <p className="modal-direct">
              Or call directly <a href="tel:+923234514154">+92 323 4514154</a>
            </p>
          </div>
        </div>
      )}
      {loginOpen && (
        <div className="modal-backdrop" onClick={() => setLoginOpen(false)}>
          <div
            className="enquiry-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setLoginOpen(false)}
              aria-label="Close"
            >
              <X size={18} />
            </button>
            <p className="kicker">Bytewave account</p>
            {loggedIn ? (
              <>
                <h2>
                  Welcome
                  <br />
                  <i>back.</i>
                </h2>
                <p className="modal-copy">
                  You are signed in and ready to manage your cloud services.
                </p>
                <button
                  className="primary-button"
                  onClick={() => {
                    sessionStorage.removeItem("cloudnovaUser");
                    setLoggedIn(false);
                    setAuthMode("login");
                  }}
                >
                  Sign out <ArrowRight size={17} />
                </button>
              </>
            ) : (
              <>
                <div className="auth-tabs">
                  <button
                    className={authMode === "login" ? "active" : ""}
                    onClick={() => {
                      setAuthMode("login");
                      setAuthError("");
                    }}
                  >
                    Log in
                  </button>
                  <button
                    className={authMode === "signup" ? "active" : ""}
                    onClick={() => {
                      setAuthMode("signup");
                      setAuthError("");
                    }}
                  >
                    Sign up
                  </button>
                </div>
                <h2>
                  {authMode === "login" ? (
                    <>
                      Your cloud,
                      <br />
                      <i>your account.</i>
                    </>
                  ) : (
                    <>
                      Make room for
                      <br />
                      <i>what's next.</i>
                    </>
                  )}
                </h2>
                <form onSubmit={handleAuth}>
                  {authMode === "signup" && (
                    <input required name="name" placeholder="Full name" />
                  )}
                  {authMode === "signup" && (
                    <input
                      required
                      name="business"
                      placeholder="Business name"
                    />
                  )}
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="Email address"
                  />
                  <input
                    required
                    name="password"
                    minLength="6"
                    type="password"
                    placeholder="Password (6+ characters)"
                  />
                  {authError && <p className="auth-error">{authError}</p>}
                  <button className="primary-button" type="submit">
                    {authMode === "login" ? "Log in" : "Create account"}{" "}
                    <ArrowRight size={17} />
                  </button>
                  <p className="modal-direct">
                    {authMode === "login" ? (
                      <>
                        New to Bytewave?{" "}
                        <button
                          type="button"
                          className="inline-link"
                          onClick={() => {
                            setAuthMode("signup");
                            setAuthError("");
                          }}
                        >
                          Create an account
                        </button>
                      </>
                    ) : (
                      <>
                        Already have an account?{" "}
                        <button
                          type="button"
                          className="inline-link"
                          onClick={() => {
                            setAuthMode("login");
                            setAuthError("");
                          }}
                        >
                          Log in
                        </button>
                      </>
                    )}
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      )}
      {cartOpen && (
        <CartDrawer
          cart={cart}
          total={cartTotal}
          onClose={() => setCartOpen(false)}
          onCheckout={() => {
            setCartOpen(false);
            setCheckoutOpen(true);
          }}
          onRemove={(id) =>
            setCart((items) => items.filter((item) => item.id !== id))
          }
        />
      )}
      {checkoutOpen && (
        <CheckoutModal
          cart={cart}
          total={cartTotal}
          onClose={() => setCheckoutOpen(false)}
          onSubmit={() => {
            setCheckoutOpen(false);
            setCart([]);
            setOrderPlaced(true);
          }}
        />
      )}
      {orderPlaced && (
        <div className="modal-backdrop" onClick={() => setOrderPlaced(false)}>
          <div
            className="success-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="fireworks" aria-hidden="true">
              <span className="firework firework-one" />
              <span className="firework firework-two" />
              <span className="firework firework-three" />
            </div>
            <div className="success-icon">
              <Check size={28} />
            </div>
            <p className="kicker">Payment complete</p>
            <h2>
              Congratulations!
              <br />
              <i>Payment done.</i>
            </h2>
            <p>
              Thank you for choosing Bytewave Solutions. Enjoy our services. Our team
              will contact you shortly for onboarding.
            </p>
            <button
              className="primary-button"
              onClick={() => setOrderPlaced(false)}
            >
              Enjoy our services <ArrowRight size={17} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function ProductCard({ product, index, onEnquire, onAdd }) {
  return (
    <article
      className="product-card"
      style={{ animationDelay: `${index * 70}ms` }}
    >
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <span className={product.originalPrice ? "sale-tag" : ""}>
          {product.tag}
        </span>
        <button
          className="quick-add"
          onClick={onAdd}
          aria-label={`Add ${product.name} to cart`}
        >
          <ShoppingCart size={17} />
        </button>
      </div>
      <div className="product-content">
        <div className="product-category">{product.category}</div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <ul>
          {product.specs.map((spec) => (
            <li key={spec}>
              <Check size={14} />
              {spec}
            </li>
          ))}
        </ul>
        <div className="product-bottom">
          <div>
            {product.originalPrice && (
              <del className="original-price">PKR {product.originalPrice}</del>
            )}
            <strong>PKR {product.price}</strong>
            <small>{product.unit}</small>
          </div>
          <button onClick={onEnquire}>
            See details <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </article>
  );
}

function PageView({ view, products, onAdd, onEnquire }) {
  if (view === "terms") {
    return <TermsPage />;
  }

  const content = {
    services: [
      "All cloud services",
      "Find the right infrastructure for every stage of your business.",
      "Browse plans",
    ],
    why: [
      "A stronger digital foundation",
      "Thoughtful infrastructure and practical support for teams building what comes next.",
      "Start a conversation",
    ],
    about: [
      "Built with purpose in Multan.",
      "Bytewave Solutions helps Pakistani businesses use dependable cloud technology with more clarity, control, and confidence.",
      "Meet the team",
    ],
    insights: [
      "The Bytewave journal",
      "Fresh perspectives on infrastructure, digital operations, security, and sustainable growth.",
      "Read the journal",
    ],
  }[view];
  const businessLines = [
    "Bytewave Solutions helps teams turn technology plans into dependable digital services.",
    "Our work is led by Muhammad Jamshaid from Multan, Pakistan.",
    "We make infrastructure decisions easier to understand before work begins.",
    "We help new businesses launch with a clear and manageable technical base.",
    "We help growing teams add capacity without unnecessary rebuilds.",
    "We support established companies that need stable, responsive systems.",
    "Our compute options give modern applications room to perform.",
    "Our storage options keep files, media, backups, and records organized.",
    "Our security options help reduce exposure across applications and networks.",
    "Our data options turn operational information into useful direction.",
    "Our continuity options help teams recover when an unexpected issue arrives.",
    "Our networking options keep offices, users, and services connected.",
    "Our managed options give teams access to experienced technical support.",
    "We work with leading cloud platforms according to each project's needs.",
    "We recommend technology based on fit, not a one-size-fits-all formula.",
    "Every engagement starts with your goals, constraints, and current setup.",
    "We explain technical choices in plain language before implementation.",
    "Our plans can begin simply and expand with real business demand.",
    "Clear PKR pricing helps teams plan their technology investment.",
    "Focused packages help new customers access reliable digital foundations.",
    "We plan migrations carefully to reduce disruption to daily operations.",
    "We watch system health so small concerns can be handled early.",
    "We include security in the architecture from the beginning.",
    "We handle customer data, credentials, and permissions with care.",
    "You get a real point of contact instead of being passed between queues.",
    "We explain what each service does and where it creates value.",
    "We believe technology should make work more focused, not more complicated.",
    "We measure progress through reliability, useful outcomes, and trust.",
    "Our ambition is to be a dependable technology partner for businesses in Pakistan.",
    "Bytewave Solutions helps local teams build boldly with a clearer digital path.",
  ];
  return (
    <main className="page-view">
      <div className="page-hero">
        <p className="kicker">Bytewave Solutions</p>
        <h1>{content[0]}</h1>
        <p>{content[1]}</p>
        <button className="primary-button" onClick={onEnquire}>
          {content[2]} <ArrowRight size={17} />
        </button>
      </div>
      {view === "services" ? (
        <div className="page-products">
          {products.map((product, index) => (
            <ProductCard
              product={product}
              index={index}
              key={product.id}
              onAdd={() => onAdd(product)}
              onEnquire={onEnquire}
            />
          ))}
        </div>
      ) : view === "why" ? (
        <div className="business-detail">
          <div className="business-intro">
            <Cloud size={58} />
            <h2>
              A clearer path for your
              <br />
              <i>next move.</i>
            </h2>
            <p>
              Bytewave is built around practical technology, direct support,
              and long-term working relationships.
            </p>
          </div>
          <div className="business-lines">
            {businessLines.map((line, index) => (
              <p key={line}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {line}
              </p>
            ))}
          </div>
          <button className="text-button dark" onClick={onEnquire}>
            Start the conversation <ArrowRight size={17} />
          </button>
        </div>
      ) : (
        <div className="page-detail">
          <Cloud size={58} />
          <h2>
            {view === "about"
              ? "Built in Multan, ready for the next chapter."
              : "Good decisions start with better information."}
          </h2>
          <p>
            {content[1]} We keep the technology understandable, the pricing
            transparent, and the support personal.
          </p>
          <button className="text-button dark" onClick={onEnquire}>
            Continue the conversation <ArrowRight size={17} />
          </button>
        </div>
      )}
    </main>
  );
}

function TermsPage() {
  return (
    <main className="page-view legal-page">
      <div className="page-hero legal-hero">
        <p className="kicker">Bytewave Solutions · Legal</p>
        <h1>Terms and Conditions</h1>
        <p>
          These terms explain the conditions under which you may visit and use
          the Bytewave Solutions website and services.
        </p>
      </div>
      <article className="legal-document">
        <p>
          The terms “We”, “Us”, “Our”, and “Company” refer to Bytewave
          Solutions. The terms “Visitor” and “User” refer to users of this
          website and our services.
        </p>
        <p>
          This page states the Terms and Conditions under which you may visit
          this website. Please read it carefully. If you do not accept these
          Terms and Conditions, please exit the site. Bytewave Solutions and
          its business divisions, associate companies, and investment partners
          reserve the right to revise these Terms and Conditions at any time by
          updating this page. You should review it periodically because these
          terms are binding on all users of this website.
        </p>

        <LegalSection title="Use of Content">
          <p>
            All logos, brands, marks, headings, labels, names, signatures,
            numerals, shapes, and combinations appearing on this site, except
            where otherwise noted, are owned by or used under licence by
            Bytewave Solutions and its associate entities. Use of these
            properties or any other content on this site is strictly prohibited
            except as permitted by these Terms and Conditions or the site
            content.
          </p>
          <p>
            You may not sell, modify, reproduce, display, publicly perform,
            distribute, or otherwise use this website’s materials for any
            public or commercial purpose without written permission from the
            relevant organisation or entity.
          </p>
        </LegalSection>

        <LegalSection title="Acceptable Website Use">
          <h3>A. Security Rules</h3>
          <p>
            Visitors are prohibited from violating or attempting to violate the
            security of the website, including: accessing data not intended for
            them or an unauthorised account; probing, scanning, or testing a
            system or network without authorisation; interfering with service
            through a virus, Trojan horse, overloading, flooding, mail bombing,
            or crashing; or sending unsolicited electronic mail, promotions,
            or advertising. Violations may result in civil or criminal
            liability. Bytewave Solutions may investigate suspected violations
            and cooperate with law enforcement authorities in prosecuting users
            involved in them.
          </p>
          <h3>B. General Rules</h3>
          <p>
            Visitors may not use the website to transmit, distribute, store, or
            destroy material that could constitute or encourage a criminal
            offence or violate applicable law; infringe copyright, trademark,
            trade secret, intellectual property, privacy, or publicity rights;
            or is libellous, defamatory, pornographic, profane, obscene,
            threatening, abusive, or hateful.
          </p>
        </LegalSection>

        <LegalSection title="Indemnity">
          <p>
            The User agrees to indemnify and hold harmless, without objection,
            Bytewave Solutions, its owner Muhammad Jamshaid, officers,
            directors, employees, and agents from and against any claims,
            actions, demands, liabilities, losses, or damages arising from or
            resulting from their use of the website or their breach of these
            Terms and Conditions.
          </p>
        </LegalSection>

        <LegalSection title="Liability">
          <p>
            The User agrees that neither Bytewave Solutions nor its group
            companies, owner, directors, officers, or employees shall be liable
            for any direct, indirect, incidental, special, consequential, or
            exemplary damages resulting from the use or inability to use the
            service; the cost of substitute goods or services; goods, data,
            information, or services purchased or obtained; messages received;
            transactions entered into through the service; unauthorised access
            to or alteration of transmissions or data; or any other matter
            relating to the service, including loss of profits, use, or data,
            even if advised of the possibility of such damages.
          </p>
          <p>
            Bytewave Solutions shall not be liable for damages arising from
            interruption, suspension, or termination of service, whether that
            interruption, suspension, or termination was justified or not,
            negligent or intentional, or inadvertent or advertent.
          </p>
          <p>
            Bytewave Solutions is not responsible or liable to the User or any
            other person for statements or conduct by third parties using the
            service. In no event shall the Company’s total liability to the User
            for all damages, losses, or causes of action exceed the amount paid
            by the User to Bytewave Solutions, if any, related to the cause of
            action.
          </p>
        </LegalSection>

        <LegalSection title="Disclaimer of Consequential Damages">
          <p>
            In no event shall Bytewave Solutions or any party, organisation, or
            entity associated with the Bytewave brand be liable for any damages,
            including incidental or consequential damages, lost profits, damage
            to computer hardware, loss of data or information, or business
            interruption, resulting from the use or inability to use this
            website or its materials, whether based on warranty, contract, tort,
            or any other legal theory, and whether or not advised of the
            possibility of such damages.
          </p>
        </LegalSection>

        <LegalSection title="Refund and Cancellation Policy">
          <p>
            Our focus is complete customer satisfaction. If you are displeased
            with a service provided by Bytewave Solutions, we will review a
            refund request where the reasons are genuine and supported after
            investigation. Please read the details of each service before
            purchasing it.
          </p>
          <p>
            In case of dissatisfaction with our services, clients may cancel
            their projects and request a refund subject to the policies below.
          </p>
          <h3>Cancellation Policy</h3>
          <p>
            For cancellations, contact us through the website or email
            <a href="mailto:jamshaid.anwar9055@gmail.com">
              jamshaid.anwar9055@gmail.com
            </a>
            . Cancellation requests must be placed within 48 hours after order
            confirmation. Where approved, the refund process takes up to 5
            business days and is initiated only to the bank account or payment
            method used by the customer. No cancellation request will be
            accepted once service delivery or provisioning has begun.
          </p>
          <h3>Refund Policy</h3>
          <p>
            If a client is not completely satisfied with a purchased service,
            they should submit a request within 3 working days of delivery or
            activation. If the service is materially different from its website
            description, or a confirmed service failure is caused by Bytewave
            Solutions, a refund may be accepted after investigation. Approved
            refunds will be issued through the original payment method within 5
            business days.
          </p>
          <p>
            For services under a third-party or manufacturer warranty, warranty
            support will be provided by the relevant manufacturer or service
            centre according to its own terms.
          </p>
        </LegalSection>

        <div className="legal-contact">
          <strong>Questions about these terms?</strong>
          <a href="mailto:jamshaid.anwar9055@gmail.com">
            jamshaid.anwar9055@gmail.com
          </a>
          <span>+92-348-6303020 · Multan, Pakistan</span>
        </div>
      </article>
    </main>
  );
}

function LegalSection({ title, children }) {
  return (
    <section className="legal-section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function CartDrawer({ cart, total, onClose, onCheckout, onRemove }) {
  return (
    <div className="drawer-backdrop" onClick={onClose}>
      <aside
        className="cart-drawer"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="drawer-heading">
          <div>
            <p className="kicker">Your selection</p>
            <h2>
              Cloud cart <span>{cart.length}</span>
            </h2>
          </div>
          <button
            className="modal-close"
            onClick={onClose}
            aria-label="Close cart"
          >
            <X size={18} />
          </button>
        </div>
        {cart.length === 0 ? (
          <div className="empty-cart">
            <ShoppingCart size={35} />
            <p>Your cart is waiting for a plan.</p>
            <small>Choose a service and it will appear here.</small>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img src={item.image} alt="" />
                  <div>
                    <strong>{item.name}</strong>
                    <small>
                      PKR {item.price} {item.unit}
                    </small>
                    <button onClick={() => onRemove(item.id)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-total">
              <span>Estimated monthly total</span>
              <strong>PKR {total.toLocaleString()}</strong>
            </div>
            <button
              className="primary-button checkout-button"
              onClick={onCheckout}
            >
              Continue to checkout <ArrowRight size={17} />
            </button>
          </>
        )}
      </aside>
    </div>
  );
}

function CheckoutModal({ cart, total, onClose, onSubmit }) {
  return (
    <div className="modal-backdrop checkout-backdrop" onClick={onClose}>
      <div
        className="checkout-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="checkout-form-panel">
          <button className="modal-close" onClick={onClose} aria-label="Close">
            <X size={18} />
          </button>
          <p className="kicker">Secure onboarding</p>
          <h2>
            Complete your
            <br />
            <i>order.</i>
          </h2>
          <div className="payment-logos" aria-label="Accepted payment methods">
            <span className="payment-logo visa">VISA</span>
            <span className="payment-logo mastercard">●●</span>
            <span className="payment-logo unionpay">UnionPay</span>
            <span className="payment-logo amex">AMEX</span>
          </div>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              onSubmit();
            }}
          >
            <div className="checkout-fields">
              <input required placeholder="Full name" />
              <input required type="email" placeholder="Business email" />
              <input required placeholder="Phone number" />
              <input required placeholder="Business / company name" />
              <input
                required
                className="full-field"
                placeholder="Billing address"
              />
              <div className="card-field full-field">
                <input
                  required
                  inputMode="numeric"
                  pattern="[0-9 ]{12,19}"
                  placeholder="Card number"
                />
                <span>••••</span>
              </div>
              <input required placeholder="Cardholder name" />
              <input
                required
                inputMode="numeric"
                pattern="[0-9]{2}/[0-9]{2}"
                placeholder="MM / YY"
              />
              <input
                required
                inputMode="numeric"
                pattern="[0-9]{3,4}"
                placeholder="CVV"
              />
            </div>
            <p className="demo-note">
              Demo checkout only. No real payment will be processed.
            </p>
            <button className="primary-button" type="submit">
              Place demo order <ArrowRight size={17} />
            </button>
          </form>
        </div>
        <aside className="checkout-summary">
          <p className="kicker">Your cart</p>
          <h3>Order summary</h3>
          <div className="summary-items">
            {cart.map((item) => (
              <div className="summary-item" key={item.id}>
                <img src={item.image} alt="" />
                <div>
                  <strong>{item.name}</strong>
                  <small>
                    {item.category} · {item.unit}
                  </small>
                  <b>PKR {item.price}</b>
                </div>
              </div>
            ))}
          </div>
          <div className="summary-total">
            <span>Monthly total</span>
            <strong>PKR {total.toLocaleString()}</strong>
          </div>
          <p className="summary-footnote">
            Taxes and final provisioning will be confirmed by a Bytewave Solutions
            specialist.
          </p>
        </aside>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
