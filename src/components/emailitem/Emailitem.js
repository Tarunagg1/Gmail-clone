import React,{useState} from 'react'
import styled from 'styled-components';
import {Checkbox} from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import IconButton from '@material-ui/core/IconButton';
import StarIcon from '@material-ui/icons/Star';


function Emailitem({starred,from,subject,message,received,read}) {
    const [star,setStar] = useState(starred);
    
    return (
        <Wrapper>
            <Checkbox />
            <IconButton onClick={() => star ? setStar(false) : setStar(true)}>
                {
                    star ? (
                        <StarIcon />
                    ) : (
                        <StarBorderIcon />
                    )

                }
            </IconButton>
            <p className={!read && 'unread'} >{from}</p>
            
            <div>
                <p className={!read && 'unread'}>{subject}</p> - <span>{message}</span>
            </div>
            <p className={!read && 'unread'}>{received}</p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding-left: 20px;
    border-top: 1px solid lightgray;
    display: grid;
    grid-template-columns: min-content min-content 120px auto min-content;
    align-items: center;
    cursor: pointer;
    padding-right: 20px;
    div {
        display: flex;
        span {
            color: darkgray;
        }
    }
    .unread{
        color: black;
        font-weight: bolder;
    }
`;

export default Emailitem;