/** Possible appearance styles for the form field. */

import { MatFormFieldAppearance } from "@angular/material/form-field";

export const environment = {
  crawlerApi: "https://localhost:7281/api",
  helpdevApi: "",
  production: false,
  theme: {
    color: '',
    appearanceFormField: '' as MatFormFieldAppearance
  }
};
