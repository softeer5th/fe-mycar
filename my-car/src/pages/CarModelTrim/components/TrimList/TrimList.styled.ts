import {styled} from "styled-components";


export const TrimList = styled.ul`
    padding: 0 50px 20px 50px;
    width: 100%;
    height: 88px;
    display: flex;
    gap: 60px;
    margin-top: 30px;
`

export const TrimListItem = styled.li`
    height: fit-content;
    margin: auto 0;
`

export const TrimTitle = styled.span`
    
`

export const TrimNameList = styled.div`
    margin-top: 10px;
    display: flex;
`

export const TrimName = styled.button<{ isSelected: boolean }>`
    min-width: 109px;
    width: auto;
    height: 40px;
    background-color: ${({ isSelected }) => isSelected ? '#007fa8' : 'white'};
    color: ${({ isSelected }) => isSelected ? '#fff' : '#666' };
    font-size: 14px;
    font-weight: 500;
    border: ${({ isSelected }) => isSelected ? 'none' : '1px solid #dcdfe6' };
    transition: all .3s cubic-bezier(.645,.045,.355,1);
`
