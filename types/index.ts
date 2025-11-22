export interface NavItem {
  name: string;
  href: string;
  children?: NavItem[];
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NewsletterFormData {
  email: string;
}
