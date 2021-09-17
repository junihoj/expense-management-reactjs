import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('Should setup remove expense action object', ()=>{
    const action = removeExpense({id: '123'});

    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id:'123'
    });
});


test('Testing Edit Expense', ()=>{
    const action = editExpense(1,{amount:57, description:'A description'});

        expect(action).toEqual({
            type:'EDIT_EXPENSE',
            id:1,
            updates:{amount:57, description:'A description'}

        });
});

test("should setup AddExpense with passed value", ()=>{
    const expenseData = {
        description: 'Rent',
        amount:180,
        note:'some note'
    };
    const action = addExpense(expenseData);

    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
        createdAt:0,
        description: 'Rent',
        amount:180,
        id: expect.any(String),
        note:'some note'
        }
    });
});

test("Checking for AddExpense Default", ()=>{
    const action = addExpense();

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense:{
            createdAt:0,
           amount:0,
           note:'',
           id:expect.any(String),
           description:'',
        }
    });
});