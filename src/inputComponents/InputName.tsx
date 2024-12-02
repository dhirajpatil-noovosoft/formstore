import React, {Component} from "react";
import formStore from "../stores/FormStore";
import {observer} from "mobx-react";
interface Props{
    req:boolean
}
interface structure{
    Name:string,
    req:boolean
}
@observer
class InputName extends Component<Props, structure> {
    state:structure = {
        Name : "",
        req:false
    }
    FormStore:any= formStore;
    constructor(props:any) {
        super(props);
        this.handleChangeInputName = this.handleChangeInputName.bind(this)
    }
    handleChangeInputName(event: React.ChangeEvent<HTMLInputElement>){
        this.FormStore.updateFormField("name", event.target.value);
        this.setState(
            {
                Name:this.FormStore.name
            }
        );

    }
    render() {
        const {Name} = this.state
        return <div className={(this.FormStore.disable)?"disable" : ""} style={{display:"flex"}}>
            <p>Enter Your Name : <>{(this.props.req)?"*" : "" }</> </p>
            <input
            type="text"
            value={Name}
            onChange={this.handleChangeInputName}
            placeholder="Emilly"
            style={{padding: "8px", marginBottom: "20px"}}
        /></div>
    }
}

export default InputName