export const projects = [
  {
    id: 'rmoda',
    slug: 'rmoda',
    title: 'RMODA Business Process & Internal Control Diagnostic',
    client: 'PT BP Consulting Group — Client Engagement',
    year: '2026',
    tags: ['Business Process', 'Internal Control', 'RACI', 'Risk Assessment', 'KPI Design'],
    summary:
      'Full-lifecycle organizational diagnostic for an automotive coating and PPF studio preparing for regional expansion — from process mapping through commissioner-level findings and recommendations.',
    context:
      'RMODA Studio is an automotive coating and paint protection film (PPF) business planning expansion to Batam Kota. As the business scaled, ownership identified gaps in governance, process consistency, and financial control that needed to be addressed before expansion.',
    problem:
      'The business lacked formalized processes, a clear governance structure, and consistent financial controls. Key decisions were concentrated at the President Director level, creating bottlenecks. There was no structured KPI framework, and financial data was non-integrated — making management reporting difficult.',
    approach: [
      { step: 'Business Process Mapping', desc: 'Mapped the end-to-end process from customer entry through vehicle handover, covering SA Booking, SA Regular, Department Lead, Technician, Admin, and back-office functions.' },
      { step: 'KPI Design', desc: 'Derived role-specific KPIs from the process map — including rework rate, SA response time, lead conversion rate, and unit throughput.' },
      { step: 'Job Description Development', desc: 'Developed job descriptions for Commissioner, President Director, Commercial & Marketing, Service Advisor, and HRD Supervisor — covering role overview, goals, responsibilities, and authorities.' },
      { step: 'Shareholder & Management Analysis', desc: 'Mapped ownership structure, identified commissioners, and traced the functional hierarchy from shareholders through operational roles.' },
      { step: 'RACI Matrix', desc: 'Developed a RACI Matrix covering 33 activities across 7 business categories and 12 defined roles.' },
      { step: 'Risk Identification', desc: 'Applied a structured What / So What / Now What framework to identify operational and governance risks.' },
      { step: 'Control Design', desc: 'Designed Finance SOP controls covering reimbursement, vendor payment, cash advance, approval thresholds, payment schedules, and transfer evidence distribution.' },
      { step: 'Walkthroughs & Control Testing', desc: 'Performed walkthroughs with Finance and the President Director. Validated approval flows, authority limits, and reporting schedules. Assessed whether designed controls could be consistently executed.' },
      { step: 'Transaction Sampling', desc: 'Sampled expenditure and reimbursement transactions to verify alignment with SOP requirements.' },
      { step: 'Working Papers', desc: 'Prepared documentation including RACI Matrix, scope documentation, process outputs, SOP documentation, and process flow diagrams.' },
    ],
    findings: [
      { title: 'SA Bottleneck', desc: 'Service Advisors lacked structured response time targets and lead tracking, creating customer experience inconsistency.' },
      { title: 'Decision Concentration', desc: 'Excessive approval authority at the President Director level slowed operational decisions and created single-point-of-failure risk.' },
      { title: 'Mid-Process QC Gap', desc: 'No structured quality checkpoint existed between job-in-progress and vehicle handover.' },
      { title: 'Non-Integrated Financial Data', desc: 'Financial records were maintained separately across functions, making reconciliation and reporting unreliable.' },
      { title: 'Scalability Risk', desc: 'Existing processes and governance structures were not designed to support multi-site operations ahead of Batam expansion.' },
    ],
    rootCauses: [
      'Key-person dependency — critical decisions and knowledge concentrated in one role.',
      'Lack of standardized processes — operations ran on informal practices without documented SOPs.',
      'Fragmented data and reporting — no integrated system connecting financial and operational data.',
    ],
    recommendations: [
      'Process and SOP standardization — formalize customer handling, job execution, and QC processes.',
      'Distribution of decision authority — redesign approval thresholds to reduce bottleneck at President Director level.',
      'Data and reporting integration — consolidate financial and operational data into a unified reporting framework.',
    ],
    deliverables: [
      'RACI Matrix (33 activities × 12 roles)',
      'Business Process Flow Diagrams',
      'Role-Based KPI Framework',
      'Job Descriptions (5 roles)',
      'Finance SOP & Control Design',
      'Working Papers',
      'Findings & Recommendations Report (Commissioner-level)',
      'Action Plan with PIC and Timeline',
    ],
    outcome:
      'Findings and recommendations were prepared for presentation to the Commissioners as part of the final diagnostic report, providing a structured foundation for governance improvement ahead of regional expansion.',
  },
  {
    id: 'dealer-analytics',
    slug: 'dealer-analytics',
    title: 'Dealer Performance Analytics & Audit Program',
    client: 'PT Imora Motor / MD Honda Jakarta Center',
    year: '2019–2026',
    tags: ['Operational Audit', 'KPI Analysis', 'Data Analysis', 'PDCA', 'Root Cause Analysis'],
    summary:
      'Systematic operational audit and performance analytics program covering 49 dealer sites — combining on-site validation, KPI analysis, and management reporting to drive measurable performance improvement.',
    context:
      'As Field Operation Staff in the Aftersales division, the scope covered a network of 49 Honda dealer sites across the Jakarta area. The role required both field-based audit execution and back-office analytics to translate raw performance data into management decisions.',
    problem:
      'Dealer performance varied significantly across the network. Without consistent audit methodology, structured KPI tracking, and reliable reporting, it was difficult to identify root causes of underperformance or allocate improvement resources effectively.',
    approach: [
      { step: 'Operational Audit', desc: 'Conducted on-site audits at all 49 dealer sites twice annually. Assessed workflow compliance, facility standards, and manpower productivity.' },
      { step: 'Performance Analysis', desc: 'Analyzed aftersales and body & paint performance data across productivity, customer satisfaction, revenue, and KPI achievement dimensions.' },
      { step: 'Root-Cause Analysis', desc: 'Performed root-cause analysis on underperforming sites, identifying structural, process, and people factors.' },
      { step: 'PDCA Methodology', desc: 'Applied Plan-Do-Check-Act cycles to structure improvement initiatives and track progress across audit periods.' },
      { step: 'Reporting', desc: 'Prepared daily, weekly, and monthly performance reports. Presented analysis and recommendations to the Board of Directors.' },
    ],
    findings: [
      { title: 'Data Accuracy', desc: 'Improved data accuracy and operational alignment by approximately 40% through structured audit and validation processes.' },
      { title: 'KPI Improvement', desc: 'Targeted intervention supported 5–15% KPI improvement in underperforming dealer sites.' },
    ],
    deliverables: [
      'Bi-annual Audit Reports (49 dealer sites)',
      'Performance Dashboards (Power BI, Looker Studio)',
      'Automated Reporting System (Excel VBA)',
      'Board of Directors Presentations',
      'Improvement Recommendations by Site',
    ],
    outcome:
      'Measurable improvement in dealer KPI achievement, data reliability, and reporting efficiency. Automation reduced manual reporting effort by approximately 60% and reporting time by over 90%.',
  },
  {
    id: 'dashboard',
    slug: 'dashboard',
    title: 'Integrated Performance Dashboard',
    client: 'PT Imora Motor',
    year: '2022–2024',
    tags: ['Power BI', 'Looker Studio', 'Data Visualization', 'KPI Monitoring'],
    summary:
      'Consolidated aftersales KPI monitoring dashboard spanning 49 dealer sites — enabling near-real-time performance visibility and replacing manual report compilation.',
    context:
      'Performance data from 49 dealer sites was being compiled manually across multiple spreadsheets, making timely analysis and management decisions difficult.',
    problem:
      'Manual data consolidation created reporting delays, introduced data quality risks, and left management without consistent visibility into network-wide performance.',
    approach: [
      { step: 'Data Architecture', desc: 'Defined data sources, KPI taxonomy, and update cadence across aftersales and body & paint dimensions.' },
      { step: 'Dashboard Development', desc: 'Built dashboards in Power BI and Looker Studio, consolidating KPI data from all 49 dealer sites.' },
      { step: 'Validation', desc: 'Validated dashboard outputs against source data across multiple reporting periods.' },
    ],
    deliverables: [
      'Power BI Performance Dashboard',
      'Looker Studio Monitoring Views',
      'Data Documentation',
    ],
    outcome:
      'Reduced manual reporting effort by approximately 60%. Enabled consistent KPI monitoring and faster management response to performance signals.',
  },
  {
    id: 'automation',
    slug: 'automation',
    title: 'Automated Reporting System',
    client: 'PT Imora Motor',
    year: '2020–2022',
    tags: ['Excel', 'VBA', 'Power Query', 'Automation'],
    summary:
      'Excel-based reporting automation using VBA and Power Query — reducing periodic reporting time by over 90% and freeing capacity for analysis.',
    context:
      'Periodic reporting required significant manual effort — data gathering, formatting, and compilation took a large share of available working time.',
    problem:
      'Manual reporting cycles limited time available for analysis and strategic work, and introduced inconsistency in report structure across periods.',
    approach: [
      { step: 'Process Mapping', desc: 'Mapped the existing manual reporting workflow to identify automation opportunities.' },
      { step: 'VBA Automation', desc: 'Developed VBA macros to automate data extraction, transformation, and report generation.' },
      { step: 'Power Query Integration', desc: 'Used Power Query for data connection and transformation steps that required maintainability.' },
      { step: 'Testing & Handover', desc: 'Validated outputs against manual reports and documented the system for ongoing use.' },
    ],
    deliverables: [
      'Automated Excel Reporting Workbook (VBA)',
      'Power Query Data Model',
      'Documentation & User Guide',
    ],
    outcome:
      'Reporting time reduced by over 90%. Enabled the team to focus on analysis and operational improvement rather than report compilation.',
  },
];
