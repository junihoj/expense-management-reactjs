import React from 'react';
import { DateRangePicker } from 'react-dates';
import { connect } from 'react-redux';
import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from '../actions/filters';

class ExpenseListFilters extends React.Component{
    state = {
        calendarFocused:null,
    }

    onDatesChange = ({startDate, endDate})=>{
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };

    onFocusChange = (calendarFocused)=>{
        this.setState(()=>({
           calendarFocused
        }));
    };

   
    render(){
        console.log(this.props.filters.startDate);
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input type="text"
                            value={this.props.filters.text}
                            onChange={(e)=>{
                                this.props.dispatch(setTextFilter(e.target.value));
                            }}
                        />
                    </div>
                    <div className="input-group__item">
                        <select value={this.props.filters.sortyBy} onChange={
                            (e)=>{
                                if(e.target.value == 'amount'){
                                    this.props.dispatch(sortByAmount());
                                }else if (e.target.value=='date'){
                                    this.props.dispatch(sortByDate());
                                }
                            }
                        }>
                            <option value="date">Date</option>
                            <option value="amount">Amount</option>
                        </select>
                    </div>
                    <div className="input-group__item">
                        <DateRangePicker
                            startDate = {this.props.filters.startDate}
                            endDate = {this.props.filters.endDate}
                            onDatesChange={this.onDatesChange}
                            focusedInput = {this.state.calendarFocused}
                            onFocusChange= {this.onFocusChange}
                            numberOfMonths={1}
                            isOutsideRange={()=>false}
                            showClearDates={true}
                        />
                    </div>
                </div>
            </div>
        );
    }
}



const mapStateToProps = (state)=>{
    return {
        filters: state.filters
    };
}

export default connect(mapStateToProps)(ExpenseListFilters);