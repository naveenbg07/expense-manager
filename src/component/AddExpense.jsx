import React, {Component} from 'react'
import { toast } from 'react-toastify';
import { addTransaction } from '../utility/tranasction';


class AddExpense extends Component {
constructor(props){
    super(props);
    this.state={
        txt: "",
        amount:0
    }
}

  //clearing form inputs
  clearForm(){
    this.setState({
    txt:"",
    amount:0
})
}

submitHandler(e) {
    e.preventDefault();
    try{
        const data = {
            txt:this.state.txt,
            amount:this.state.amount
        };

        console.log('expense =' , data)
        addTransaction(data);
        this.clearForm()
        toast.warning("Expense added successfully");
    }catch (err) {
        toast.error(err.message)
    }
}
getText(e){
        console.log(e.target);// whole input tag
        this.setState({
            txt:e.target.value //value attribute
     })
    }

    getAmount(e) {
        this.setState({
            amount: e.target.value
        })
    }

    render() {
        return (
                <div>
                    <form onSubmit={this.submitHandler.bind(this)} autoComplete={'off'}>
                <fieldset>
                    <legend className='minus'>Add Expense</legend>
                    <div className='form-control'>
                    <label htmlFor="txt">Text</label> 
                    <input type="text" name="txt" id="txt" className='form-input' value={this.state.txt} onChange={e => this.setState({txt: e.target.value})}  placeholder='Enter Text...' required/>
                   </div>

                    <div className='form-control'>
                    <label htmlFor="amount">-Amount</label> 
                    <input type="number" name="amount" id="amount" value={this.state.amount} onChange={e => this.setState({amount: e.target.value})} className='form-input' placeholder='Enter Amount...' required/>
                    </div>

                    <div className='form-control'>
                        <input type="submit" value="Add Expense" className='btn btn-expense' />
                    </div>
            
                  </fieldset>
                 </form>
                </div>
            
        )
    }
}

export default AddExpense