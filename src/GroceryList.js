import { Component } from "react";
import check from './green_loop_leaf_check_mark_logo.jpg';

export class GroceryList extends Component {
    state = {
        userInput: '',
        userNumber: '',
        groceryList: []
    }
    // хотим следить за событием
    onChangeEvent (e) {
        this.setState({userInput: e});
 
    }

    onChangeNumber (e) {
        this.setState({userNumber: e})
    }

    addItem(input, amount){
        // условие, чтобы пустые не добавлялись
        if (input === ''){
            alert('Please, enter an item')
        }
        else {
            // куда попадают данные
            let listArray = this.state.groceryList;
            // в скобках input потому что мы пишем то, что добавляет пользователь и мы его поставили в addItem(INPUT)
            listArray.push(input + ", " + amount);
            // userInput = '' - опустошает поле ввода
            this.setState({groceryList: listArray, userInput: '', userNumber: ''})
        }

    }

    crossedWord(e){
        // как только с li изменится/произойдет событие/изменение, подслушиваем/отслеживаем
        const li = e.target;
        li.classList.toggle('crossed')
    }

    deleteItem = () => {
        let listArray = this.state.groceryList;
        // опустошаем массив
        listArray = [];
        this.setState({ groceryList: listArray})

        // либо можно написать вот так:
        // listArray.length = 0;
    }

    onFormSubmit(e){
        e.preventDefault();
    }

    render() {
        return(
            <div>
                {/* чтобы при нажатии enter тоже добавлялось в лист form => onSubmit */}
                <form onSubmit={this.onFormSubmit}>
                    <div className="container">
                        <input type="text" 
                        placeholder="What do you want to buy?" 
                        onChange={(e) => { this.onChangeEvent(e.target.value) }}
                        value = { this.state.userInput }/>
                    </div>

                    <div className="container">
                        <input type="number" placeholder="Amount" 
                        onChange={ (e) => this.onChangeNumber(e.target.value) }
                        value={ this.state.userNumber }/>
                    </div>

                    <div className="container">
                        {/* this.state.userInput - чтобы приравнять к тому, что пишет пользователь */}
                        <button className="btn btn-add" onClick={() => {this.addItem(this.state.userInput, this.state.userNumber)}}>Add</button>
                    </div>
                    <div className="containerList">
                        <ul>
                            {this.state.groceryList.map((item, index) => (
                                <li onClick={ this.crossedWord } key={ index }>
                                    <img src= { check } alt="checked" width='40px'/>
                                    { item } </li>
                            ))}
                        </ul>
                    </div>
                    
                    <div className="container">
                        <button className="btn btn-delete" onClick={ this.deleteItem }>Delete</button>
                    </div>
                                    
                </form>
            </div>
        )
    }

}