import React, {Component} from "react";
import formStore from "../stores/FormStore";
import {observer} from "mobx-react";
interface Props{
    req:boolean
}
interface structure{
    Company:string
}
@observer
class InputCompany extends Component<Props, structure> {
    state:structure = {
        Company : ""
    }
    FormStore = formStore;
    companyArray = [
        {
            id:1,
            name:"amazon"
        },
        {
            id:2,
            name:"google"
        }
    ]
    constructor(props:any) {
        super(props);
        this.handleChangeInputCompany = this.handleChangeInputCompany.bind(this)
        this.FormStore = formStore
    }
    handleChangeInputCompany(event: React.ChangeEvent<HTMLSelectElement>){
        this.setState(
            {
                Company:event.target.value
            }
        )
        this.FormStore.updateFormField("company", this.state.Company);
    }
    render() {
        const {Company} = this.state
        return<div className={(this.FormStore.disable)?"disable" : ""} style={{display:"flex"}}>
            <p>please select your company name : <>{(this.props.req)?"*" : "" } </> </p>
            <select
                value={Company}
                onChange={this.handleChangeInputCompany}
                style={{padding: "8px", marginBottom: "20px", marginLeft: "10px", background:"white", color:"red"}}
            >
                <option value="" style={{padding: "8px", marginBottom: "20px", marginLeft: "10px", background:"white"}}>Company Name</option>
                {
                    this.companyArray.map((item)=>
                    <option key={item.id} value={item.name} style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
                        {item.name}
                    </option>
                    )
                }
            </select>
        </div>
    }
}

export default InputCompany