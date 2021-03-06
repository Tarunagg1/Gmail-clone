  
import React from 'react'
import styled from 'styled-components'

import Checkbox from '@material-ui/core/Checkbox'
import RefreshIcon from '@material-ui/icons/Refresh';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import {emailData} from '../data/Emaildata';
import Emailitem from '../emailitem/Emailitem';

const EmailsView = () => {
    return (
        <div>
            <Wrapper>
                <Topwrapper>
                    <Checkbox />
                    <IconButton>
                        <RefreshIcon />
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </Topwrapper>

                <EmailContainer>
                    {
                        emailData.map(({starred,from,subject,message,received,read}) => (
                            <>
                                <Emailitem 
                                    starred={starred}
                                    from={from}
                                    subject={subject}
                                    message={message}
                                    received={received}
                                    read={read}
                                 />
                            </>
                        ))                  
                    }
                </EmailContainer>

            </Wrapper>
        </div>
    )
}

const Wrapper = styled.div ``;

const Topwrapper = styled.div `
    padding-left: 20px;
    height: 40px;
`;

const EmailContainer = styled.div `

`;


export default EmailsView
