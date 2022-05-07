import React, {useState} from 'react';

const Converter = () => {
    const [color, setColor] = useState("#FFFFFF");

    const handleColorChange = e => setColor(e.target.value);

    document.body.style.backgroundColor = color.length >= 7 ? color : '#FFFFFF';

    const validateInput = color => {
        let reg=/^#([0-9a-f]{6})$/i.test(color);
        if (reg && color.length >= 7) return convertResult(color);
        else if (!reg && color.length >= 7) return 'Ошибка!'
    }

    const convertResult = (hex) => {
        let bigint = parseInt(hex.split('#')[1], 16);
        let r = (bigint >> 16) & 255;
        let g = (bigint >> 8) & 255;
        let b = bigint & 255;
        return `rgb(${r}, ${g}, ${b})`;
    }

    return (
        <>
            <form className='inputForm'>
            <input className='colorInput'
                type="text"
                value={color}
                onChange={handleColorChange}
            />
            <div className="rgb">
                {validateInput(color)}
            </div>
            </form>
        </>
    );
};
export default Converter;