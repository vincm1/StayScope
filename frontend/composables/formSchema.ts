// Define the interface for each form field
interface FormField {
    type: string | Function; // e.g., String, Number, Boolean
    required: boolean;
    label: string;
    placeholder: string;
    as?: string; // Optional, e.g., 'InputText', 'Dropdown'
    options?: Array<{ label: string; value: any }>; // For Dropdowns or Selects
  }
  
  // Define the form schema type
  type FormSchema = Record<string, FormField>;
  
  // Create the form schema
  export const formSchema: FormSchema = {
    firstname: {
      type: String,
      required: true,
      label: 'First Name',
      placeholder: 'Enter your firstname',
      as: 'InputText'
    },
    lastname: {
      type: String,
      required: true,
      label: 'Last Name',
      placeholder: 'Enter your last name',
      as: 'InputText'
    },
    company: {
      type: String,
      required: true,
      label: 'Company',
      placeholder: 'Enter your company name',
      as: 'InputText'
    },
    email: {
      type: String,
      required: true,
      label: 'Email',
      placeholder: 'Enter your email',
      as: 'InputText'
    }
  };

  
  