import React, {Component} from "react";
import formStore from "../stores/FormStore"
import {observer} from "mobx-react";
interface inputTypes{
    Address:string
}
@observer
class InputAddress extends Component<{}, inputTypes> {
    state = {
        Address : ""
    }
    FormStore = formStore
    constructor(props:any) {
        super(props);
        this.FormStore = formStore
        this.handleChangeInputAddress = this.handleChangeInputAddress.bind(this)

    }
    handleChangeInputAddress(event: React.ChangeEvent<HTMLInputElement>){
        this.setState(
            {
                Address:event.target.value
            }
        )
        this.FormStore.updateFormField("address", this.state.Address);
    }
    render() {
        const {Address} = this.state
        return <div style = {{display : "flex"}}>
            <p>Enter Your Address : </p>
            <input
                type="text"
                value={Address}
                onChange={this.handleChangeInputAddress}
                placeholder="home ..."
                style={{padding: "8px", marginBottom: "20px"}}
            /></div>
    }
}

export default InputAddress