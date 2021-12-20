import { Container } from './styles';

export function Dashboard() {
    return (
        <Container>
            <div>
                <header>
                    <p>NOME DO EVENTO</p>
                  
                </header>
                <strong>Do While</strong>
                <strong>NLW</strong>
                <strong>Fala Dev</strong>
            </div>

            <div>
                <header>
                    <p>LOCAL</p>
                   
                </header>
                <strong>Youtube</strong>
                <strong>Youtube</strong>
                <strong>Twitch</strong>
            </div>

            <div>
                <header>
                    <p>DIA</p>
                    
                </header>
                <strong>01/12/2021</strong>
                <strong>08/12/2021</strong>
                <strong>06/12/2021</strong>
            </div>

            <div>
                <header>
                    <p>HORÁRIO</p>
                    
                </header>
                <strong>18:00</strong>
                <strong>19:00</strong>
                <strong>10:00</strong>

            </div>
        </Container>
    );
}
