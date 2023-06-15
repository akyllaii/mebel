import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import debounce from '@material-ui/core/utils/debounce'

const RangeInput = ({slider,setSlider}) => {

    const handleChange = (event, newValue) => {
        setSlider(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Slider
                getAriaLabel={() => 'Temperature range'}
                defaultValue={slider}
                onChange={debounce(handleChange, 1000)}
                valueLabelDisplay="auto"
                min={0}
                step={100}
                max={30000}
            />
        </Box>
    );
}
export default RangeInput