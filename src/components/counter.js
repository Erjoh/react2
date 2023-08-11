import React, {useEffect, useState} from 'react';
import Buttons from "./buttons";

const Counter = () => {
    const [count, setCount] = useState(0)
    const [value, setValue] = useState('')
    const handleIncrease = () => {
        setCount(count + 1)
    }
    const handleDecrease = () => {
        setCount(count - 1)
    }
    useEffect(() => {
        console.log(count)
    }, [])

    const handleChange = (e) => {
        setValue(value + e.target.value)
    }

    const handleOperator = (oper) => {
        setValue((toValue) => toValue + oper)
    }

    const handleRes = () => {
        try {
            const result = eval(value);
            setValue(result.toString());
        } catch (error) {
            setValue('Error');
        }
    };

    const handleClean = () => {
        setValue('')
    }
    return (
        <div>
            <h3>{count}</h3>
            <Buttons title={'+'} MyOnClick={handleIncrease}/>
            <Buttons title={'-'} MyOnClick={handleDecrease}/>
            <input type="text" defaultValue={value}/>
            <div>
                <input type="button" value={0} onClick={handleChange}/>
                <input type="button" value={1} onClick={handleChange}/>
                <input type="button" value={2} onClick={handleChange}/>
                <input type="button" value={3} onClick={handleChange}/>
                <input type="button" value={4} onClick={handleChange}/>
                <input type="button" value={5} onClick={handleChange}/>
                <input type="button" value={6} onClick={handleChange}/>
                <input type="button" value={7} onClick={handleChange}/>
                <input type="button" value={8} onClick={handleChange}/>
                <input type="button" value={9} onClick={handleChange}/>
                <input type="button" value={'+'} onClick={() => handleOperator('+')}/>
                <input type="button" value={'-'} onClick={() => handleOperator('-')}/>
                <input type="button" value={'*'} onClick={() => handleOperator('*')}/>
                <input type="button" value={'/'} onClick={() => handleOperator('/')}/>
                <input type="button" value={'='} onClick={handleRes}/>
                <input type="button" value={'AC'} onClick={handleClean}/>
            </div>
        </div>
    );
};

export default Counter;