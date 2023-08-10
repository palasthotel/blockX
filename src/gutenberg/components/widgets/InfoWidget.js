
const InfoWidget = ({definition})=> {
    return <p dangerouslySetInnerHTML={{__html: definition.text}} />
};

export default InfoWidget;
