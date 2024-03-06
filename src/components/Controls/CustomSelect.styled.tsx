import styled from "styled-components";
import Select from "react-select";
export const CustomSelect = styled(Select).attrs({
    styles :{
        control: (provided) => ({
            ...provided,
            backgroundColor: 'var(--colors-ui-base)',
            color: 'var(--colors-text)',
            borderRadius: 'var(--radii)',
            border: 'none',
            height: '50px',
            boxShadow: 'var(--shadow)'
        }),
        option: (provided, state) => ({
            ...provided,
            color: 'var(--colors-text)',
            cursor: 'pointer',
            backgroundColor: state.isSelected ? 'var(--colors-bg)' : 'var(--colors-ui-base)'
        }),
    }
})`
width: 200px;
borderRadius: 'var(--radii)';
& *{
    color: var(--colors-text) !important;
}
`;