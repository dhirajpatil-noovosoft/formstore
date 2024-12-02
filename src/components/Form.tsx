import React, {Component} from "react"
import { observer } from "mobx-react";
import InputName from "../inputComponents/InputName";
import InputAddress from "../inputComponents/InputAddress";
import InputCompany from "../inputComponents/InputCompany";
import FormStore from "../stores/FormStore";
interface PropTypes{
    FormStore : any,
    req?:Array<string>
}
@observer
class Form extends Component<PropTypes>{
    formStore:any = undefined;
    constructor(props:PropTypes) {
        super(props);
        this.formStore = this.props.FormStore;
        this.reset = this.reset.bind(this)
    }

    componentDidMount() {
        this.formStore = this.props.FormStore;
    }
    componentDidUpdate(prevProps: Readonly<PropTypes>, prevState: Readonly<{}>, snapshot?: any) {
        this.formStore = this.props.FormStore;
    }
    onSubmitForm = (event: React.FormEvent)=>
    {
        event.preventDefault();
        for(let key in this.formStore.form)
        {
            if(this.formStore.form[key] === "")
                return
        }
        this.formStore.save();
    }
    reset(){
        this.formStore.reset();
    }
    render() {
        this.formStore = FormStore
        return <div>
            <form onSubmit={this.onSubmitForm}>
            <InputName req={this.props.req !== undefined && this.props.req?.includes("name")}/>
            <InputAddress req={this.props.req !== undefined && this.props.req?.includes("address")}/>
            <InputCompany req={this.props.req !== undefined && this.props.req?.includes("company")}/>
            <input type="submit"  value="submit" />
            <button onClick={this.reset}>reset </button>
            </form>
        </div>
    }
}

export default Form;