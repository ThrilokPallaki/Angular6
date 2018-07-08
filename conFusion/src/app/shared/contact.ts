export class ContactForm {
  firstName: string;
  lastName: string;
  telnumber: number;
  email: string;
  contactType: string;
  agree: boolean;
  message: string;
}

export const CONTACTTYPE: string[] = ['None', 'Tel', 'Email'];
