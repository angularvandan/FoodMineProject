import { AbstractControl } from "@angular/forms"

export const passwordMatchValidator=(passswordControlName:string,confirmPasswordControlName:string)=>{

    const validator=(form:AbstractControl)=>{
        const passswordControl=form.get(passswordControlName);
        const confirmPasswordControl=form.get(confirmPasswordControlName);
        if(!passswordControl||!confirmPasswordControl)return;
        if(passswordControl.value!==confirmPasswordControl.value){
            confirmPasswordControl.setErrors({
                notMatch:true
            });
        }
        else{//here we need to remove generated error
            const errors=confirmPasswordControl.errors;
            if(!errors)return;
            delete errors.notMatch;
            confirmPasswordControl.setErrors(errors);
        }
    }
    return validator;

}