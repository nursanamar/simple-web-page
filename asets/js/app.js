/******************************************

harus jalan di localhost
masalah XMLHttpRequest()

******************************************/
function ProfilePitcure(props) {
  return <img className="gambar" src={props.picture}/>;
}

function ProfileName(props) {
  return <h3 className="nama">{props.nama}</h3>;
}

function ProfileAs(props) {
  return <p  className="lead as">{props.as}</p>
}

function ContactList(props) {
  return <li><img src={props.icon} /></li>;
}

function Contact(props) {
  return (<ul className="contact">
    {props.children}
  </ul>);
}

function Profile(props){
  return (
    <div className="col-sm-12">
      <ProfilePitcure picture={props.picture} />
      <br/>
      <ProfileName nama={props.nama} />
      <br/>
      <ProfileAs as={props.as} />
    </div>
  )
}

function App() {
  return (
    <div>
    <div  className="row cover">
      <div  className="col-sm-4 col-sm-offset-4">
        <Profile nama="Nursan amar" picture="asets/img/me.jpg" as="Freelancer As Junior Web Developer"/>
        <div className="col-sm-12">
          <Contact>
            <ContactList icon="asets/img/fb.jpg" />
            <ContactList icon="asets/img/mail.jpg" />
            <ContactList icon="asets/img/github.jpg" />
            <ContactList icon="asets/img/in.jpg" />
          </Contact>
        </div>
      </div>
    </div>
    <div className="row foot">
      <Credict by="Nursan amar" />
    </div>
    </div>
  )
}

function Credict(props) {
  return <p className="credict">Created by {props.by}</p>;
}

ReactDOM.render(
  <App />,
  document.getElementById('tempat')
);
