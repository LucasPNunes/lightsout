
export default function CardArea(){
    return(
        <div className="cardArea">
        <SimpleCard
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGiPNtMjMTnBJVbUq4IgIRsgyCT6GZFCMAXg&s"
            title="Tour pela ilha"
            text="Consectetur fugiat ex in eiusmod. Officia consectetur nulla esse voluptate esse fugiat quis consectetur consectetur exercitation sit non non esse. Eu anim sint aliquip reprehenderit sit minim cillum."
        />
        <SimpleCard
            imageUrl="https://media-magazine.trivago.com/wp-content/uploads/2020/01/15141805/viagem-para-fernando-de-noronha-mergulhonosancho-fotomaisnoronha.jpg"
            title="Passeios de barco"
            text="Mollit fugiat irure ut excepteur est et adipisicing ipsum fugiat elit sint dolor officia exercitation. Sit cupidatat proident anim deserunt ad. Dolore excepteur aute id aliquip irure sunt ea ad."
        />
        <SimpleCard
            imageUrl="https://www.submarinoviagens.com.br/bora-nessa-trip/wp-content/uploads/2019/11/fernando-de-noronha-topo.jpg"
            title="Momentos incriveis"
            text="Est do qui excepteur aliqua velit quis ex. Id id duis labore quis nisi excepteur cillum est ut irure eiusmod nostrud culpa deserunt. "
        />
    </div>
    )
}

type CardProps = {
    imageUrl: string;
    title: string;
    text: string;
  };
  
function SimpleCard(props: CardProps){
    return (
        <div className="card">
            <img src={props.imageUrl} alt={props.title} style={{ width: '100%', borderRadius: '8px 8px 0 0' }} />
            <h3 style={{ margin: '16px 0 8px' }}>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    );
};