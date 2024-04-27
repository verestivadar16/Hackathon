import { FormControl } from '@angular/forms';

export class MultiSelectFormControl extends FormControl {
  override setValue(value: any, options: any) {
    if (Array.isArray(value)) {
      super.setValue(value, options);
    } else {
      super.setValue([value], options);
    }
  }
}
