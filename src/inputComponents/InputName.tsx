import React, {Component} from "react";
import formStore from "../stores/FormStore";
import {observer} from "mobx-react";
interface inputTypes{
    Name:string
}
@observer
class InputName extends Component<{}, inputTypes> {
    state = {
        Name : ""
    }
    FormStore= formStore;
    constructor(props:any) {
        super(props);
        this.handleChangeInputName = this.handleChangeInputName.bind(this)
    }
    handleChangeInputName(event: React.ChangeEvent<HTMLInputElement>){
        this.setState(
            {
                Name:event.target.value
            }
        );
        this.FormStore.updateFormField("name", this.state.Name);
    }
    render() {
        const {Name} = this.state
        return <div style={{display:"flex"}}>
            <p>Enter Your Name : </p>
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