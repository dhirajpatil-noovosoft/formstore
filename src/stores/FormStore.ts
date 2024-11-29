import {observable, action, makeObservable} from "mobx";

interface formType {
    [key: string] : string | number;
}

class formStore{
    form:formType = {
        name:"",
        address:"",
        company:""

    }
    constructor() {
        makeObservable(this, {
            form:observable,
            updateFormField:action
        })
    }
    updateFormField(field : keyof formType, value : number | string){
        this.form[field] = value
        console.log(this.form)
    }
}
const FormStore = new formStore();
export default FormStore;