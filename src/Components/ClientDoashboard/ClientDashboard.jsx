import React from 'react'
import logo from '../../Images/image.svg'
import {
    Button,
    Date,
    Line,
    LinkActual,
    LinkRequest,
    Logo,
    LogoBlock,
    Mark,
    NotificationMessage,
    PublishedInfo,
    PublishedUpdate,
    Title,
    Wrapper
} from "./stylesComponents/styled";


const ClientDashboard = () => {
    return (
        <Wrapper>
            <Title>Catering para Eventos</Title>
            <Date>12 March 2019</Date>
            <PublishedInfo><PublishedUpdate>Pedido publicado.</PublishedUpdate>
                <LinkActual>Actualizar</LinkActual></PublishedInfo>
            <Line />
            <LogoBlock>
                <Logo src={logo}/>
                <Mark>!</Mark>
            </LogoBlock>
            <NotificationMessage>1 profissional esta pronto para realizar està projeto</NotificationMessage>
            <Button>Ver 1 proposta</Button>
            <LinkRequest>Fazer novo pedido</LinkRequest>
        </Wrapper>
    )

};

export default ClientDashboard;