import React, {useState} from 'react';
import Input from "./Input";
import IconButton from "./IconButton";
import {Icon24CalendarOutline} from "@vkontakte/icons";

const DatePicker = () => {
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0])
    return (
        <div>
            <Input
                after={<Icon24CalendarOutline className={'text-ui-primary cursor-pointer'}/>}
                type={'date'}
                placeholder={'Дата'}
                value={selectedDate}
                onChange={e => {
                    const newValue = e.currentTarget.value || new Date().toISOString().split('T')[0]
                    setSelectedDate(newValue)
                }}
            />
            <div>
                <div className={'flex flex-row justify-between'}>
                    <div>
                        <button></button>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default DatePicker;