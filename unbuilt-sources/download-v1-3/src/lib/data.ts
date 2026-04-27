/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Document {
  id: string;
  label: 'DATASHEET' | 'MANUAL' | 'CATALOGUE' | 'CERTIFICATE' | 'SOFTWARE' | 'FIRMWARE' | 'SAFETY';
  title: string;
  description: string;
  category: string;
  voltage?: string;
  capacity?: string;
  tags: string[];
  fileType: string;
  fileSize: string;
  updatedAt: string;
  version: string;
  featured?: boolean;
}

export const CATEGORIES = [
  "Forklift Battery Systems",
  "Electric Vehicle Battery Systems",
  "AGV / Robot Battery Systems",
  "Energy Storage Systems",
  "Charging Systems",
  "BMS & Software",
  "OEM / ODM Solutions"
];

export const DOCUMENT_TYPES = [
  "Catalogue",
  "Datasheet",
  "Manual",
  "Installation Guide",
  "BMS Software",
  "Firmware",
  "Certificate",
  "Safety Data Sheet",
  "Test Report"
];

export const VOLTAGES = ["24V", "36V", "48V", "72V", "80V", "96V", "Custom"];

export const DOCUMENTS: Document[] = [
  {
    id: 'd1',
    label: 'CATALOGUE',
    title: 'PKG Battery Product Catalogue 2026',
    description: 'A complete overview of PKG Battery industrial lithium product lines, applications and core technical advantages.',
    category: 'General',
    tags: ['Overview', '2026', 'Corporate'],
    fileType: 'PDF',
    fileSize: '12.4 MB',
    updatedAt: 'Apr 2026',
    version: '1.0',
    featured: true
  },
  {
    id: 'd2',
    label: 'DATASHEET',
    title: '48V 200Ah Lithium Forklift Battery Datasheet',
    description: 'Electrical specifications, discharge performance, charging parameters, BMS communication details and mechanical dimensions.',
    category: 'Forklift Battery Systems',
    voltage: '48V',
    capacity: '200Ah',
    tags: ['Forklift', '48V', 'CAN Communication'],
    fileType: 'PDF',
    fileSize: '2.8 MB',
    updatedAt: 'Apr 2026',
    version: '1.4',
    featured: true
  },
  {
    id: 'd3',
    label: 'MANUAL',
    title: 'AGV Battery Installation & Operation Manual',
    description: 'Installation workflow, wiring reference, safety checks, operating procedures and troubleshooting codes for AGV systems.',
    category: 'AGV / Robot Battery Systems',
    tags: ['AGV', 'Installation', 'Operation'],
    fileType: 'PDF',
    fileSize: '3.6 MB',
    updatedAt: 'Mar 2026',
    version: '2.1',
    featured: true
  },
  {
    id: 'd4',
    label: 'SOFTWARE',
    title: 'PKG BMS Configurator v3.2',
    description: 'Configuration software for monitoring cell voltage, temperature, current limits and protection parameters.',
    category: 'BMS & Software',
    tags: ['BMS', 'Software', 'Windows', 'CAN'],
    fileType: 'ZIP',
    fileSize: '28 MB',
    updatedAt: 'Feb 2026',
    version: '3.2',
    featured: true
  },
  {
    id: 'd5',
    label: 'CERTIFICATE',
    title: 'UN38.3 Lithium Battery Transport Certificate',
    description: 'Official test summary and compliance documentation for safe lithium battery transportation.',
    category: 'General',
    tags: ['Transport', 'Safety', 'UN38.3'],
    fileType: 'PDF',
    fileSize: '1.2 MB',
    updatedAt: 'Jan 2026',
    version: '2026 Rev'
  },
  {
    id: 'd6',
    label: 'DATASHEET',
    title: '80V 400Ah Heavy Duty Forklift Battery',
    description: 'Technical specs for high-voltage heavy material handling equipment with fast charge capability.',
    category: 'Forklift Battery Systems',
    voltage: '80V',
    capacity: '400Ah',
    tags: ['Forklift', '80V', 'Heavy Duty'],
    fileType: 'PDF',
    fileSize: '3.1 MB',
    updatedAt: 'Mar 2026',
    version: '1.2'
  },
  {
    id: 'd7',
    label: 'FIRMWARE',
    title: 'Forklift Series Firmware v2.0',
    description: 'Improved charger communication, thermal protection and error-code reporting.',
    category: 'BMS & Software',
    tags: ['Forklift', 'Firmware', 'Update'],
    fileType: 'ZIP',
    fileSize: '5.4 MB',
    updatedAt: 'Apr 2026',
    version: '2.0'
  }
];

export const FAQS = [
  {
    question: "Do I need an account to download PKG Battery documents?",
    answer: "No. Most technical documents are available for direct download without login. Some project-specific documents may require contacting PKG technical support."
  },
  {
    question: "How do I know which datasheet matches my product?",
    answer: "Use the product type, voltage, capacity and model code filters. If your product model is not listed, contact support with the serial number or project reference."
  },
  {
    question: "Should I install firmware myself?",
    answer: "Firmware should only be installed after verifying product model, hardware revision and release notes. If unsure, contact PKG technical support before proceeding."
  }
];
