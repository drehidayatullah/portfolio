const cdmDataFlow = "/works_diagram/cdm-data-flow.html";
const cdmPrivilegeMatrix = "/works_diagram/cdm-privilege-matrix.html";
const sopDataPortalFlow = "/works_diagram/sop-data-portal-flow.html";
const kpiReportingFlow = "/works_diagram/kpi-reporting-flow.html";
const xreaFlow = "/works_diagram/xrea-flow.html";

// ============================================================
//  EDIT THIS FILE to add / update your projects & experiences
// ============================================================

export const profile = {
  name: "Andre Hidayatullah",
  role: "Business Analyst & Project Lead",
  tagline:
    "Turning business complexity into structured systems, clear data, and measurable outcomes.",
  bio: `I'm a Business Analyst and Project Lead who works at the intersection of business strategy, data architecture, and system design. I specialize in translating complex operational requirements into structured, scalable solutions — from designing role-based data systems to standardizing company-wide processes and building automated reporting infrastructure.

At PT Gaya Makmur Tractors, I've led cross-functional initiatives end-to-end: architecting a Customer Data Management system with scoped access control, building a company-wide SOP portal for 500+ employees, designing a real-time KPI reporting system across five divisions, and driving the product readiness and launch of a real-time heavy equipment tracking system.

My focus is always the same: bring clarity to ambiguity, align stakeholders around a shared understanding, and deliver solutions that create real operational impact.`,
  location: "Jakarta, Indonesia",
  available: true,
  avatar: "public/Avatar.png",
  email: "dre.hidayatullah@gmail.com",
  socials: {
    linkedin: "https://www.linkedin.com/in/andre-hidayatullah/",
    instagram: "https://www.instagram.com/andrenallineee/",
    behance: "https://www.behance.net/andrehidayat2",
  },
  // Ganti bagian skills di profile.js dengan ini:

  skills: [
    {
      category: "Core BA & PM",
      items: [
        "Business Analysis & Requirements Gathering",
        "Project Leadership & Stakeholder Management",
        "Process Mapping & Optimization",
        "Cross-Functional Alignment",
      ],
    },
    {
      category: "Data & Systems",
      items: [
        "Data Architecture & System Design",
        "Role-Based Access Control (RBAC) Design",
        "Data Governance & Document Control",
        "System Integration Strategy",
        "KPI Framework Design & Reporting",
        "Data Visualization & Dashboarding",
      ],
    },
    {
      category: "Technical",
      items: [
        "SQL (MySQL, Azure Data Studio)",
        "Google Sheets Automation (Apps Script)",
        "Laravel / PHP (collaboration & spec)",
        "Flutter (collaboration & spec)",
      ],
    },
    {
      category: "Marketing & Analytics",
      items: [
        "Digital Marketing Strategy & Analytics",
        "Campaign Performance Analysis (Meta Ads, Google Ads)",
        "Marketing Data Analytics",
      ],
    },
    {
      category: "Other",
      items: ["Vibe Coder"],
    },
  ],
  experiences: [
    {
      role: "Business Analyst & Project Lead",
      company: "PT Gaya Makmur Tractors",
      period: "Feb 2025 — Present",
      desc: "Lead cross-functional data and system initiatives as the primary bridge between business units and technical teams. Delivered a Customer Data Management (CDM) system with role-based access control for sales and after-sales operations; built a secure SOP/IK data portal for 500+ employees with scoped document access; designed an automated KPI reporting system across five divisions using Google Sheets and Apps Script; and led the product readiness assessment and internal launch of Xrea, a real-time heavy equipment tracking system. Own the end-to-end process from stakeholder discovery and requirements gathering through system design, delivery, and adoption.",
    },
    {
      role: "Marketing Communication Officer",
      company: "PT Gaya Makmur Tractors",
      period: "Apr 2022 — Feb 2025",
      desc: "Drove digital marketing performance across paid and organic channels (Google Ads, Meta Ads), managing end-to-end campaign execution from strategy to optimization. Produced high-converting content and sales materials, supported lead generation initiatives, and delivered data-backed marketing reports. Played a key role in strengthening brand visibility and contributing to pipeline growth through integrated marketing efforts.",
    },
    {
      role: "Spare Part Sales Staff",
      company: "PT Gaya Makmur Tractors",
      period: "Oct 2021 — Apr 2022",
      desc: "Managed B2B spare parts sales for Wirtgen equipment, providing consultative support on maintenance planning and product lifecycle management. Helped clients optimize equipment performance by recommending high-quality German-engineered components tailored to operational needs.",
    },
    {
      role: "Social Media Specialist",
      company: "PT Atas Bawah Creative Hub",
      period: "Sep 2019 — Aug 2021",
      desc: "Led content strategy and performance optimization for multiple brands, translating audience insights into high-engagement campaigns. Conducted in-depth analytics, competitor benchmarking, and executed targeted Instagram ads to drive measurable audience and customer growth.",
    },
    {
      role: "Social Media Officer",
      company: "PT Atas Bawah Creative Hub",
      period: "Nov 2018 — Aug 2019",
      desc: "Handled full-cycle social media management, from content production (photography & editing) to audience engagement and reporting. Delivered ROI-focused insights to support business decisions and improve campaign effectiveness.",
    },
  ],
  education: [
    {
      degree: "Bachelor of Mining Engineering",
      school: "Universitas Syiah Kuala",
      period: "2015 — 2020",
    },
  ],
};

// ============================================================
//  WORKS / PROJECTS — Add your projects here
//  For images: place image files in /public/works/ folder
//  then reference as "/works/your-image.jpg"
// ============================================================

export const works = [
  {
    id: "cdm-implementation",
    title: "CDM – Customer Data Management System",
    category: "Data Management System",
    tags: [
      "Flutter",
      "Laravel",
      "MySQL",
      "Business Analysis",
      "Project Leadership",
      "Stakeholder Management",
      "System Integration",
      "Data Management",
      "Data Governance",
      "Role-Based Access Control",
    ],
    thumbnail: "",
    date: "2025",
    summary:
      "Led the development of a Customer Data Management (CDM) system to centralize heavy equipment sales and unit population data (units sold to customers). Eliminated cross-division data discrepancies, removed manual Excel-based workflows, and significantly improved reporting efficiency from days to hours.",
    content: [
      {
        type: "heading",
        text: "Project Background & Business Problem",
      },
      {
        type: "paragraph",
        text: "Before CDM was introduced, customer and unit sales data were fragmented across Marketing, Sales, and After-Sales Support teams. Each division maintained its own version of data — mostly in separate Excel files shared manually via email.",
      },
      {
        type: "paragraph",
        text: "This led to frequent data discrepancies, lack of visibility into actual unit population (units sold and owned by customers), and slow reporting processes that could take up to 7 days. As a result, teams struggled to align strategies and respond quickly to customer needs.",
      },
      {
        type: "heading",
        text: "My Role – Business Analyst & Project Leader",
      },
      {
        type: "paragraph",
        text: "I acted as both the Business Analyst and Project Leader, responsible for bridging business needs with technical execution. I worked closely with Marketing, Sales, and After-Sales teams to identify critical data requirements, validate data feasibility, and align all stakeholders on a unified data structure.",
      },
      {
        type: "paragraph",
        text: "In parallel, I led the collaboration with the IT team to ensure the system was delivered in line with business expectations and usable across all divisions.",
      },
      {
        type: "heading",
        text: "Approach – Discovery & Requirements Gathering",
      },
      {
        type: "list",
        items: [
          "Conducted stakeholder interviews across Marketing, Sales Operations, and After-Sales Support to understand workflows and pain points",
          "Identified key issues in manual reporting and inconsistent data across divisions",
          "Mapped required data points for tracking unit sales and customer-owned unit population",
          "Evaluated existing data sources and defined feasible integration scope",
        ],
      },
      {
        type: "heading",
        text: "Data Architecture & Flow",
      },
      {
        type: "paragraph",
        text: "One of my core BA responsibilities was designing the data architecture — defining how data moves from its source to the end user, and what transformations happen along the way. The system operates across two separate databases and four distinct layers.",
      },
      {
        type: "subheading",
        text: "Layer 1 – Source: Company ERP Database (Read-Only)",
      },
      {
        type: "paragraph",
        text: "All source data originates from the company's internal ERP server. This database is strictly read-only from the CDM side — no data can be modified outside of the ERP system itself, preserving data integrity at the source. Three data types are pulled from this layer:",
      },
      {
        type: "list",
        items: [
          "Unit sales data — Regional, Branch, Sales Engineer name, Customer name, unit sold, and Serial Number (SN). The SN serves as the Primary Key throughout the system.",
          "Service history — fetched directly per SN unit when needed; not stored in the CDM database.",
          "Spare part purchase history — also fetched directly per SN unit; not stored in the CDM database.",
        ],
      },
      {
        type: "subheading",
        text: "Layer 2 – CDM Database (Editable)",
      },
      {
        type: "paragraph",
        text: "Unit sales data is transferred from the ERP into a separate CDM database via API (POST and GET). This separation allows the CDM team to enrich and update unit condition data without touching or duplicating records in the ERP. Deduplication is handled at the API level using the SN as the unique identifier — re-syncing will update existing records rather than creating duplicates.",
      },
      {
        type: "paragraph",
        text: "Fields that can be updated in the CDM database relate exclusively to the current condition of the unit in the field, as reported by the technician:",
      },
      {
        type: "list",
        items: [
          "Unit status (e.g. active, damaged, idle)",
          "Current location / deployment site",
          "Operating hours / unit meter reading",
          "Technician field notes on unit condition",
        ],
      },
      {
        type: "paragraph",
        text: "Service history and spare part history are never stored in the CDM database — they are always fetched live from the ERP by Serial Number. This keeps the CDM database lean and avoids data duplication for records that are already well-maintained in the ERP.",
      },
      {
        type: "subheading",
        text: "Layer 3 – Backend: Laravel API + Role-Based Access Control",
      },
      {
        type: "paragraph",
        text: "The Laravel backend serves as the business logic and access control layer. Every API query is scoped to the authenticated user's role and organizational boundary — the backend never returns data outside the user's permitted scope. This is where data governance is enforced programmatically.",
      },
      {
        type: "subheading",
        text: "Layer 4 – Frontend: Flutter Application",
      },
      {
        type: "paragraph",
        text: "The Flutter app consumes the API and renders data according to the logged-in user's role. Authentication is integrated with the company's existing office account system managed by HRD — meaning access is automatically revoked when an employee is no longer active, without requiring manual deactivation in CDM.",
      },
      {
        type: "html",
        src: cdmDataFlow,
        caption:
          "CDM data flow — from ERP source through API, CDM database, Laravel backend, to role-based Flutter frontend",
      },
      {
        type: "heading",
        text: "Data Governance – Access Privilege Design",
      },
      {
        type: "paragraph",
        text: "A significant part of my BA work was defining the data access model: which roles can see which data, and what actions they are permitted to perform. The principle applied throughout was minimum necessary access — each role receives only the data scope required to do their job, nothing more.",
      },
      {
        type: "paragraph",
        text: "Privilege boundaries were determined through structured interviews with each role's stakeholders, mapping their minimum required data access against their core daily workflows. The result is a four-role access model:",
      },
      {
        type: "subheading",
        text: "Sales Engineer",
      },
      {
        type: "list",
        items: [
          "View unit sales data and customer profiles assigned to them by their Branch Manager",
          "View service history and spare part purchase history for their own customer units (by SN)",
          "Export report: unit list per customer, service history, spare part history — scoped to own portfolio only",
        ],
      },
      {
        type: "subheading",
        text: "Branch Manager",
      },
      {
        type: "list",
        items: [
          "View all unit and customer data within their branch",
          "Assign customer ownership to any Sales Engineer within their branch",
          "Transfer customer ownership between Sales Engineers within their branch",
          "View service history and spare part history for all units in their branch",
          "Export report: unit list per customer, service history, spare part history — scoped to their branch",
        ],
      },
      {
        type: "subheading",
        text: "Regional Head",
      },
      {
        type: "list",
        items: [
          "View all unit and customer data within their region",
          "Transfer customer ownership between branches within their region",
          "Transfer customer ownership between Sales Engineers across branches — as long as the customer belongs to their region",
          "View service history and spare part history for all units in their region",
          "Export report: unit list per customer, service history, spare part history — scoped to their region",
        ],
      },
      {
        type: "subheading",
        text: "Product Manager",
      },
      {
        type: "list",
        items: [
          "View all customers who have purchased units under their managed product line",
          "View which Sales Engineers have sold units of their product line",
          "View service history and spare part history for units of their product line",
          "Export report: unit list per customer, service history, spare part history — scoped to their product line",
        ],
      },
      {
        type: "paragraph",
        text: "No role can view or export data outside their defined scope. This design prevents unauthorized cross-division data access and reduces the risk of data breaches from bulk exports, since every export is bounded by the authenticated user's organizational scope.",
      },
      {
        type: "html",
        src: cdmPrivilegeMatrix,
        caption:
          "Privilege matrix — data access and permitted actions per role",
      },
      {
        type: "heading",
        text: "Data Preparation – Building a Reliable Foundation (MySQL)",
      },
      {
        type: "paragraph",
        text: "Data was scattered across multiple sources with inconsistent formats. I took ownership of extracting, cleaning, and standardizing data from company servers using MySQL, ensuring a reliable and structured dataset for system integration.",
      },
      {
        type: "heading",
        text: "Application Workflow Design",
      },
      {
        type: "paragraph",
        text: "Before development began, I designed the full application workflow to align both business and technical teams. This included user journeys, data flow mapping, and feature definitions tailored for each role.",
      },
      {
        type: "paragraph",
        text: "This blueprint ensured all stakeholders shared the same understanding and reduced misalignment during development.",
      },
      {
        type: "heading",
        text: "Project Leadership – Collaboration with IT Team",
      },
      {
        type: "paragraph",
        text: "As Project Leader, I coordinated closely with the IT team throughout development to ensure smooth execution and alignment with business goals.",
      },
      {
        type: "list",
        items: [
          "Front-end: Dart with Flutter framework",
          "Back-end: PHP with Laravel framework",
          "Database: MySQL",
        ],
      },
      {
        type: "paragraph",
        text: "I translated business requirements into actionable tasks, monitored progress, and validated the system to ensure it was practical and intuitive for daily use across all roles.",
      },
      {
        type: "heading",
        text: "Key Contributions",
      },
      {
        type: "list",
        items: [
          "Acted as the primary bridge between business teams and IT",
          "Designed the two-database architecture separating ERP integrity from CDM operational flexibility",
          "Defined Serial Number (SN) as the system-wide primary key linking sales, unit condition, and service history",
          "Designed the role-based access privilege model through stakeholder interviews — determining minimum necessary data scope per role",
          "Cleaned and standardized fragmented source data using MySQL prior to system integration",
          "Designed end-to-end application workflow before development began",
          "Led project execution from discovery to delivery",
          "Integrated authentication with the HRD office account system to automate access lifecycle management",
        ],
      },
      {
        type: "heading",
        text: "Business Outcomes",
      },
      {
        type: "list",
        items: [
          "Eliminated data discrepancies across Sales and After-Sales teams by establishing a single source of truth",
          "Removed manual Excel-based reporting and email data transfers between divisions",
          "Improved reporting efficiency from up to 7 days to only a few hours",
          "Enabled faster after-sales response through accessible, near-real-time customer unit data fetchable by Serial Number",
          "Reduced data breach risk through scoped exports — no user can bulk-export data outside their organizational boundary",
          "Automated user access lifecycle via HRD system integration — no manual offboarding required",
          "Laid a scalable data foundation for future analytics and system enhancements",
        ],
      },
    ],
  },

  {
    id: "xrea-tracking-system",
    title: "Xrea – Real-Time Heavy Equipment Tracking System",
    category: "System Integration",
    tags: [
      "Real-Time Tracking",
      "Data Integration",
      "System Strategy",
      "Business Analysis",
      "Product Readiness",
      "Stakeholder Management",
      "Product Launch",
      "Go-To-Market",
      "XCMG",
    ],
    thumbnail: "/public/xrea.png",
    date: "2026",
    summary:
      "Led the product readiness assessment and internal launch of Xrea, a real-time heavy equipment tracking system developed by XCMG in collaboration with PT Gaya Makmur Tractors. Ensured data readiness for customer and after-sales use, drove internal launch execution, and defined the integration roadmap with CDM to unlock scoped, role-based access to live unit data.",
    content: [
      {
        type: "heading",
        text: "Project Background & Context",
      },
      {
        type: "paragraph",
        text: "Xrea is a real-time tracking system developed by XCMG in collaboration with PT Gaya Makmur Tractors (GMT), providing live location data, hour meter readings, and operational status for heavy equipment units across Indonesia — covering both conventional and electric units.",
      },
      {
        type: "paragraph",
        text: "While the system was technically functional, it had not been assessed for operational or commercial readiness. The opportunity was clear: Xrea had the potential to strengthen after-sales service capabilities and open a new revenue stream by offering real-time fleet visibility as a value-added product for customers.",
      },
      {
        type: "heading",
        text: "My Role – Business Analyst & Project Lead",
      },
      {
        type: "paragraph",
        text: "I joined this project at the pre-launch stage with a clear mandate: assess whether Xrea was ready to be deployed to customers and used operationally by the after-sales team, then execute the internal launch. I was responsible for the end-to-end product readiness process — from data assessment to customer onboarding.",
      },
      {
        type: "heading",
        text: "Phase 1 – Product Readiness Assessment & Launch",
      },
      {
        type: "paragraph",
        text: "Before any customer-facing activity, I conducted a structured assessment of the data available within Xrea to determine whether it met the requirements of two key stakeholders: customers who would be using Xrea to monitor their own fleets, and the internal after-sales support team who would use it to improve service response.",
      },
      {
        type: "paragraph",
        text: "The assessment covered three areas: data completeness (does the system show what customers need to see?), after-sales fit (does the data support proactive service and fleet monitoring?), and access model (can the system be safely deployed to individual customers?).",
      },
      {
        type: "paragraph",
        text: "One critical limitation was identified: Xrea currently operates with a single national-scope account — meaning any logged-in user can see all units across Indonesia, regardless of ownership. This is acceptable for internal GMT use but unsuitable for customer-facing deployment at scale. This gap was formally documented and flagged as the key requirement for Phase 2.",
      },
      {
        type: "paragraph",
        text: "With data readiness confirmed, I led the internal launch on June 2, 2026, targeting Sales Operations teams across GMT. I also conducted direct meetings with customers to explain Xrea's capabilities, walk through the system, and set up accounts for customers who required access.",
      },
      {
        type: "list",
        items: [
          "Assessed data completeness against customer and after-sales requirements",
          "Identified and documented the national-scope access limitation as a critical gap",
          "Prepared Sales teams with the knowledge and materials to introduce Xrea to customers",
          "Conducted direct customer meetings for onboarding, system walkthrough, and account setup",
          "Enabled after-sales team to leverage real-time fleet visibility for improved service response",
        ],
      },
      {
        type: "html",
        src: xreaFlow,
        caption:
          "Xrea system overview — Phase 1 readiness & launch, and Phase 2 CDM integration roadmap",
      },
      {
        type: "heading",
        text: "Phase 2 – CDM Integration Roadmap",
      },
      {
        type: "paragraph",
        text: "The next strategic step is integrating Xrea with the CDM (Customer Data Management) system. This integration will enrich CDM — which already holds customer ownership and unit sales data — with live field data from Xrea, giving every role that works with units and customers a significantly more complete picture.",
      },
      {
        type: "paragraph",
        text: "The following data points are planned for integration from Xrea into CDM:",
      },
      {
        type: "list",
        items: [
          "Hour meter (HM) — daily readings and calculated average working hours per unit",
          "Real-time unit location — GPS coordinates updated continuously, enabling accurate interbranch program planning",
          "Fault alarms — unit fault codes surfaced proactively to trigger service before breakdowns occur",
          "Fuel consumption — consumption rate and efficiency monitoring per unit",
          "Operational status — active, idle, or offline per unit at any given time",
        ],
      },
      {
        type: "paragraph",
        text: "Critically, this integration also resolves the access limitation identified in Phase 1. Rather than a single national-scope account, access to Xrea data via CDM will be scoped per user — Sales Engineers see their own customer units, Branch Managers see their branch, Regional Heads see their region. This makes the system safe and practical for both internal use and future commercial scaling.",
      },
      {
        type: "heading",
        text: "Key Contributions",
      },
      {
        type: "list",
        items: [
          "Conducted structured data readiness assessment across customer and after-sales dimensions",
          "Identified and formally documented the national-scope access limitation as a critical product gap",
          "Led internal launch preparation and execution for Sales Operations teams",
          "Conducted direct customer meetings for Xrea onboarding and account setup",
          "Defined the Phase 2 CDM integration roadmap — specifying which data points to integrate and why",
          "Positioned Xrea as both a revenue-generating customer product and an internal operational tool",
        ],
      },
      {
        type: "heading",
        text: "Business Outcomes",
      },
      {
        type: "list",
        items: [
          "Xrea successfully launched internally on June 2, 2026 — Sales teams equipped to introduce it to customers",
          "Customers onboarded with direct account setup and system walkthrough",
          "After-sales team gains real-time fleet visibility to improve service response time",
          "Critical access limitation identified and documented — addressed in Phase 2 CDM integration",
          "Foundation established for future monetization of Xrea as a fleet tracking service",
          "CDM integration roadmap defined — will give all sales and after-sales roles scoped, real-time unit data within their existing workflow",
        ],
      },
    ],
  },

  // {
  //   id: "dashboard-analytics",
  //   title: "Operations Analytics Dashboard",
  //   category: "Data & Reporting",
  //   tags: ["Power BI", "SQL", "KPI Design", "Data Visualization"],
  //   thumbnail: "",
  //   date: "2023",
  //   summary:
  //     "Designed and deployed a real-time operations dashboard in Power BI that consolidated data from 5 source systems, used by 50+ managers daily.",
  //   content: [
  //     {
  //       type: "heading",
  //       text: "Context",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "Management was making decisions based on weekly PDF reports that were always outdated. I proposed and delivered a real-time Power BI dashboard solution.",
  //     },
  //     {
  //       type: "heading",
  //       text: "Process",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "Gathered KPI requirements from 8 department heads. Wrote SQL queries to extract and transform data from operational databases. Designed the dashboard layout in Figma before building in Power BI.",
  //     },
  //     {
  //       type: "image",
  //       src: "",
  //       caption: "Dashboard wireframe and final output",
  //     },
  //     {
  //       type: "heading",
  //       text: "Results",
  //     },
  //     {
  //       type: "list",
  //       items: [
  //         "Report generation time reduced from 2 days to real-time",
  //         "Used by 50+ managers across departments",
  //         "Identified 3 operational bottlenecks within first month",
  //       ],
  //     },
  //   ],
  // },

  {
    id: "sop-ik-data-portal",
    title: "SOP/IK Management & Secure Data Portal System",
    category: "Data Management System",
    tags: [
      "Laravel",
      "PHP",
      "MySQL",
      "Business Process Optimization",
      "Stakeholder Management",
      "Data Governance",
      "Role-Based Access Control",
      "AI Integration",
      "NotebookLM",
    ],
    thumbnail: "/public/logInDataPortal.png",
    date: "2026",
    summary:
      "Led a company-wide SOP/IK transformation and built a secure, role-based data portal for 500+ employees. Standardized processes, eliminated uncontrolled document distribution, and established a scalable foundation for secure internal data management.",
    content: [
      {
        type: "heading",
        text: "Project Background & Business Problem",
      },
      {
        type: "paragraph",
        text: "As PT Gaya Makmur Tractors scaled to over 500 employees across multiple branches, operational processes became increasingly inconsistent. SOPs and IKs (Work Instructions) were either outdated, incomplete, or distributed informally through email and local storage.",
      },
      {
        type: "paragraph",
        text: "This created several risks: inconsistent execution across branches, lack of clarity in roles and responsibilities, and high exposure to confidential document leaks due to uncontrolled sharing.",
      },
      {
        type: "paragraph",
        text: "The company needed not only to standardize its operational documentation, but also to ensure that sensitive internal materials were securely accessible only to the right people — based on their actual role within the organization.",
      },
      {
        type: "heading",
        text: "My Role – Business Analyst & Project Lead",
      },
      {
        type: "paragraph",
        text: "I led this initiative end-to-end as both Business Analyst and Project Lead, coordinating across multiple divisions to deliver a structured, scalable solution.",
      },
      {
        type: "paragraph",
        text: "The project was executed through three core workstreams: organizational data restructuring, SOP/IK standardization, and secure system development.",
      },
      {
        type: "heading",
        text: "Core Workstreams",
      },
      {
        type: "list",
        items: [
          "Restructured employee master data (Department, Division, Level, Job Position, Branch Class) to enable precise access control",
          "Refined and created SOPs/IKs across divisions, including visual IKs to improve usability",
          "Developed a secure Data Portal (Laravel + MySQL) as a centralized, controlled document repository",
        ],
      },
      {
        type: "heading",
        text: "Phase 1 – SOP/IK Standardization (Branch Operations)",
      },
      {
        type: "paragraph",
        text: "Developed and refined SOPs/IKs for Branch Admin operations, including unit purchase flows and sales incentive schemes. Worked closely with Branch Managers to ensure each document reflected real operational conditions and edge cases.",
      },
      {
        type: "heading",
        text: "Phase 2 – Visual IK Development with AI",
      },
      {
        type: "paragraph",
        text: "To improve comprehension, I leveraged Google's NotebookLM to convert text-heavy IKs into visual formats. Each output was reviewed and validated with non-expert users to ensure clarity and usability in real scenarios.",
      },
      {
        type: "heading",
        text: "Phase 3 – Secure Data Portal Development",
      },
      {
        type: "image",
        src: "/dataPortalIK.png",
        caption: "IK in Portal Apps",
      },
      {
        type: "paragraph",
        text: "Built a centralized Data Portal using Laravel (PHP) and MySQL, designed to serve as a single access point for all SOPs, IKs, and departmental reference materials.",
      },
      {
        type: "paragraph",
        text: "A key design decision was that access is not just role-based — it is identity-based. Upon login, the system checks four attributes simultaneously: Division, Department, Level, and Job Position. The combination of all four determines exactly which documents each employee can see, ensuring no over-sharing and no under-delivery.",
      },
      {
        type: "list",
        items: [
          "SOP/IK access scoped per Division, Department, Level, and Job Position — employees see only what is relevant to their role",
          "Marketing, Sales, Product Managers, and BOD additionally have access to Sales Kit and Marketing Tools (brochures, presentation materials, product info)",
          "SOP/IK documents are view-only for all employees — no download, no print, to prevent leakage",
          "Sales Kit and Marketing Tools are downloadable for authorized roles — enabling field teams to work offline",
          "Admin (HO) has full document management rights: upload, edit, delete, and manage role access",
          "Centralized distribution replaces all informal email and local file sharing",
          "Foundation for future user activity tracking and audit trails",
        ],
      },
      {
        type: "html",
        src: sopDataPortalFlow,
        caption:
          "Data portal access flow — from login to role-based document access per employee identity",
      },
      {
        type: "heading",
        text: "Phase 4 – Organizational Structure Alignment",
      },
      {
        type: "paragraph",
        text: "The access control model above only works if the underlying organizational data is clean and unambiguous. I led the restructuring of employee master data to remove inconsistencies in roles and responsibilities across the company.",
      },
      {
        type: "paragraph",
        text: "Defined clear mappings across Department, Division, Level, Job Position, and Branch Class. Branch classification (Grade) was established through cross-functional alignment and formally approved by the Board of Directors — ensuring company-wide adoption and consistency.",
      },
      {
        type: "heading",
        text: "Phase 5 – Controlled Distribution & Adoption",
      },
      {
        type: "paragraph",
        text: "All SOPs and IKs were distributed exclusively through the Data Portal, eliminating informal sharing channels such as email and local files. Employees now have a single, reliable place to find the documents relevant to their role — removing the risk of working from outdated or incorrect versions.",
      },
      {
        type: "paragraph",
        text: "For HO teams, this also significantly simplified distribution: instead of manually sending documents to the right people, the portal handles targeting automatically based on each employee's identity attributes.",
      },
      {
        type: "heading",
        text: "Key Contributions",
      },
      {
        type: "list",
        items: [
          "Led cross-division alignment for a company-wide transformation initiative",
          "Redesigned employee master data structure to enable precise, four-attribute role-based access control",
          "Designed the document access model — determining which document types each role can view, download, or manage",
          "Integrated AI (NotebookLM) to accelerate and improve visual IK creation",
          "Designed and delivered a secure Data Portal using Laravel and MySQL",
          "Implemented differentiated document control: view-only for SOP/IK, downloadable for Sales Kit (authorized roles only)",
          "Established foundation for future audit trails and user behavior tracking",
          "Facilitated Board-level decision-making for organizational classification",
        ],
      },
      {
        type: "heading",
        text: "Business Outcomes",
      },
      {
        type: "list",
        items: [
          "Standardized operational processes across 500+ employees and multiple branches",
          "Eliminated uncontrolled SOP/IK distribution via email and local storage",
          "Significantly reduced risk of confidential document leakage through view-only, scoped access",
          "Enabled secure, downloadable access to Sales Kit and Marketing Tools for field teams",
          "Improved SOP/IK usability and comprehension through visual formats",
          "Removed role ambiguity with a clearly defined, BOD-approved organizational structure",
          "Simplified HO document distribution — targeting is automatic based on employee identity",
          "Established a scalable and secure foundation for future internal data systems",
        ],
      },
    ],
  },

  {
    id: "kpi-reporting-system",
    title: "KPI Reporting & Tracking System",
    category: "Data & Reporting",
    tags: [
      "Google Sheets",
      "Google Apps Script",
      "KPI Dashboard",
      "Data Integration",
      "Stakeholder Management",
      "Process Automation",
      "Business Analysis",
    ],
    thumbnail: "/public/kpiForm.png",
    date: "2024",
    summary:
      "Designed and built a scalable KPI reporting system using Google Sheets and Apps Script, enabling Branch Managers, Regional Heads, and Product Managers to access real-time performance data anytime, anywhere — without disrupting cross-divisional data input workflows.",
    content: [
      {
        type: "heading",
        text: "Project Background & Business Problem",
      },
      {
        type: "paragraph",
        text: "The company needed a standardized KPI reporting system that could be accessed by Branch Managers, Regional Heads, and Product Managers across all branches — in real-time, from any device. The challenge was twofold: data had to be contributed by multiple divisions simultaneously without one team's input process interfering with another's, and each leader needed a dedicated view scoped to their own organizational boundary.",
      },
      {
        type: "paragraph",
        text: "At the same time, the IT team was fully occupied with other priorities and could not take on a new development project. KPI standardization, however, was urgent — delays meant leadership continued operating without a shared performance baseline across divisions.",
      },
      {
        type: "heading",
        text: "Why Google Sheets — a Deliberate Constraint",
      },
      {
        type: "paragraph",
        text: "Rather than waiting for IT capacity, I chose to build the entire system on Google Workspace — the infrastructure the company already had. This decision was not a compromise; it was a calculated trade-off. Google Sheets and Apps Script allowed me to design, build, and deploy a fully functional multi-division KPI system without writing a single line of backend code or involving the IT team.",
      },
      {
        type: "paragraph",
        text: "The result was a system that went from concept to live deployment in a fraction of the time a traditional software project would require — while being immediately accessible on mobile and desktop for all 15+ leaders, with no training or installation required.",
      },
      {
        type: "heading",
        text: "My Role – Business Analyst & System Designer",
      },
      {
        type: "paragraph",
        text: "I acted as both the Business Analyst and the hands-on system designer. I mapped KPI requirements across all divisions, designed the data architecture, built the spreadsheet system, and configured the Apps Script automations that keep everything synchronized.",
      },
      {
        type: "heading",
        text: "System Architecture",
      },
      {
        type: "paragraph",
        text: "The system is structured in three layers. Each division has its own isolated input spreadsheet — meaning Admin Service, Admin Spare-Part, Finance, and Marketing Support each work in their own file with no visibility into others' data. This eliminates workflow collisions and prevents cross-divisional data confusion.",
      },
      {
        type: "paragraph",
        text: "Marketing Support holds a special role in the input layer: in addition to their own divisional KPI data, they are responsible for inputting unit sales data via a structured form built with Apps Script. The form uses dropdown selections for branch, sales engineer, and serial number — significantly reducing typos and input errors that were common with free-text entry.",
      },
      {
        type: "paragraph",
        text: "Google Apps Script then pulls data from all division spreadsheets and populates individual KPI dashboards for each leader. Each dashboard is scoped to the leader's organizational boundary — a Branch Manager sees their branch only, a Regional Head sees all branches in their region, and a Product Manager sees KPI data cut by product line across all branches.",
      },
      {
        type: "html",
        src: kpiReportingFlow,
        caption:
          "KPI system data flow — from isolated division inputs through Apps Script to individual leader dashboards",
      },
      {
        type: "heading",
        text: "Key Features Delivered",
      },
      {
        type: "list",
        items: [
          "Isolated input spreadsheets per division — no workflow collisions between teams",
          "Form-based unit sales input for Marketing Support via Apps Script — dropdown selectors for branch, sales engineer, and SN to eliminate typos",
          "Individual KPI dashboards for every Branch Manager, Regional Head, and Product Manager — each scoped to their own boundary",
          "Real-time data synchronization across all dashboards via Apps Script",
          "Mobile and desktop accessible — no installation, no training required",
          "Built entirely on existing Google Workspace infrastructure — zero additional software cost",
        ],
      },
      {
        type: "heading",
        text: "Business Outcomes",
      },
      {
        type: "list",
        items: [
          "Eliminated data entry conflicts between divisions through isolated input architecture",
          "Reduced reporting turnaround from days of manual compilation to real-time automated updates",
          "Empowered 15+ leaders with self-serve KPI visibility scoped to their own organizational boundary",
          "Delivered a production-ready system with zero IT involvement and zero additional infrastructure cost",
          "Standardized KPI tracking across all divisions and branches — enabling consistent, data-driven decision making",
          "Reduced unit sales input errors through structured form with dropdown validation",
        ],
      },
    ],
  },
];

// Category colors
export const categoryColors = {
  "Project Management": { bg: "#E8F0E8", text: "#3A6338" },
  "Business Analysis": { bg: "#F0E8D8", text: "#8B5E2A" },
  "Data & Reporting": { bg: "#E8EAF0", text: "#3A4A7A" },
  Strategy: { bg: "#F0E8EC", text: "#7A3A5A" },
  "Data Management System": { bg: "#E8F0EC", text: "#3A7A5E" },
  "System Integration": { bg: "#F0E8F0", text: "#7A3A7A" },
};
