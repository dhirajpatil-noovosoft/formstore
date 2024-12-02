import {observable, action, makeObservable} from "mobx";

interface formType {
    [key: string] : string | number | undefined;
}

class formStore{
    form:formType = {
        name:"",
        address:"",
        company:""
    }
    disable : boolean = false
    savedForms:formType[] = []
    constructor() {
        makeObservable(this, {
            form:observable,
            updateFormField:action,
            save:action,
            reset:action,
            disable:observable
        })
        this.save = this.save.bind(this)
        this.reset = this.reset.bind(this)
    }
    updateFormField(field : keyof formType, value : number | string | undefined){
        this.form[field] = value
        console.log(this.form)
    }
    save(){
        this.savedForms.push(this.form);
        console.log(this.form)
        this.disable = true;
    }
    reset(){

        Object.keys(this.form).map((key)=>
        {
            return this.form[key] = ""
        })
        console.log(this.form)
    }
}
const FormStore = new formStore();
export default FormStore;